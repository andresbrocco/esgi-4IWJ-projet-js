import Vehicule from './vehicule.js';

function Moto() {
    this.prototype = Object.create(new Vehicule());

}
