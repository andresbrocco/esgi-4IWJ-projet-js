export default function Vehicle(driver, number, maxVelocity) {
    this.name = driver.name;
    this.number = number;
    this.maxVelocity = maxVelocity;
    this.distance = 0; // needs to be public so the circuit can change in the case where someone attacked with a 'switch' weapon.
    let weapon = null;
    let needUpdateFlag = false;
    this.receiveData = function (data) {
        switch (data.event){
            case "start":
                driver.receiveData({"state":"ready"});
                break;
            case "info":
                ride(maxVelocity)
                if (weapon != null){
                   fireWeapon(data.competitors, this.number);
                }
                break;
            case "weapon":
                weapon = data.value;
                ride(maxVelocity, {"state":"happy"})
                break;
            case "attack":
                touched(data.value);
                break;
            case "finish":
                driver.receiveData({"state":"finish", "position":data.value});
                break;
        }
        needUpdateFlag = true;
    }
    this.needUpdate = () => needUpdateFlag;
    let ride = function (X, toPilot = {"state":"normal"}) {
        this.distance += X;
        driver.receiveData(toPilot);
    }
    let fireWeapon = function (competitors){
        weapon.onFire(this.number);
        weapon = null;
    }
    let touched = function (value){
        let toPilot = {"state":"sad", "origin":value.origin};
        if(weapon === 'bubble') {
            weapon = null;
            ride(maxVelocity, toPilot);
        } else {
            if(value.effect == null){
                driver.receiveData(toPilot);
            } else {
                ride(value.effect, toPilot);
            }
        }
    }
    this.display = function(){
        console.log(`Vehicle number :${this.number}`);
        console.log(`    Driver :${this.name}`);
        console.log(`    Distance :${this.distance}`);
        console.log(`    Speed :${maxVelocity}`);
        console.log(`    Weapon :${weapon}`);
        if (driver.needUpdate()) {
            driver.speak();
        }
        needUpdateFlag = false;
    }
}