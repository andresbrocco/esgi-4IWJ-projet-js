import Vehicle from './Vehicle.js';

export default function Moto() {
    this.prototype = Object.create(new Vehicle());

}
