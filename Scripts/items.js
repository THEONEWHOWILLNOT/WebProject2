function addToCart(){
  alert("add toc cart");
}
function largeView(){
  window.open('file:///C:/Users/Willi/OneDrive/Documents/Uni/CO1706/Week%201/Website/WebProject2/Pages/item.html')
  
}

//https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp

function dropDown(){
    var x = document.getElementById("dropdownFilter");
    if (x.style.display === "none") {
      x.style.display = "flex";
    } else {
      x.style.display = "none";
    }
  }
function showHoodies(){
  var x = document.getElementById("hoodies");
  var y = document.getElementById("tshirts");
  var z = document.getElementById("jumpers");
    if (x.style.display === "none") {
       x.style.display = "flex";
       y.style.display = "flex";
       z.style.display = "flex";
    } else {
      x.style.display = "flex";
      y.style.display = "none";
      z.style.display = "none";

  
    }
}
    
function showTshirts(){
  var x = document.getElementById("tshirts");
  var y = document.getElementById("hoodies");
  var z = document.getElementById("jumpers");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "flex";
    z.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";

    }
  }
    
 
function  showJumpers(){
  var x = document.getElementById("jumpers");
  var z = document.getElementById("tshirts");
  var y = document.getElementById("hoodies");
  if (x.style.display === "none") {
    x.style.display = "flex";
    y.style.display = "flex";
    z.style.display = "flex";
  } else {
    x.style.display = "flex";
    y.style.display = "none";
    z.style.display = "none";
  }
}

function reset(){
  var x = document.getElementById("tshirts");
  var y = document.getElementById("hoodies");
  var z = document.getElementById("jumpers");
  x.style.display = "flex";
  y.style.display = "flex";
  z.style.display = "flex";
}