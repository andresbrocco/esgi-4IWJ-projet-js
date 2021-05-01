import Circuit from "./Circuit";
import Driver from "./Driver";
import Moto from "./Moto";
import Car from "./Car";

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log('Starting race!');
    for (let i = 0; i < 10; i++) {
        circuit.update();
        await sleep(1000);
    }
}


let circuit = new Circuit(100, 5);
circuit.createVehicles();
circuit.initRun();
circuit.start();

main();
