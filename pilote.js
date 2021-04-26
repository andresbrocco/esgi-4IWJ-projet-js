// Objet Pilote
export default function Pilote(name){
    this.name = name; //publique
    let state = ""; //privé

    // Recevoir données du Véhicule
    this.receiveData = function(data){
        //Vehicule.getData();
            //State
            //Origin
            //Position
    }

    // Verifie selon infos, si on doit appeler speak()
    this.needUpdate = function(){
        if(!state==this.receiveData(data).state) // Si le state est différent du précédent
            speak(this.receiveData(data).state);
    }

    // Connaitre état(state) du Pilote
    this.getState = function(){
        return state;
    }

    // Génére phrase selon données reçues
    this.speak = function(){
        switch (state){
            case "ready" :
                console.log(`Here we go! I'm ${this.name}`);
                break;
            case "happy" :
                console.log("Let's have some fun!");
                break;
            case "sad" :
                console.log(`Outch!!! Damn ${origin}`);
                break;
            case "normal" :
                console.log("");
                break;
            case "finish" :
                if(position==1) console.log("I'm the best");
                else if(position==2) console.log("Could be the best");
                else console.log("Will be better next time");
                break;
        }
    }

    // Si le pilote reçoit 2 fois une même instruction
    // il ne doit rien faire.





}