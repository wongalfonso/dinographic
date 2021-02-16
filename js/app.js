import $ from 'jquery';
import Dino from './components/Dino.js';
import Form from './components/Form.js';
const dino = new Dino();
const form = new Form();


$(document).ready(() => {
    dino();
    form();
})