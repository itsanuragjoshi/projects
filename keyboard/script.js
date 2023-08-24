// A safe and performant way to ensure that the CSS is loaded first.
document.addEventListener("DOMContentLoaded", function () {
    //Variable Declaration
    const textContainer = document.querySelector(".textContainer");
    const spaceKey = document.querySelector('.key[data-type="space"]');
    const enterKey = document.querySelector(".enter");
    const deleteKey = document.querySelector('.key[data-type="delete"]');
    const capslockKey = document.querySelector(".capslock");
    const shiftKey = document.querySelector(".shift");
    const alphabetKeys = document.querySelectorAll('.key[data-type="alphabet"]');
    const flipKeys = document.querySelectorAll('.key[data-type="flipkeys"]');
  
    // ALPHANUMERIC KEY FUNCTIONALITY
    alphabetKeys.forEach((key) => {
      key.addEventListener("click", () => {
        textContainer.innerText += key.innerText;
      });
    });
  
    // SPACEBAR FUNCTIONALITY
    spaceKey.addEventListener("click", () => {
      console.log("Spacebar clicked"); // Add this line for debugging
      textContainer.innerText += " ";
    });
  
    // ENTER KEY FUNCTIONALITY
    enterKey.addEventListener("click", () => {
      textContainer.innerText += "\n";
    });
  
    // DELETE KEY FUNCTIONALITY
    deleteKey.addEventListener("click", () => {
      textContainer.innerText = textContainer.innerText.slice(0, -1);
    });
  
    // CAPSLOCK KEY FUNCTIONALITY
    let capslockActive = false;
    capslockKey.addEventListener("click", () => {
      capslockActive = capslockKey.classList.toggle("active");
  
      // Capitalize alphabets
      alphabetKeys.forEach((key) => {
        key.textContent = capslockActive
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      });
    });
  
    // SHIFT KEY FUNCTIONALITY
    let shiftActive = false;
    shiftKey.addEventListener("click", () => {
      shiftActive = shiftKey.classList.toggle("active");
  
      // Capitalize alphabets
      alphabetKeys.forEach((key) => {
        key.textContent = shiftActive
          ? key.textContent.toUpperCase()
          : key.textContent.toLowerCase();
      });
  
      // Flip characters in specific keys
      flipKeys.forEach((key) => {
        const topChild = key.querySelector(".top-center");
        const bottomChild = key.querySelector(".bottom-center");
  
        topChild.classList.toggle("small");
        bottomChild.classList.toggle("small");
      });
    });
  
    // Add click event listener to each flip key
    flipKeys.forEach((key) => {
      const topChild = key.querySelector(".top-center");
      const bottomChild = key.querySelector(".bottom-center");
  
      key.addEventListener("click", () => {
        textContainer.innerText += shiftActive
          ? topChild.textContent
          : bottomChild.textContent;
      });
    });
  }); //end
  