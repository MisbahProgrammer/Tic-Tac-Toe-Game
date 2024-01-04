let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('.reset-btn');
let newGameBtn = document.querySelector('.newGame-btn');
let msgContainer = document.querySelector('.msg-box');
let msg = document.querySelector('.msg');
let turnX = true; //playerX or playerO turn
const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log('box was clicked');
        if (turnX){
            box.innerText = 'X';
            turnX = false
            box.style.color = "black";
        }
        else{
            box.innerText = 'O';
            turnX = true
            box.style.color = "red";
        }
        box.disabled = true
        checkwinner();
    })
})

const checkwinner = () =>{
    for (let pattern of winPattern){
            let pos1Val =boxes[pattern[0]].innerText;
            let pos2Val =boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if (pos1Val === pos2Val && pos2Val === pos3Val) {
                    console.log('winner', pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
}

const showWinner = () =>{
    msg.innerText = `Congratulations, You Win`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const disableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = '';
    }
}
const resetGame = () =>{
    turnX=true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);