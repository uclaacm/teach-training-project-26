import './App.css'

// My First React App!
// Follow the comments to fill out the website

function App() { // The app is the main block that renders all the components
  // Our topics are going to be stored in a list of sets
  // Each set is in {} and has a property name (e.g. topic) and a field
  const topics = [
    { topic: 'Name', value: 'Your Name' },
    { topic: 'My Face', value: '' },
    { topic: 'Major', value: 'Your Major' },
    { topic: 'Hometown', value: 'Your Hometown' },
    { topic: 'Hobby', value: 'A Hobby (Don\'t say coding)' },
    { topic: 'Favorite Artist', value: 'If youre ambitious, add a link to the Spotify profile' }
  ]

  return (
    <>
      <h2>All About Me!</h2>

      {/*
        In the finished app you would render a 'TopicCard' component here
        that contains state and event handlers to toggle between the topic
        and its value when clicked.

        <TopicCard ATTRIBUTES HERE />

        HINT: Iterate through the list using keys
      */}

      <div className="topic-grid three-by-two">
        {topics.map((t) => (
          <div key={t.topic} className="topic-card">
            {/* TODO: Replace this static card with the interactive `TopicCard` component */}
            <div className="topic-label">{t.topic}</div>
            <div className="topic-value">{t.value}</div>
          </div>
        ))}
      </div>
      <h2>Brought to you by TeachLA!</h2>
    </>
  )
}

export default App
