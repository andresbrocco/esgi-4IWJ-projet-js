// Objet Circuit
import Voiture from "./voiture";
import Moto from "./moto";
import Pilote from "./pilote";


export default function Circuit(nVehicules){
    let vehicules = [];
    this.initRun();
    this.initVehicules();
    this.start();



    this.initRun = function (){
        let distTotal = 100;
        let maxVelocity = distTotal/20;
        let nArmes = 10;
        let positionArmes = [];
        for (let i=0 ; i<nArmes ; i++ ){
            positionArmes.push(Math.floor((Math.random() * distTotal) + 1));
        }
    }

    this.initVehicules = function (){
        for (let i=0 ; i<nVehicules ; i++ ){
            let namePilote = prompt("Nom du Pilote : ");
            let pilote = new Pilote(namePilote);
            let typeVehicule = prompt("Type de vehicule (M/V): ");
            if(typeVehicule === "M") vehicules.push(new Moto(pilote, i, maxVelocity));
            else vehicules.push(new Voiture(pilote, i, maxVelocity));
        }
    }

    this.start = function (){
        vehicules.forEach((vehicule) => vehicule.receiveData( { "event" : "start"}))
    }


    this.update = function (){
        vehicules.forEach(
            //vehiculeInfo = Vehicule.calculeInfo()
            //Vehicule.receiveData(vehiculeInfo)
            //piloteInfo = Pilote.calculeInfo()
            //SI BESOIN(2 infos diff) Pilote.receiveData(piloteInfo)
            // SI (Vehicule.needUpdate())
            //TRUE Vehicule.display()
            //
            //SI (Pilote.needUpdate())
            //TRUE pilot.speak()
        )
    }
}

//pour chaque tour (1 seconde)
    //Chaque Vehicule
