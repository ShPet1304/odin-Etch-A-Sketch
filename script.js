const container = document.querySelector('.container');
const containerWidth = 600;
let divAmount = 50; 
const totalSquares = divAmount * divAmount;

const boxCalc = function() {
    let percentVal = `${100 / divAmount}%`;
    return percentVal;
};

//  Create container function 
function createGrid() {
    container.innerHTML = '';

    container.style.width = `${containerWidth}px`;
    container.style.height = `${containerWidth}px`;

    const cellDimension = boxCalc(); 
    const rowHeight = cellDimension;

    
    for (let i = 0; i < divAmount; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('grid-row');
        newRow.style.height = rowHeight; 

        
        for (let j = 0; j < divAmount; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add('grid-cell');
            
            newDiv.style.width = cellDimension;

            newDiv.addEventListener('mouseover', function() {
                newDiv.style.backgroundColor = 'blue';
            });

            newDiv.addEventListener('click', function() {
                newDiv.style.backgroundColor = '';
            });
            newRow.appendChild(newDiv);
        }

        container.appendChild(newRow);
    }
}

createGrid();




const numButton = document.querySelector('.squareNumber')
numButton.addEventListener('click', () => {
    const userGrid = prompt('how many squares?');

    if ( userGrid !== null){
        divAmount = userGrid;
        createGrid()
    };
if (userGrid >= 101) {
    alert("100 squares is the limit");
    return;
}
} )


