import Vehicle from './Vehicle.js';

export default function Car() {
    this.prototype = Object.create(new Vehicle());

}
