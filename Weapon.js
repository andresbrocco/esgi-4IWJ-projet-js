export default function Weapon(type='random'){
    let possibleTypes = ['tank', 'bubble', 'banana', 'switch'];
    if (type === "random"){
        type = possibleTypes[Math.floor(Math.random()*(possibleTypes.length-0.00000000001))];
    }
    this.type = type;
    switch (this.type){
        case 'tank':
            this.onFire = function(vehicleNumber){
                // Attaque le véhicule devant soi;
                return function (circuit){
                    let myPosition = sortDictByValue(circuit.vehiclePositions).find((element, index))


                        const result = inventory.find( ({ name }) => name === 'cherries' );

                    console.log(result) // { name: 'cherries', quantity: 5 }
                }
            };
            break
        case 'bubble':
            this.onFire = function(vehicleNumber){
                // Protection pendant 1 attaque;
            }
            break
        case 'banana':
            this.onFire = function(vehicleNumber){
                // Lance une banane à la position précédente, le premier véhicule qui dépasse cette position est attaquée
            }
            break
        case 'switch':
            this.onFire = function(vehicleNumber){
                // Switch de position entre le 1er et soi
            }
            break
    }
}

function sortDictByValue(dict){
    // Create dict array
        var array = Object.keys(dict).map(function(key) {
            return [key, dict[key]];
        });

    // Sort the array based on the second element
        array.sort(function(first, second) {
            return second[1] - first[1];
        });
        return array
}