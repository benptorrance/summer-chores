const name = "Benjamin";

doSummerChores(name);

function doSummerChores(name){
    new Promise((resolve, reject) =>{
        setTimeout(() => {resolve(console.log(`${name} mowed the yard.`))}, 2000);
    }).then(() => {
        if(Math.random() > 0.2){
            return new Promise((resolve, reject) => {
                setTimeout(() => resolve(console.log(`${name} finished using the weed eater.`)), 1500)
            });
        } else {
            throw `${name} fell asleep.`;
        }
    }).then(() => {
        if(Math.random() > 0.35){
            return new Promise((resolve, reject) => {
            setTimeout(() => resolve(console.log(`${name} finished trimming the hedges.`)), 1000)
        });
        } else {
            throw `${name} fell asleep.`;
        }
    }).then(() => {
        if(Math.random() > 0.45){
            return new Promise((resolve, reject) => {
            setTimeout(() => resolve(console.log(`${name} finished collecting wood.`)), 2500)
        });
        } else {
            throw `${name} fell asleep.`;
        }
    }).then(() => {
        if(Math.random() > 0.7){
            return new Promise((resolve, reject) => {
            setTimeout(() => resolve(console.log(`${name} finished watering the garden.`)), 500)
        });
        } else {
            throw `${name} fell asleep.`;
        }
    }).then(() => {
        console.log(`${name} has finished his chores.`)
    }).catch((error) => {
        console.error(error);
    })
}
