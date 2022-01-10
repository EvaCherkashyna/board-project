const board = document.querySelector('#board');
const SQUARES_NUBER = 1700;
const colors=['#B0E0E6','#ADD8E6','#87CEEB','#87CEFA','#00BFFF','#1E90FF','#6495ED','#7B68EE']
for (let i = 0; i < SQUARES_NUBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover',setColor)
   
    square.addEventListener('mouseleave', removeColor)
    board.append(square)
}

function setColor(element) {
    const color = getColor();
    element.target.style.backgroundColor = color
    element.target.style.boxShadow = `0 0 2px ${color}`

}

function removeColor(element) {
    element.target.style.backgroundColor = '#1d1d1d'
    element.target.style.boxShadow = `0 0 2px black`
}
function getColor(){
  const index =  Math.floor(Math.random()*colors.length);
  return colors[index];
}