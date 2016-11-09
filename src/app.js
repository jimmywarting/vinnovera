import {Weather} from './weather';

const API = 'http://api.openweathermap.org/data/2.5/weather?appid=224a29a9b7f8c996c7ad3d9db4678d33&q=';

var self

export class App {
  constructor() {
    this.locations = []
    this.location = ''
    self = this
  }

  async addLocation() {
    if (this.location) {
      let res = await fetch(API + this.location)
      let json = await res.json()
      this.locations.push(new Weather(json))
      this.location = ''
    }
  }

  removeLocation(location) {
    let index = self.locations.indexOf(location)
    ~index && self.locations.splice(index, 1)
  }
}
