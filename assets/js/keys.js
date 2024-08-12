function changeDivBgColors(element, color) {
    element.style.backgroundColor = color;
  }
  
  function newDivElement(color) {
    const newDiv = document.createElement("div");
    newDiv.style.backgroundColor = color;
    newDiv.classList.add("dynamic-div")
    document.body.appendChild(newDiv);
  }
  
  document.addEventListener("keydown", function(event) {
    let keyElement = document.getElementById("key");
    
    if (keyElement) {
      if (event.key === "a") {
        changeDivBgColors(keyElement, "pink");
      } else if (event.key === "s") {
        changeDivBgColors(keyElement, "orange");
      } else if (event.key === "d") {
        changeDivBgColors(keyElement,"lightblue");
      } else if (event.key === "q") {
        newDivElement("purple");
      } else if (event.key === "w") {
        newDivElement("grey");
      } else if (event.key === "e") {
        newDivElement("brown");
      }
    }
  });