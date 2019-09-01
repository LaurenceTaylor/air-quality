function getPM10Data () {
  fetch('http://api.erg.kcl.ac.uk/AirQuality/Data/Nowcast/lat=51.57661/lon=0.030858/Json')
    .then(function(response) { return response.json() })
    .then(function(data) { setPM10Elements(data.PointResult) })
}

function setPM10Elements (data) {
  const indexOnPage = document.getElementById('pm10-AQI')
  const readingOnPage = document.getElementById('pm10-reading')
  const annualReadingOnPage = document.getElementById('pm10-annual')
  indexOnPage.innerHTML = data['@PM10_Index']
  readingOnPage.innerHTML = data['@PM10']
  annualReadingOnPage.innerHTML = data['@PM10_Annual']
}

getPM10Data()
// setInterval(getPM10Data, 10000)
