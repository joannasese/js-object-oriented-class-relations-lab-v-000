let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  passengers(){
    return store.passengers.filter(passenger=>{
      return passenger.driverId = this.id
    })
  }
  trips(){
    return store.trips.filter(trip=>{
      return trip.driverId = this.id
    })
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip=>{
      return trip.passengerId === this.id
    })
  }
  drivers(){
    return store.drivers.filter(driver=>{
      return driver.passengerId = this.id
    })
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    this.driverId = driverId
    this.passengerId = passengerId
    store.trips.push(this)
  }

  driver(){
    return store.drivers.find(driver=>{
      return driver.id === this.driverId
    })
  }
  passenger(){
    return store.passengers.find(passenger=>{
      return passenger.id === this.passengerId
    })
  }
}
