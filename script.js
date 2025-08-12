const container = document.querySelector('.container');
let divAmount = 256;


for (let i = 0; i < divAmount; i++){
    const newDiv = document.createElement("div");
    newDiv.classList.add('drawBlock');
    newDiv.style.width = '30px';
    newDiv.style.height = '30px';
    newDiv.style.border = '1px solid'
    container.appendChild(newDiv)
};

const blocks = document.querySelectorAll('.drawBlock');
blocks.forEach(block => {
block.addEventListener(
    'mouseenter',
    (event) => {
        event.target.style.backgroundColor = "blue";
    }, 
);
});


blocks.forEach(block => {
    block.addEventListener(
        'click',
        (event) => {
            event.target.style.backgroundColor = "";
        }
    );
});
