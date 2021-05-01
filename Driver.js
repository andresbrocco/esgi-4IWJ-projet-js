export default function Driver(name){
    this.name = name; //publique
    let lastData = null;
    let needUpdateFlag = false;

    // Recevoir données du Véhicule
    this.receiveData = function(data){
        if (lastData !== data) {
            lastData = data;
            needUpdateFlag = true;
        }
    }

    // Verifie selon infos, si on doit appeler speak()
    this.needUpdate = function(){
        if(needUpdateFlag) // Si le state est différent du précédent
            this.speak();
    }

    // Connaitre état(state) du Pilote
    this.getState = function(){
        return lastData.state;
    }

    // Génére phrase selon données reçues
    this.speak = function(){
        switch (lastData.state){
            case "ready" :
                console.log(`Here we go! I'm ${this.name}`);
                break;
            case "happy" :
                console.log("Let's have some fun!");
                break;
            case "sad" :
                console.log(`Outch!!! Damn ${lastData.origin}`);
                break;
            case "normal" :
                console.log("");
                break;
            case "finish" :
                if(lastData.position==1) console.log("I'm the best");
                else if(lastData.position==2) console.log("Could be the best");
                else console.log("Will be better next time");
                break;
        }
    }

    // Si le pilote reçoit 2 fois une même instruction
    // il ne doit rien faire.
}