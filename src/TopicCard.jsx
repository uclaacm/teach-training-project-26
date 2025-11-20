import React from 'react'

// TopicCard

// To Start:
// - Import necessary libraries (e.g. useState)
// - Create event handlers (onClick, onKeyDown) that toggle state
// - Conditional rendering logic that swapps the label and value

// TODO for students: Re-add state and event handlers so the card
// toggles between showing the `topic` and the `value` when clicked.


// this is the same as defining a function then exporting it, this is an idiomatic version
export default function TopicCard({ topic, value }) {
  // Replace the static rendering below with your interactive implementation.

  return (
    <div className="topic-card">
      {/* TODO: add state here (e.g. useState) to toggle displayed content */}
      <div className="topic-label">{topic}</div>
      <div className="topic-value">{value}</div>
      {/* TODO: add onClick/onKeyDown handlers to toggle between topic and value */}
    </div>
  )
}
