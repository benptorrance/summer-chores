
const name = "Benjamin";

doSummerChores(name);




function doSummerChores(name){
    setTimeout(mowYard, 2000, name, (result) => {
        if(result){
            console.log(`${name} has finished his chores.`);
        }else{
            console.log(`${name} has fallen asleep.`);
        }
    });
}

function mowYard(name, callback){
    console.log(`${name} mowed the yard.`);
    if(Math.random() > 0.35){
        setTimeout(weedEat, 1500, name, callback);
    }
    else{
        callback(false);
    }
}
function weedEat(name, callback){
    console.log(`${name} finished using the weed eater.`);
    if(Math.random() > 0.45){
        setTimeout(trimHedges, 1000, name, callback);
    }
    else{
        callback(false);    
    }
}
function trimHedges(name, callback){
    console.log(`${name} finished trimming the hedges.`);
    if(Math.random() > 0.7){
        setTimeout(collectWood, 2500, name, callback);
    }
    else{
        callback(false);
    }
}
function collectWood(name, callback){
    console.log(`${name} finished collecting wood.`);
    if(Math.random() > 0.75){
        setTimeout(waterGarden, 500, name, callback);
    }
    else{
        callback(false);
    }
}
function waterGarden(name, callback){
    console.log(`${name} finished watering the garden.`);
    if(Math.random() > 0.1){
        callback(true);
    }
    else{
        callback(false);
    }
}