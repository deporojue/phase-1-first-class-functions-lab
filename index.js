const returnFirstTwoDrivers = function(drivers) {
    return [drivers[0],drivers[1]]
}

const drivers = ["charlie","babo","dada","alligator"]

console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = function(drivers) {
    return [drivers[drivers.length-2],drivers[drivers.length-1]]
}

console.log(returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

console.log(selectingDrivers)

const createFareMultiplier = function(multiplier) {
    return function(baseFare) {
        return baseFare * multiplier
    }
}

console.log(createFareMultiplier(4)(40))

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

console.log(fareDoubler(10))

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

console.log(fareTripler(10))

const selectDifferentDrivers = function(drivers,cb) {
    return cb(drivers);
}

console.log(selectDifferentDrivers(drivers,returnFirstTwoDrivers))

console.log(selectDifferentDrivers(drivers,returnLastTwoDrivers))