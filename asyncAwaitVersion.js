const name = "Benjamin";

doSummerChores(name);

async function doSummerChores(){   
    try{
        let complete = await mowYard();
        if(complete === true){
            console.log(`${name} has finished his chores.`)
        }else{
            console.log(`${name} has fallen asleep.`)
        }
    }catch (error){
        console.error(error);
    }
}

async function mowYard() {
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${name} has mowed the yard.`);
                resolve();
            }, 2000)
        });
        if (Math.random() > 0.2){
            return weedEat();
        } else {
            return false;
        }
    } catch (error){
        console.error(error);
    }
}
async function weedEat() {
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${name} has finished using the weed eater.`);
                resolve();
            }, 1500)
        });
        if (Math.random() > 0.35){
            return trimHedges();
        } else {
            return false;
        }
    } catch (error){
        console.error(error);
    }
}
async function trimHedges() {
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${name} has finished trimming the hedges.`);
                resolve();
            }, 1000)
        });
        if (Math.random() > 0.45){
            return collectWood();
        } else {
            return false;
        }
    } catch (error){
        console.error(error);
    }
}
async function collectWood() {
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${name} has finished collecting wood.`);
                resolve();
            }, 2500)
        });
        if (Math.random() > 0.7){
            return waterGarden();
        } else {
            return false;
        }
    } catch (error){
        console.error(error);
    }
}
async function waterGarden() {
    try{
        await new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`${name} has finished watering the garden.`);
                resolve();
            }, 1000)
        });
        return true;
    } catch (error){
        console.error(error);
    }
}