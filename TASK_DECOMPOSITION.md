# Homework 2 - Drum Kit Engine

## Task Decomposition

| Task | Description | Acceptance Criteria | Commit |
|---|---|---|---|
| T1 | HTML data-sound contract | Each drum pad uses a data attribute to store its sound source | `feat(html): define drum pad sound contract` |
| T2 | Polyphonic Audio Engine | Multiple sounds can play independently without blocking each other | `feat(js): implement polyphonic audio engine` |
| T3 | Keyboard Event Handling | Use keydown and ignore repeated key events with event.repeat | `feat(js): bind keydown with repeat throttling` |
| T4 | FIFO Beat Recorder | Record played beats in timestamp order using a queue | `feat(js): implement FIFO beat recorder` |

## Rules

- Complete one task at a time.
- Test each task before moving to the next.
- Do not combine multiple tasks into one commit.
- Use `keydown`, not `keypress`.
- Use `event.key`, not `keyCode`.
- Store sound paths in HTML data attributes.