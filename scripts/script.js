const chapters = ['chapter1.html', 'chapter2.html', 'chapter3.html', 'chapter4.html', 'chapter5.html', 'chapter6.html', 'chapter7.html'];
let currentChapter = 0;

function loadChapter() {
  document.getElementById('chapter-content').innerHTML = '';
  const chapterURL = chapters[currentChapter];
  fetch(chapterURL)
    .then(response => response.text())
    .then(data => {
      document.getElementById('chapter-content').innerHTML = data;
    })
    .catch(error => {
      console.error('Error loading chapter:', error);
    });
}

document.getElementById('prev-btn').addEventListener('click', () => {
  if (currentChapter > 0) {
    currentChapter--;
    loadChapter();
  }
});

document.getElementById('next-btn').addEventListener('click', () => {
  if (currentChapter < chapters.length - 1) {
    currentChapter++;
    loadChapter();
  }
});

loadChapter();

//Test 2

// Get the book element and all of its pages
//const book = document.querySelector('#book');
//const pages = Array.from(book.querySelectorAll('.page'));

// Set the current page to the first page of the book
//let currentPage = 0;

// Get the previous and next buttons
//const prevBtn = document.querySelector('#prevBtn');
//const nextBtn = document.querySelector('#nextBtn');

// Add event listeners to the buttons
//prevBtn.addEventListener('click', showPrevPage);
//nextBtn.addEventListener('click', showNextPage);

// Array of chapter URLs to load dynamically
//const chapterURLs = [
//  'chapter1.html',
//  'chapter2.html',
//  'chapter3.html',
//  'chapter4.html',
//  'chapter5.html',
//  'chapter6.html',
//  'chapter7.html'
//];

// Function to show the previous page
//function showPrevPage() {
//  if (currentPage > 0) {
    // Decrease the current page number
//    currentPage--;

    // Load the HTML content for the previous chapter
 //   loadChapter(currentPage);
    
    // Rotate the book element to show the previous page
//   book.style.transform = `rotateY(${currentPage * -180}deg)`;
// }
//}

// Function to show the next page
//function showNextPage() {
//  if (currentPage < pages.length - 1) {
    // Increase the current page number
//    currentPage++;

    // Load the HTML content for the next chapter
 //   loadChapter(currentPage);

    // Rotate the book element to show the next page
//   book.style.transform = `rotateY(${currentPage * -180}
//


// Test 1
// Get the book element and all of its pages
//const book = document.querySelector('#book');
//const pages = Array.from(book.querySelectorAll('.page'));

// Set the current page to the first page of the book
//let currentPage = 0;

// Get the previous and next buttons
//const prevBtn = document.querySelector('#prevBtn');
//const nextBtn = document.querySelector('#nextBtn');

// Add event listeners to the buttons
//prevBtn.addEventListener('click', showPrevPage);
//nextBtn.addEventListener('click', showNextPage);

// Function to show the previous page
//function showPrevPage() {
// if (currentPage > 0) {
    // Decrease the current page number
//    currentPage--;

    // Rotate the book element to show the previous page
 //   book.style.transform = `rotateY(${currentPage * -180}deg)`;
 // }
//}

// Function to show the next page
//function showNextPage() {
//  if (currentPage < pages.length - 1) {
    // Increase the current page number
//    currentPage++;

    // Rotate the book element to show the next page
//    book.style.transform = `rotateY(${currentPage * -180}deg)`;
//  }
//}
