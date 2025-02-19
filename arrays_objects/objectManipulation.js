const journalEntries = [
    { title: "Morning Thoughts", content: "Feeling great!", date: "2024-07-10" },
    { title: "Workout Log", content: "Did 30 push-ups!", date: "2024-07-11" },
    { title: "Project Update", content: "Implemented authentication", date: "2024-07-12" }
];

const journalEntry = (title, newValue) => {
  for(let entry of journalEntries) {
    if(entry.title === title) {
        entry.content = newValue
        return entry
    }
  }
  return "Entry not Found"
}
console.log(journalEntry('Project Update', 'Early Meditations'));