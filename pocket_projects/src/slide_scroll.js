function debounce(func, wait = 20, immediate = true) {
  let timeout;

  // This is the function that is actually executed when
  // the DOM event is triggered.
  return function executedFunction() {
    // Store the context of this and any
    // parameters passed to executedFunction
    const context = this;
    const args = arguments;
    
    // The function to be called after debounce time has elapsed
    const later = function () {
      // null timeout to indicate the debounce ended
      timeout = null;

      // Call function now if you did not in the beginning
      if (!immediate) func.apply(context, args);
    };

    // Determine if you should call the function
    // on the leading or trail end
    const callNow = immediate && !timeout;

    // This will reset the waiting every function execution.
    clearTimeout(timeout);

    // Restart the debounce waiting period - returns true
    timeout = setTimeout(later, wait);

    // Call immediately if you're doing a leading end execution
    if (callNow) func.apply(context, args);
  };
}

let img = document.querySelector("img");
img.addEventListener("scroll", (e) => {
  console.log("hello");
});

export function scrollListener(){
  let imgs = document.querySelectorAll("img");

  for (let i = 0; i < imgs.length; i++) {
    let img = imgs[i];
    window.addEventListener("scroll", (e) => {

      if (window.innerHeight > img.y - img.height) {

        img.classList.add('active');
      } else {
        img.classList.remove('active');
      }
      if ((img.y + img.height) < 0) {
        img.classList.remove('active');

      }

    });
  }
}