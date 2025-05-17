# Pokémon Filter & Profile Card UI

## Q1 – Pokémon Type Filtering

### Description

This JavaScript module filters a list of Pokémon based on their types.

Each Pokémon object is structured as follows:

```json
{
  "name": "bulbasaur",
  "types": ["grass", "poison"]
}
```

### Tasks

1. **Filter by Single Type**  
   Return Pokémon names that include a specific type.

2. **Filter by Multiple Types (OR)**  
   Return Pokémon names that include **at least one** of the specified types.

3. **Filter by Multiple Types (AND)**  
   Return Pokémon names that include **all** of the specified types.

### Files

- `Q1/Q1.js`: Script containing the filtering logic and console output.
- `Q1/pokes.json`: JSON file containing the Pokémon data.

### How to Run

1. Embed `pokes.json` as a `<script>` tag or load it via HTTP.
2. Link and run `Q1.js` in an HTML file.
3. Open the browser console to view the filtered results.

---

## Q2 – Profile Card UI

### Description

A simple HTML and CSS implementation of a profile card UI.

### Features

- Profile image
- Name or title
- Description text
- Styled layout using CSS

### Files

- `Q2/Q2.html`: Contains the HTML structure for the card.
- `Q2/Q2.css`: Contains the styling rules for the card.
- `Q2/profile_pic.jpg`: Placeholder profile image used in the card.

### How to View

1. Open `Q2/Q2.html` in any modern web browser.
2. The styled card will be displayed using the provided image and CSS.
