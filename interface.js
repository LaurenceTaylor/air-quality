function getPM10Data () {
  const request = new XMLHttpRequest()
  request.open('GET', 'http://api.erg.kcl.ac.uk/AirQuality/Data/Nowcast/lat=51.57661/lon=0.030858/Json')
  request.onload = function () {
    const data = JSON.parse(this.response).PointResult
    setPM10Elements(data)
  }
  request.send()
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
