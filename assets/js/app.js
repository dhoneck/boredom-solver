var fetchButton = document.getElementById('submit-button');
var activityContainer = document.getElementById('activity-container');

function getApi(e) {
  e.preventDefault();
  console.log('Button clicked');
  var requestUrl = 'https://www.boredapi.com/api/activity/';

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      activityContainer.textContent = data['activity'];
    });
}

fetchButton.addEventListener('click', getApi);