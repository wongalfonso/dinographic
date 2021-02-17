import $ from 'jquery';
import DinosData from '../dino.json';



/**
* @description IFEE function runs event handlers for form.
* @constructor
* @param {obj} human - Human object created once form is submitted.
*/

(function () {

    let submit = $('#btn');
    submit.on('click', (e) => onSubmit(e));

    function onSubmit(e) {
        e.preventDefault();

        let human = new Object();
        human.species = $('#name').val();
        human.height = Number($('#inches').val()) + (Number($('#feet').val()) * 12);
        human.weight = Number($('#weight').val());
        human.diet = $('#diet').val();

        new Dino(human);

        // Remove form from screen
        $('#dino-compare').hide();

        // On button click, prepare and display infographic
        $('#grid').show();
    }
})();

/**
* @description Function that takes one argument and compares the object against an array of objects
* @constructor Dino
* @param {obj} dinoObject - Array of objects
* @param {obj} human - Human object
* @param {obj} results - copy of dinoObject
* @param {function} randomSelect - A function that will randomly produce a number between 1 and 3 and based on the output, will select a method to compare the two objects.
* @param {function} random - function that randomly produces a number between 1 and 3.
* @param {method} method1 - compares the weight of the human object and the dino object. Will return a string.
* @param {method} method2 - compares the height of the human object and the dino object. will return a string.
* @param {method} method3 - outputs a location fact from the dino object.
* @param {function} mountTiles - jQuery generated function to mount the tiles. Results.map is used to spread the array into each tile. 
*/

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
    };


    // Create Dino Compare Method 1
    this.method1 = function (res) {
        return `${res.species} weights ${Number(res.weight) - this.humanObject.weight} lbs more than you.`;
    };

    // Create Dino Compare Method 2
    // NOTE: Weight in JSON file is in lbs, height in inches.
    this.method2 = function (res) {
        return `${res.species} is ${(Number(res.height) * 12) - this.humanObject.height} inches taller than you.`;
    };

    // Create Dino Compare Method 3
    // NOTE: Weight in JSON file is in lbs, height in inches.
    this.method3 = function (res) {
        return `${res.species} would live in ${res.where}`;
    };

    // Generate Tiles for each Dino in Array


    // Add tiles to DOM
    this.mountTiles = function (results) {
        $('#grid').html('<div class = \'grid-container\'>' +
        `${results.map((result) => '<div class = \'grid-item\'>' +
            `<h3>${result.species}</h3>` +
            `<img src = "./images/${result && result.type === 'Human' ? 'human' : result.species.toLowerCase()}.png"/>` +
            `<p>${results && result.type === 'Human' ? result.diet : this.randomSelect(result)}</p>
          </div>`).join('')}` +
        '</div>');
    };

    this.mountTiles(this.results);

}