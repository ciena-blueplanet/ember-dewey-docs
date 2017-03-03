export default function addHandler (events) {
  let results
  events.forEach((selectedEvent) => {
    this.set(Object.keys(selectedEvent)[0], Object.values(selectedEvent)[0])
  })
  return results
}
