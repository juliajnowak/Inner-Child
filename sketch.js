let inp;
let button;

function setup() {
  //for a little bit more control and simplicity, make your input and selection the HTML file, and then select it using the select() function.

  inp = select(".myInput");
  button = select(".myButton");
  button.mousePressed(myInputEvent);
}

function myInputEvent() {
  //this also allows you to avoid using the HTML Canvas that p5 creates by creating a fixed element on the page
  //it gives a random value for top and left between the width and height of the whole page
  //inp.value() gets the interior value of the text box

  createP(inp.value())
    .style("left", random(0, windowWidth) + "px")
    .style("top", random(0, windowHeight) + "px")
    .style("z-index", -1)
    .addClass("answerText");
}

const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)

