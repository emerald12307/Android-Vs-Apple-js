// android Button
document.getElementById("android-btn").addEventListener("click", androidPage);

function androidPage() {
  document.getElementById("img").src = "images/Android-Logo.jpg";
  document.getElementById("expTheDeb").innerHTML = "Android Home";
  document.getElementById("expTheDeb").href = "https://www.android.com/";
  document.getElementById("html").style.background = "#a4c93b";
  document.getElementById("body").style.fontFamily = "'Roboto', sans-serif";
  document.getElementById("android-btn").classList.add("active");
  document.getElementById("apple-btn").classList.remove("active");
}

//apple button
document.getElementById("apple-btn").addEventListener("click", applePage);

function applePage() {
  document.getElementById("img").src = "images/Apple-Logo.jpg";
  document.getElementById("expTheDeb").innerHTML = "Apple Home";
  document.getElementById("expTheDeb").href = "https://www.apple.com/ca/";
  document.getElementById("html").style.background = "#b6bcca";
  document.getElementById("body").style.fontFamily =
    "'Brygada 1918', sans-serif";
  document.getElementById("android-btn").classList.remove("active");
  document.getElementById("apple-btn").classList.add("active");
}
