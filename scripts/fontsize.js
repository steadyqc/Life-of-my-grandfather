// Define the maximum and minimum font sizes for p, h2, and h3 elements
var pMaxSize = 25;
var h2MaxSize = 30;
var h3MaxSize = 28;
var pMinSize = 13;
var h2MinSize = 16;
var h3MinSize = 15;

function increaseFontSize() {
  var p = document.getElementsByTagName('p');
  var h2 = document.getElementsByTagName('h2');
  var h3 = document.getElementsByTagName('h3');
  for (i = 0; i < p.length; i++) {
    var s = parseInt(window.getComputedStyle(p[i]).fontSize.replace("px", ""));
    if (s < pMaxSize) {
      s += 1;
    }
    p[i].style.fontSize = s + "px";
  }
  for (i = 0; i < h2.length; i++) {
    var s = parseInt(window.getComputedStyle(h2[i]).fontSize.replace("px", ""));
    if (s < h2MaxSize) {
      s += 1;
    }
    h2[i].style.fontSize = s + "px";
  }
  for (i = 0; i < h3.length; i++) {
    var s = parseInt(window.getComputedStyle(h3[i]).fontSize.replace("px", ""));
    if (s < h3MaxSize) {
      s += 1;
    }
    h3[i].style.fontSize = s + "px";
  }
}

function decreaseFontSize() {
  var p = document.getElementsByTagName('p');
  var h2 = document.getElementsByTagName('h2');
  var h3 = document.getElementsByTagName('h3');
  for (i = 0; i < p.length; i++) {
    var s = parseInt(window.getComputedStyle(p[i]).fontSize.replace("px", ""));
    if (s > pMinSize) {
      s -= 1;
    }
    p[i].style.fontSize = s + "px";
  }
  for (i = 0; i < h2.length; i++) {
    var s = parseInt(window.getComputedStyle(h2[i]).fontSize.replace("px", ""));
    if (s > h2MinSize) {
      s -= 1;
    }
    h2[i].style.fontSize = s + "px";
  }
  for (i = 0; i < h3.length; i++) {
    var s = parseInt(window.getComputedStyle(h3[i]).fontSize.replace("px", ""));
    if (s > h3MinSize) {
      s -= 1;
    }
    h3[i].style.fontSize = s + "px";
  }
}

/*  function increaseFontSize() {
var p = document.getElementsByTagName('p');
for(i=0;i<p.length;i++) {
    if(p[i].style.fontSize) {
    var s = parseInt(p[i].style.fontSize.replace("px",""));
    } else {
    var s = 16;
    }
    if(s!=30) {
    s += 1;
    }
    p[i].style.fontSize = s+"px";
}
}

function decreaseFontSize() {
var p = document.getElementsByTagName('p');
for(i=0;i<p.length;i++) {
    if(p[i].style.fontSize) {
    var s = parseInt(p[i].style.fontSize.replace("px",""));
    } else {
    var s = 16;
    }
    if(s!=10) {
    s -= 1;
    }
    p[i].style.fontSize = s+"px";
}
} */

/* const p = document.querySelector('p');
const increaseBtn = document.getElementById('increase-font-size');
const decreaseBtn = document.getElementById('decrease-font-size');

let fontSize = 16;

increaseBtn.addEventListener('click', () => {
fontSize += 2;
p.style.fontSize = `${fontSize}px`;
});

decreaseBtn.addEventListener('click', () => {
fontSize -= 2;
p.style.fontSize = `${fontSize}px`}); */
