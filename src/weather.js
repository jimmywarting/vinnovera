export class Weather {
  constructor(data) {
    this.data = data
  }

  get celcius() {
    return Math.round(this.data.main.temp - 273.15)
  }

  // Function to make -30 to 30 degree temperature to
  // a color
  //
  // http://stackoverflow.com/q/16399677/1008999
  get color() {
    // Map the temperature to a 0-1 range
    var a = (this.celcius + 30)/60;
    a = (a < 0) ? 0 : ((a > 1) ? 1 : a);

    // Scrunch the green/cyan range in the middle
    var sign = (a < .5) ? -1 : 1;
    a = sign * Math.pow(2 * Math.abs(a - .5), .35)/2 + .5;

    // Linear interpolation between the cold and hot
    var h0 = 259;
    var h1 = 12;
    var hue = (h0) * (1 - a) + (h1) * (a);

    return `hsl(${hue}, 70%, 50%)`
  }
}
