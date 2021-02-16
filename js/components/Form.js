import $ from 'jquery';
import Dino from './Dino.js';
const dino = new Dino();


(function() {

  let submit = $('#btn');
  submit.on('click', (e) => onSubmit(e));

  function onSubmit(e) {
    e.preventDefault();

    let obj = new Object();
    obj.name = $('#name').val();
    obj.feet = $('#feet').val();
    obj.inches = $('#inches').val();
    obj.weight = $('#weight').val();
    obj.diet = $('#diet').val();

    dino(obj);
    $('#dino-compare').hide();
    $('#grid').show();
  };
})();
