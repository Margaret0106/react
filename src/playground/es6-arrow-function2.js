//arguments object - no longer bound with arrow function

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1))


//this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['London', 'Moscow', 'Dublin'],
    printPlacesLived() {        
        return this.cities.map((city) => this.name + ' has lived in ' + city + '!');
 
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' has lived in ' + city)
        // })
    }
}

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [5,3,2,6,7],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())


