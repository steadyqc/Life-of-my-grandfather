function toggleDarkMode() {
  const body = document.body;
  const nav = document.querySelector("nav");
  const article = document.querySelectorAll("article");

  body.classList.toggle("dark-mode");
  nav.classList.toggle("dark-mode");
  article.forEach((element) => element.classList.toggle("dark-mode"));
}

/* function toggleDarkMode() {
    const body = document.querySelector('body');
    body.classList.toggle('dark-mode');
  } */

// Example JavaScript code for a light/dark mode toggle button
//const toggleButton = document.querySelector('.toggle-button');
//const body = document.querySelector('body');

//toggleButton.addEventListener('click', function() {
 // body.classList.toggle('dark-mode');
//});