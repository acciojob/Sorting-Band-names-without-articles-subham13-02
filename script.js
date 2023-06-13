let bandNames = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from band names
function removeArticles(name) {
  // List of articles to be excluded
  const articles = ['a', 'an', 'the'];

  // Split the band name into individual words
  const words = name.toLowerCase().split(' ');

  // Filter out articles from the words array
  const filteredWords = words.filter(word => !articles.includes(word));

  // Join the filtered words to form the modified band name
  const modifiedName = filteredWords.join(' ');

  return modifiedName;
}

// Sort band names without articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Get the <ul> element with the id 'band'
const bandList = document.getElementById('band');

// Clear any existing list items
bandList.innerHTML = '';

// Add sorted band names to the <ul> element
bandNames.forEach(name => {
  const listItem = document.createElement('li');
  listItem.textContent = name;
  bandList.appendChild(listItem);
});


