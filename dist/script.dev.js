"use strict";

var jokeEle = document.getElementById('joke');
var get_joke = document.getElementById('get_joke');
get_joke.addEventListener('click', generateJoke);
generateJoke();

function generateJoke() {
  var jokeRes, joke;
  return regeneratorRuntime.async(function generateJoke$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch('https://icanhazdadjoke.com/j/<joke_id', {
            headers: {
              'Accept': 'application/json'
            }
          }));

        case 2:
          jokeRes = _context.sent;
          _context.next = 5;
          return regeneratorRuntime.awrap(jokeRes.json());

        case 5:
          joke = _context.sent;
          //set the new joke
          jokeEle.innerHTML = joke.joke;

        case 7:
        case "end":
          return _context.stop();
      }
    }
  });
}