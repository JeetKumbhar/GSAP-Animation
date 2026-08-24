function breakTheText() {
  var h1 = document.querySelector("h1");
  var h1Text = h1.textContent;

  var splittedText = h1Text.split("");
  var halfValue = Math.floor(splittedText.length/2);

  var clutter = "";

  splittedText.forEach(function (e, i) {
    if(i<halfValue){
        clutter += `<span class="a">${e}</span>`;
    } else {
        clutter += `<span class="b">${e}</span>`;
    }
  });

  h1.innerHTML = clutter;
}

breakTheText()

gsap.from("h1 .a", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: 0.15
})
gsap.from("h1 .b", {
    y: 50,
    duration: 0.8,
    delay: 0.5,
    opacity: 0,
    stagger: -0.15
})