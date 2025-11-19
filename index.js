let teamAInput = document.querySelector(".teamA-input");
let teamABtn = document.querySelector(".teamA-btn");
let teamBInput = document.querySelector(".teamB-input");
let teamBBtn = document.querySelector(".teamB-btn");

let aH1 = document.querySelector(".teamA-header");
let teamAList = document.querySelector(".teamA-list");
let bH1 = document.querySelector(".teamB-header");
let teamBList = document.querySelector(".teamB-list");

let addPlayerInput = document.querySelector(".add-player-input");
let addPlayerBtn = document.querySelector(".add-player-button");

function changeName(team) {
  //Hitta vald lista
  //the argument will choose which team is chosen for input + header so that only 1 function needs to be written.

  let pickedTeam = document.querySelector(`.team${team}-input`);
  let teamValue = pickedTeam.value;
  let teamHeader = document.querySelector(`.team${team}-header`);
  teamHeader.innerText = teamValue;
}

//A way to write a function with (parameter) and not run directly is to add it into an arrow function.
//put the A in "" so that its a string.
teamABtn.addEventListener("click", () => {
  changeName("A");
});

teamBBtn.addEventListener("click", () => {
  changeName("B");
});

///////////////////////////////////////////////////////////////////////

function addPlayers() {
  let playerName = addPlayerInput.value;
  let li = document.createElement("li");

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";

  if (teamAList.childNodes.length === 5 && teamBList.childNodes.length === 5) {
    return null;
  }

  if (teamAList.childNodes.length < 5) {
    li.innerHTML = playerName;
    teamAList.append(li);
    li.append(deleteButton);
  } else {
    li.innerHTML = playerName;
    teamBList.append(li);
    li.append(deleteButton);
  }

  function deleteItem() {
    //rather that choosing which list to delete from, its easier to delete the parent which in this chase is li.
    deleteButton.parentElement.remove();
    //can just use li.parentElement.remove() because we are still in the same scope.
  }

  deleteButton.addEventListener("click", deleteItem);
}

addPlayerBtn.addEventListener("click", addPlayers);

console.log(document.querySelector(".lists .teamA h1"));
console.log(document.querySelector(".teamA-header"));
