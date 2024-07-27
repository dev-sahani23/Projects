let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let turnO = true; //PlayerO, PlayerX
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const resetGame = () =>{
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
}

const disabledBoxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}

const enabledBoxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const showWinner = (winner) =>{
  msg.innerText = `Congratulations, Winner is ${winner}`
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let posVal1 = boxes[patterns[0]].innerText;
    let posVal2 = boxes[patterns[1]].innerText;
    let posVal3 = boxes[patterns[2]].innerText;

    if(posVal1 != "" && posVal2 != "" && posVal3 != ""){
      if(posVal1 === posVal2 && posVal2 === posVal3){
        console.log("Winner", posVal1)
        showWinner(posVal1);
        
      }
    }
  }
};

newBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
