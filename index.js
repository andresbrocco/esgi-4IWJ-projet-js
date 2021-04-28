import Circuit from "./circuit";

let circuit = new Circuit();

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

main();
