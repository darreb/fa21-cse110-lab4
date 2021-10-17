let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2 
}

let i  = 0;
propertyNames = Object.getOwnPropertyNames(statistics);
for (const car in statistics){
    if(statistics[car]%2 == 1 || propertyNames[i][0] == 'r'){
        console.log(statistics[car]);
    }
    i += 1;
}