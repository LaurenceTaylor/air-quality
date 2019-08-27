function getPM10Data () {
  const request = new XMLHttpRequest()
  request.open('GET', 'http://api.erg.kcl.ac.uk/AirQuality/Daily/MonitoringIndex/Latest/SiteCode=RB4/Json')
  request.onload = function () {
    const data = JSON.parse(this.response)
    const pm10AQI = data.DailyAirQualityIndex.LocalAuthority.Site.Species[1]
    setPM10Elements(pm10AQI)
  }
  request.send()
}

function setPM10Elements (pm10AQI) {
  const indexOnPage = document.getElementById('pm10-AQI-index')
  const bandOnPage = document.getElementById('pm10-AQI-band')
  indexOnPage.innerHTML = pm10AQI['@AirQualityIndex']
  bandOnPage.innerHTML = pm10AQI['@AirQualityBand']
}

getPM10Data()
setInterval(getPM10Data, 10000)
