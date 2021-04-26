// Objet Circuit
export default function Circuit(){

    this.initRun = function (){
        //Genere distance totale Circuit
        //Genere positions boites d'armes
    }

    this.initVehicules = function (){
        //Genere Vehicules (Vitesse Max calculer selon longueur Circuit)
    }
}

//pour chaque tour (1 seconde)
    //Chaque Vehicule
        //vehiculeInfo = Vehicule.calculeInfo()
        //Vehicule.receiveData(vehiculeInfo)
            //piloteInfo = Pilote.calculeInfo()
            //SI BESOIN(2 infos diff) Pilote.receiveData(piloteInfo)
        // SI (Vehicule.needUpdate())
            //TRUE Vehicule.display()
            //
            //SI (Pilote.needUpdate())
            //TRUE pilot.speak()