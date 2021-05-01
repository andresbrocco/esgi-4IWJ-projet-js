// Objet Circuit
import Car from "./Car";
import Moto from "./Moto";
import Driver from "./Driver";
import Weapon from "./Weapon";

export default function Circuit(distTotal, nArmes){
    let vehicles = {}; // Dictionary {"vehicleNumber" : vehicleObject}
    let vehiclePositions = {}; // Dictionary {"vehicleNumber" : position}
    let objectsInCircuit = {};
    let maxVelocity = distTotal/20;

    this.initRun = function (){
        for (let i=0 ; i<nArmes ; i++ ){
            let weaponPosition = Math.floor((Math.random() * distTotal) + 1);
            let weaponType = 'random';
            let weapon = new Weapon(weaponType);
            objectsInCircuit[weaponPosition] = weapon;
        }
    }

    let addVehicle = function (driverName, vehicleType) {
        if (vehicleType !== "M" || vehicleType !== "V"){
            console.log("Failed to add Vehicle: Invalid type")
            return
        } else {
            let driver = new Driver(driverName);
            let vehicleNumber = vehicles.length;
            if(vehicleType === "M") {
                vehicles[vehicleNumber] = new Moto(driver, vehicleNumber, maxVelocity);
            } else {
                vehicles[vehicleNumber] = new Car(driver, vehicleNumber, maxVelocity);
            }
            vehiclePositions[vehicleNumber] = 0;
        }
    }

    this.createVehicles = function (){
        while(true){
            let driverName = prompt("Nom du Pilote : ");
            if (driverName !== "") {
                let vehicleType = prompt("Type de vehicule (M/V): ");
                addVehicle(driverName, vehicleType);
            } else {
                console.log("Finished adding vehicles.")
                break
            }
        }
    }

    this.start = function (){
        Object.entries(vehicles).forEach(([vehicleNumber, vehicle]) => {
            vehicle.receiveData({"event" : "start"})
        });
    }

    this.update = function (){
        Object.entries(vehicles).forEach(([vehicleNumber, vehicle]) => {
            vehicle.receiveData({"event":"info", "competitors":vehiclePositions});
            //Vehicule.receiveData(vehiculeInfo)
            //piloteInfo = Pilote.calculeInfo()
            //SI BESOIN(2 infos diff) Pilote.receiveData(piloteInfo)
            // SI (Vehicule.needUpdate())
            //TRUE Vehicule.display()
            //
            //SI (Pilote.needUpdate())
            //TRUE pilot.speak()
            });
    }
}