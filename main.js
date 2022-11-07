console.log("Script attached");
/*----------- Exercise #1: SELECTING/MANIPULATING ELEMENTS -----------*/

// Select Node #1 and change the text to: "I used the getElementById("node1") method to access this"
const node1 = document.getElementById("node1");
node1.textContent = "I used the getElementById(`node1`) method to access this";
// Select Node #2 and change the text to: "I used the getElementByClassName("node2") method to access this" */
const node2 = document.getElementsByClassName("node2")[0];
node2.textContent = "I used the getElementByClassName(`node2`) method to access this";
// Select ALL the h3 tags and change the text to: "I used the getElementByTagName("h3") method to access all of these" */
const nodeElements = document.getElementsByTagName("h3");
for (const nodes of nodeElements) {
    nodes.textContent = "I used the getElementsByTagName(`h3`) method to access all of these";
}
/*----------- Exercise #2: CREATING/APPENDING/INSERTING ELEMENTS/OBJECTS -----------*/

// TODO: Create a paragraph element using this document.createElement() and put this text inside "This node was created using the createElement() method"
const paragraphEle = document.createElement("p");
paragraphEle.textContent = "This node was created using the createElement() method";
// TODO: Append the created node to the parent node using the element.appendChild() method
const parentEle = document.querySelector("#parent");
parentEle.appendChild(paragraphEle);
// TODO: Create a <a> element using this document.createElement() and put this text inside "I am a <a> tag"
const anchorEle = document.createElement("a");
anchorEle.textContent = "I am an <a> tag";
// BONUS: Add a link href to the <a>
anchorEle.href = "https://portal.truecoders.io";
// TODO: Insert the created <a> in the parent but before the <p> you just created using the element.insertBefore() method
parentEle.insertBefore(anchorEle, paragraphEle);
/*----------- Exercise #3: REMOVING/REPLACING ELEMENTS/OBJECTS -----------*/

// TODO: Replace the "Child Node" with a new <p> element that reads "New Child Node"
const ec3 = document.querySelector("#exercise-container3");
const firstChild = document.querySelector("#N1");

const newChild = document.createElement("p");
newChild.textContent = "New Child Node";

ec3.replaceChild(newChild, firstChild);
// TODO: Remove the "New Child Node"
ec3.removeChild(newChild);
/*----------- Exercise #4: LIST ITEMS ----------- */
// Use the following array of values to generate a list on the DOM

let list = [ "apples", "bananas", "carrots", "dragon fruit", "eggplant", "fish", "grapes", "honey", "ice bag", "juice (any kind)" ];

const ulEle = document.createElement("ul");

list.forEach(item => {
    const liEle = document.createElement("li");
    liEle.textContent = item;
    ulEle.append(liEle);

});

document.querySelectorAll(".exercise4")[0].append(ulEle);

/*----------- Exercise #5: DOM EVENTS --------------*/

// TODO: write a function called "show" which creates a new div with an alerting message to the user with this message
// -> "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user"
// This div should be a 'modal' that covers the main content on the screen
// BONUS: The modal popup should be able to be closed. Refactor for this functionality

function show(){
    const modalDiv = document.createElement("div");
    const modalCard = document.createElement("div");
    const closeModalButton = document.createElement("button");

    modalDiv.id = "modal";
    modalCard.classList.add("modal-card");
    modalCard.innerText = "Clicking the button triggers the onclick event, which calls the JS function show()... which alerts the user";
    closeModalButton.textContent = "X";
    closeModalButton.classList.add("modal-close-button");
    closeModalButton.addEventListener("click", ()=>{

        console.log("Close Modal clicked");
        modalDiv.remove();
        modalCard.remove();

    })
    
    modalCard.append(closeModalButton);
    modalDiv.append(modalCard);
    document.querySelector("body").append(modalDiv);
}

const showButton = document.querySelector("#btn");
showButton.addEventListener("click", ()=>{
    console.log("Show Modal button clicked");
    show();
})