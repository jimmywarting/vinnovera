import {bindable, bindingMode, decorators, behavior} from 'aurelia-framework';

export const WeatherCard = decorators(
  bindable('weather'),
  bindable('destroy')
).on(class WeatherCard {})
