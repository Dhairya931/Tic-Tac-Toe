let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let newbtn=document.querySelector(".new");
let message=document.querySelector(".msg");
let win=document.querySelector("#winner")

let turn=true;
let cnt=0;

winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const rstGame = () =>{
    turn=true;
    enableBoxes();
    message.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn){
            box.innerText = "O";
            turn=false;
            
        }else{
            box.innerText = "X";
            turn=true;
        }
        box.disabled=true;
        cnt++;

        let isWinner=checkWinner();
        if(cnt===9 && !isWinner){
            draw();
            box.disabled=true;
        }


    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const draw= () =>{
    win.innerText="The Game is Draw!!";
    message.classList.remove("hide");
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner= (winner) =>{
    win.innerText=`Congratulations!! Winner is ${winner}`;
    message.classList.remove("hide");
    disableBoxes();
};

const checkWinner = () =>{
    for (let pattern of winPatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showWinner(pos1); 
            }
        }
    }
};

newbtn.addEventListener("click",rstGame);
resetbtn.addEventListener("click",rstGame);