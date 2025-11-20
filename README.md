# React Beginner Tutorial — Topic Cards

This tutorial repo is a small, self-contained exercise for beginners learning React fundamentals: components, state, event handlers, and conditional rendering.

This is an intentionally simplified version of the app with comments and placeholders so students can implement the interactive parts themselves.

Goals
- Understand what a React component is.
- Add local state with `useState`.
- Handle DOM events (click, keyboard) in React.
- Conditionally render content based on component state.
- Make small, testable changes and run the dev server.

What you'll work with
- `src/App.jsx` — the page that defines the topic list and contains static placeholders (cards). Replace the placeholder cards with your interactive `TopicCard` component.
- `src/TopicCard.jsx` — the card component (tutorial version). It currently displays static content and contains comments that point where to add state and event handlers.
- `src/App.css` — styles for the 3×2 square grid and card visuals.

Exercise (step-by-step)
1. Start the dev server:

```powershell
npm install
npm run dev
```

2. Open `src/TopicCard.jsx` and read the comments. Try to implement the following:
   - Import `useState` from React.
   - Add a `const [showValue, setShowValue] = useState(false)` line.
   - Add an `onClick` handler to the root `.topic-card` element that toggles `showValue`.
   - Add keyboard handling so Enter and Space also toggle state (accessibility).
   - Replace the static rendering so when `showValue` is false the card shows the `topic` name, and when true it shows the `value` (for `Face` show an `<img>`).

3. Replace the inline static cards in `src/App.jsx` (the placeholder `<div class="topic-card">` elements) with the `TopicCard` component

Example of the final usage in `App.jsx`:

```jsx
<TopicCard key={t.topic} topic={t.topic} value={t.value} />
```

4. Try clicking and keyboard-operating the cards in the browser to confirm the behavior.

Hints
- The `Face` topic's `value` contains a URL; use an `<img src={value} />` when showing it.
- Use `role="button"` and `tabIndex={0}` on the card element to make it keyboard-focusable.
- Use `aria-pressed={showValue}` to reflect toggle state to assistive tech.

Enjoy building — and ask if you get stuck on any of the steps!
