import $ from 'jquery';


function Form() {

  console.log('running');
  this.name = $('#name');
  this.feet = $('#feet');
  this.inches = $('#inches');
  this.weight = $('#weight');
  this.diet = $('#diet');
  this.submit = $('#btn');
  this.submit.on('click', (e) => onSubmit(e));

  function onSubmit(e) {
    e.preventDefault();
    console.log(this.name, this.feet, this.inches, this.weight, this.diet);

  }
}

export default Form;