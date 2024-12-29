const nameInput = document.getElementById("nameInput");
const generateBtn = document.getElementById("generateBtn");
const artDisplay = document.getElementById("artDisplay");

// Array of 40 unique calligraphic and unusual fonts
const fonts = [
  "Great Vibes", "Dancing Script", "Lobster", "Pacifico", "Satisfy", "Sacramento",
  "Alex Brush", "Kaushan Script", "Dancing", "Fredericka the Great", "Vollkorn", 
  "Playfair Display", "Merriweather", "Amatic SC", "Roboto Slab", "Open Sans Condensed", 
  "Oswald", "Quicksand", "Lora", "Zilla Slab", "Rock Salt", "Fredericka", "Caveat", 
  "Pinyon Script", "Quicksand", "Cinzel", "Roboto", "Roboto Slab", "Muli", "Cinzel", 
  "Cinzel Decorative", "Gloock", "Fredericka", "Caveat", "Pinyon Script", "Zilla Slab", 
  "Rock Salt", "Cousine"
];

// Array of solid colors and gradients
const colors = [
  "#e91e63", "#4caf50", "#ff5722", "#3f51b5", "#009688", "#9c27b0",
  "linear-gradient(45deg, #ff9a9e, #fad0c4)", "linear-gradient(135deg, #6a11cb, #2575fc)",
  "linear-gradient(135deg, #ff416c, #ff4b2b)", "linear-gradient(135deg, #f5a623, #e94e77)",
  "linear-gradient(135deg, #ff7e5f, #feb47b)", "linear-gradient(135deg, #42e695, #3bb2b8)",
  "linear-gradient(45deg, #ff9a9e, #fad0c4)", "linear-gradient(135deg, #6a11cb, #2575fc)",
  "linear-gradient(135deg, #ff416c, #ff4b2b)", "linear-gradient(135deg, #f5a623, #e94e77)",
  "linear-gradient(135deg, #ff7e5f, #feb47b)", "linear-gradient(135deg, #42e695, #3bb2b8)",
  "#FF6347", "#20B2AA", "#DAA520", "#DC143C", "#4682B4", "#32CD32", "#FF1493", "#800080"
];

// Font loading function with FontFaceObserver
const fontObserver = new FontFaceObserver('Great Vibes');
const fontObserver2 = new FontFaceObserver('Dancing Script');
const fontObserver3 = new FontFaceObserver('Lobster');
// Add more fonts as needed...

Promise.all([
  fontObserver.load(),
  fontObserver2.load(),
  fontObserver3.load(),
  // Add more fonts here
]).then(function() {
  console.log('All fonts are loaded');
}).catch(function() {
  console.error('Fonts failed to load');
});

// Random font and color selection function
generateBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (!name) {
    alert("Please enter your name!");
    return;
  }

  // Randomly select font and color
  const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Apply the random font and color (including gradients) to the name
  artDisplay.innerHTML = `<span style="font-family: '${randomFont}', cursive; background: ${randomColor}; -webkit-background-clip: text; color: transparent; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);">${name}</span>`;
});
