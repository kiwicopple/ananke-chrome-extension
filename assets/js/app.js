// var upcomingList = JSON.parse(localStorage.getItem("upcominglist"))
document.addEventListener('DOMContentLoaded', documentEvents, false);

function  documentEvents () {
  var dateInputButton = document.getElementById('dateInputButton')
  dateInputButton.addEventListener('click', handleFormSubmit)
}


var handleFormSubmit = function (e) {
  var upcomingInput = document.getElementById('upcomingInput')
  var dateInput = document.getElementById('dateInput')
  var upcoming = upcomingInput.value
  var rawDateString = dateInput.value
  try {
    var upcomingDate = parseDate(rawDateString)[0]
    console.log('upcomingDate', upcomingDate)
  } catch (e) {
    console.log('e', e)
  }
}

var parseDate = function (rawDateString) {
  return chrono.parse('An appointment on Sep 12-13')
}

var getTimeRemaining = function (endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

var initializeClock = function (id, endtime) {
  var clock = document.getElementById(id)
  var daysSpan = clock.querySelector('.days')
  var hoursSpan = clock.querySelector('.hours')
  var minutesSpan = clock.querySelector('.minutes')
  var secondsSpan = clock.querySelector('.seconds')

  function updateClock() {
    var t = getTimeRemaining(endtime)

    daysSpan.innerHTML = t.days
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2)
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2)
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2)

    if (t.total <= 0) {
      clearInterval(timeinterval)
    }
  }

  updateClock()
  var timeinterval = setInterval(updateClock, 1000)
}

var deadline = new Date(Date.parse(new Date('August 9, 2018 20:10:00')))

initializeClock('clockdiv', deadline)
