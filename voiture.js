import Vehicule from './vehicule.js';

function Voiture() {
    this.prototype = Object.create(new Vehicule());

}
