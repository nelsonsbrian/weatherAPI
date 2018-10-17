import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { WeatherService } from "./weather-service";

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

    let weatherService = new WeatherService();  // create instance of WeatherService class
    let promise = weatherService.getWeatherByCity(city);  // call the instance method and pass in user input

    promise.then(function(response) {
      let body = JSON.parse(response);
      $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
      $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp}.`);
      $('.clouds').text(`The cloudiness is ${body.clouds.all}%.`);
      $('.description').text(`${body.weather[0].main}: ${body.weather[0].description} with a wind speed`);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    });
  });
});

