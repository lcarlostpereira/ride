const params = new URLSearchParams(window.location.search)
const rideID = params.get("id")
const ride = getRideRecord(rideID)

document.addEventListener("DOMContentLoaded", async () => {
  const firstPosition = ride.data[0]
  const firsLocationData = await getLocationData(
    firstPosition.latitude,
    firstPosition.longitude
  )

  const dataElement = document.createElement("div")
  dataElement.className = "flex-fill d-flex flex-column"

  const cityDiv = document.createElement("div")
  cityDiv.innerText = `${firsLocationData.city} - ${firsLocationData.countryCode}`
  cityDiv.className = "text-primary mb-2"

  const maxSpeedDiv = document.createElement("div")
  maxSpeedDiv.innerText = `Max speed: ${getMaxSpeed(ride.data)} Km/h`
  maxSpeedDiv.className = "h5"

  const distanceDiv = document.createElement("div")
  distanceDiv.innerText = `Distance: ${getDistance(ride.data)} Km`

  const durationDiv = document.createElement("div")
  durationDiv.innerText = `Duration: ${getDuration(ride)}`

  const dateDiv = document.createElement("div")
  dateDiv.className = "text-secondary mt-2"

  dateDiv.innerText = getStartDate(ride)

  dataElement.appendChild(cityDiv)
  dataElement.appendChild(maxSpeedDiv)
  dataElement.appendChild(distanceDiv)
  dataElement.appendChild(durationDiv)
  dataElement.appendChild(dateDiv)

  document.querySelector("#data").appendChild(dataElement)
})
