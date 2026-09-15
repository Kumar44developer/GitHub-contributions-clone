# 🟩 GitHub Contribution Graph Clone

An interactive, responsive hoverboard visualizer inspired by GitHub's signature contribution activity heatmap. Built using pure HTML, CSS, and JavaScript, the application renders a dynamic grid of contribution tiles that light up with vivid neon green commit colors upon mouse hover and gradually fade back to dark mode.

---

## Features

- **Interactive Hover Grid**: 120 dynamically rendered activity tiles that illuminate instantly when hovered.
- **Randomized GitHub Palette**: Draws from an authentic palette of green hues representing varying commit activity intensities.
- **Neon Glow Bloom**: Applies dual-spread `box-shadow` glow effects on mouseover.
- **Smooth 2-Second Dissipation Trail**: Uses CSS transitions to create a lingering fade-out trail as the cursor sweeps across the grid.
- **GitHub Dark Mode Aesthetic**: Styled with GitHub's signature dark background (`#0d1117`), card border borders (`#30363d`), and modern system typography.
- **Zero Framework Overhead**: Built exclusively with native HTML5, CSS3, and modern JavaScript.

---

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Viewport markup and heading structure |
| CSS3 | Flexbox grid layout, dark mode color tokens, hover transitions, and glow shadows |
| JavaScript (ES6) | Dynamic `<div>` generation, random color picking, and mouseover/mouseout event handling |

---

## Project Structure

```
GitHub-contributions-clone/
├── index.html       # Markup skeleton hosting the container wrapper
├── style.css        # GitHub dark theme, grid framing, tile sizing, and transitions
├── script.js        # Dynamic tile instantiation and hover interaction logic
└── README.md        # Project documentation
```

---

## How It Works

1. **DOM Instantiation (`script.js`)**: A loop dynamically creates 120 `.activity` tile elements and appends them into the `#_container` element.
2. **Hover Trigger (`mouseover`)**:
   - Randomly selects a green hex code from `greenColorCodes`.
   - Snaps the tile's background color to the chosen shade and attaches a glowing `box-shadow`.
   - Hover transition duration is set to `0s` for instantaneous reaction.
3. **Fade Out (`mouseout`)**:
   - Resets the background color to `#21262d` and shadow to default.
   - CSS `transition: background-color 2s ease, box-shadow 2s ease` smoothly transitions the tile back over two seconds.

---

## Getting Started

No build configurations, package managers, or server installations are necessary.

### 1. Clone the repository

```bash
git clone https://github.com/Kumar44developer/GitHub-contributions-clone.git
```

### 2. Launch the application

Open `index.html` directly in any web browser, or serve it using an extension like VS Code Live Server.

---

## Customization

- **Adjust Tile Count**: Update `const numberOfSquares = 120;` in `script.js` to change total grid squares.
- **Modify Heatmap Colors**: Replace the hex values inside `greenColorCodes` in `script.js` to create alternative themes (e.g., blue, purple, or warm fire palettes).
- **Change Fade Duration**: Edit the `transition: background-color 2s ease` duration in `style.css` to lengthen or shorten the trailing glow effect.

---

## Author

**Kumar44developer** — [GitHub Profile](https://github.com/Kumar44developer)
