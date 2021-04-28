export default function Vehicule(pilote, number, maxVelocity) {
    this.name = pilote.name;
    this.number = number;
    this.maxVelocity = maxVelocity;
    let onFire;
    let arme = null;
    let distance = 0;
    let needUpdateFlag = false;
    this.receiveData = function (data) {
        switch (data.event){
            case "start":
                pilote.receiveData({"state":"ready"});
                needUpdateFlag = true;
                break;
            case "info":
                ride(maxVelocity)
                if (arme != null){
                   fireWeapon();
                }
                needUpdateFlag = true;
                // return info;
                break;
            case "weapon":
                setWeapon(data.value)
                needUpdateFlag = true;
                break;
            case "attack":
                touched(data.value);
                needUpdateFlag = true;
                break;
            case "finish":
                pilote.receiveData({"state":"finish", "position":data.value});
                needUpdateFlag = true;
                break;
        }
    }
    this.needUpdate = () => needUpdateFlag;
    let ride = function (X, toPilot = {"state":"normal"}) {
        distance += X;
        pilote.receiveData(toPilot);
    }
    let setWeapon = function (weapon){
        arme = weapon;
        ride(maxVelocity, {"state":"happy"})
    }
    let fireWeapon = function (){
        // ride(maxVelocity);
        return onFire(); // ????????
    }
    let touched = function (value){
        let toPilot = {"state":"sad", "origin":value.origin};
        if(arme === 'bubble') {
            arme = null;
            ride(maxVelocity, toPilot);
        } else {
            if(value.effect == null){
                pilote.receiveData(toPilot);
            } else {
                ride(value.effect, toPilot);
            }
        }
    }
    this.display = function(){
        console.log(`Vehicule numero :${this.number}`);
        console.log(`    Pilote :${this.name}`);
        console.log(`    Distance :${distance}`);
        console.log(`    Vitesse :${maxVelocity}`);
        console.log(`    Arme :${arme}`);
        if (pilote.needUpdate()) {
            pilote.speak();
        }
        needUpdateFlag = false;
    }
}