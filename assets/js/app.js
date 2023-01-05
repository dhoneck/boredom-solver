var fetchButton = document.getElementById('submit-button');
var activityContainer = document.getElementById('activity-container');

function getApi(e) {
  e.preventDefault();
  
  var requestUrl = 'https://www.boredapi.com/api/activity/';
  var activityType = document.getElementById('type-field').value
  
  if (activityType != 'all') {
    requestUrl += '?type=' + activityType;
  }
  console.log('Fetching activity from: ' + requestUrl);
  

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      activityContainer.textContent = data['activity'];
    });
}

fetchButton.addEventListener('click', getApi);