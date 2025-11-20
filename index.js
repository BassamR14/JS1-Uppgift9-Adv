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

  //creating a span for the player name
  let nameSpan = document.createElement("span");
  nameSpan.classList.add("player-name");
  nameSpan.innerText = playerName;

  let btnSpan = document.createElement("span");

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "X";

  let changeTeamBtn = document.createElement("button");
  changeTeamBtn.innerText = "Change Team";

  let changePlayerNameBtn = document.createElement("button");
  changePlayerNameBtn.innerText = "Change Name";

  if (teamAList.childNodes.length === 5 && teamBList.childNodes.length === 5) {
    return null;
  }

  if (teamAList.childNodes.length < 5) {
    // li.innerHTML = playerName;
    teamAList.append(li);
    li.append(nameSpan);
    li.append(btnSpan);
    btnSpan.append(deleteButton);
    btnSpan.append(changeTeamBtn);
    btnSpan.append(changePlayerNameBtn);
  } else {
    // li.innerHTML = playerName;
    teamBList.append(li);
    li.append(nameSpan);
    li.append(btnSpan);
    btnSpan.append(deleteButton);
    btnSpan.append(changeTeamBtn);
    btnSpan.append(changePlayerNameBtn);
  }

  function deleteItem() {
    //rather that choosing which list to delete from, its easier to delete the parent/ancestor which in this chase is li.
    deleteButton.closest("li").remove();
    //can just use li.parentElement.remove() because we are still in the same scope.
  }

  deleteButton.addEventListener("click", deleteItem);

  function changeTeam() {
    let li = changeTeamBtn.closest("li"); // the player <li>
    let fromList = li.parentElement; // the current <ul>
    // let toList = fromList.classList.contains("teamA-list")
    //   ? teamBList
    //   : teamAList;

    // need to check if the fromlist contains the class teamA-list, if it does then the toList becomes teamB-list, if not then toList is teamA-list.
    if (fromList.classList.contains("teamA-list")) {
      toList = teamBList;
    } else {
      toList = teamAList;
    }

    // max 5 rule
    if (toList.childNodes.length >= 5) {
      alert("This team already has 5 players!");
      return;
    }

    toList.append(li);
  }

  changeTeamBtn.addEventListener("click", changeTeam);

  function changePlayerName() {
    //prompt, is a pop up that allows the user to input a string, and is saves as an input value.
    // let newName = prompt("Enter new player name:");
    nameSpan.innerText = prompt("Enter new player name:");

    //trim() removes all spaces from both ends(front & back)
    //checks if the name is not empty
    // if (newName && newName.trim() !== "") {
    //   nameSpan.innerText = newName;
    // }
  }

  changePlayerNameBtn.addEventListener("click", changePlayerName);
}

addPlayerBtn.addEventListener("click", addPlayers);
