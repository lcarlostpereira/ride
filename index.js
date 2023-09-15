const rideListElement = document.querySelector("#rideList")
const allRides = getAllRides()

allRides.forEach(async ([id, value]) => {
  const ride = JSON.parse(value)
  ride.id = id
  const firstPosition = ride.data[0]
  const firsLocationData = await getLocationData(
    firstPosition.latitude,
    firstPosition.longitude
  )
  const itemElement = document.createElement("li")
  itemElement.id = ride.id

  const cityDiv = document.createElement("div")
  cityDiv.innerText = `${firsLocationData.city} - ${firsLocationData.countryCode}`

  itemElement.appendChild(cityDiv)

  rideListElement.appendChild(itemElement)
})

async function getLocationData(latitude, longitude) {
  const url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&=localityLanguage=en`

  const response = await fetch(url)
  return await response.json()
}
