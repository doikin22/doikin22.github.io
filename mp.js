document.getElementById('mode1').addEventListener('click', function() {
    // Code to start Mode 1
    console.log('Mode 1 selected');
  });
  
  document.getElementById('mode2').addEventListener('click', function() {
    // Code to start Mode 2
    console.log('Mode 2 selected');
  });
  
  document.getElementById('mode3').addEventListener('click', function() {
    // Code to start Mode 3
    console.log('Mode 3 selected');
  });
  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  function changeBorderColor() {
    var mainMenu = document.getElementById("main-menu");
    var randomColor = getRandomColor();
    mainMenu.style.setProperty("border-color", randomColor);
  }
  
  setInterval(changeBorderColor, 2000); // Change the border color every 2 seconds
  
  var mainMenu = document.getElementById("main-menu");
var images = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
var currentIndex = 0;

function changeBackgroundImage() {
  mainMenu.style.backgroundImage = "url(" + images[currentIndex] + ")";
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 2000); // Change the background image every 2 seconds

document.getElementById('mode1').addEventListener('click', function() {
  // Redirect to the game page for Normal mode
  window.location.href = 'game.html';
});

document.getElementById('mode2').addEventListener('click', function() {
  // Redirect to the game page for Normal mode
  window.location.href = 'hard.html';
});
