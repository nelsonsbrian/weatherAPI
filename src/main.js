import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    $('#weatherLocation').click(function() {
      let city = $('#location').val();
      $('#location').val("");
      $.ajax({
        url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ac228ce27f7a3e6d033a9dc467a754ba`,
        type: 'GET',
        data: {
          format: 'json'
        },
        success: function(response) {
          $('.showHumidity').text(`The humidity in ${city} is ${response.main.humidity}%`);
          $('.showTemp').text(`The temperature in Kelvins is ${response.main.temp}.`);
          $('.clouds').text(`The cloudiness is ${response.clouds.all}%.`);
          $('.description').text(`${response.weather[0].main}: ${response.weather[0].description} with a wind speed of ${response.wind.speed} mph`);
        },

        error: function() {
          $('#errors').text("There was an error processing your request. Please try again.");
        }
      });
    });
  });