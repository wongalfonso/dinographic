import $ from 'jquery';
import DinosData from '../dino.json';



// Use IIFE to get human data from form

(function () {

    let submit = $('#btn');
    submit.on('click', (e) => onSubmit(e));

    function onSubmit(e) {
        e.preventDefault();

        let obj = new Object();
        obj.species = $('#name').val();
        obj.height = Number($('#inches').val()) + (Number($('#feet').val()) * 12);
        obj.weight = Number($('#weight').val());
        obj.diet = $('#diet').val();

        new Dino(obj);

        // Remove form from screen
        $('#dino-compare').hide();

        // On button click, prepare and display infographic
        $('#grid').show();
    };
})();

// Create Dino Constructor

function Dino(human) {


    // Create Dino Objects
    const dinoObject = DinosData.Dinos;


    // Create Human Object
    this.humanObject = human;
    this.humanObject.where = 'World Wide';
    this.humanObject.when = 'Current';
    this.humanObject.type = 'Human';

    this.results = dinoObject.slice();
    this.results.splice(4, 0, this.humanObject);

    // NOTE: Weight in JSON file is in lbs, height in inches. 
    this.randomSelect = function (res) {

        let random = Math.floor(Math.random() * 3) + 1;
        if (res.species === 'Pigeon') {
            return res.fact;
        } 
        switch (random) {
            case 1: {
                return this.method1(res);
            }
            case 2: {
                return this.method2(res);
            }
            case 3: {
                return this.method3(res);
            }
            default: {
                return res.fact;
            }
        }
    }


    // Create Dino Compare Method 1
    this.method1 = function (res) {
        return `${res.species} weights ${Number(res.weight) - this.humanObject.weight} lbs more than you.`;
    }

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    this.method2 = function (res) {
        return `${res.species} is ${(Number(res.height) * 12) - this.humanObject.height} inches taller than you.`;
    }

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    this.method3 = function (res) {
        return `${res.species} would live in ${res.where}`
    }

    // Generate Tiles for each Dino in Array


    // Add tiles to DOM
    this.mountTiles = function (results) {
        $('#grid').html(`
        <div class = 'grid-container'>${results.map((result) => `
          <div class = 'grid-item'>
            <h3>${result.species}</h3>
            <img src = "./images/${result && result.type === 'Human' ? 'human' : result.species.toLowerCase()}.png"/>
            <p>${results && result.type === 'Human' ? result.diet : this.randomSelect(result)}</p>
          </div>`
        ).join('')}
        </div>
      `)
    }

    this.mountTiles(this.results);

}