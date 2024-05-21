const incomingText = document.querySelector(".incoming-text");
const sendBtn = document.querySelector("#send");
const themeBtn = document.querySelector("#themeBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const copyBtn = document.querySelector("#copyBtn");
const chatDetails = document.querySelector(".chat-details");
const userText = null;
const createElement = (html , className) =>{
    const div = document.createElement("div");
    div.classList.add("chat" , className);
    div.innerHTML = html;
    return div;
}
const sendText = () =>{
    userText = incomingText.value.trim();
    if(userText.length > 0){
        html = `<div class="user-chatBox">
                    <img src="alien.png" alt="User image">
                    <div class="user-chatDetails">
                        <p></p>
                    </div>
                </div>`;
        const incomingChatDiv = createElement(html , "incomingDiv");
        document.querySelector("p").textContent = userText;
        chatDetails.appendChild(incomingChatDiv);
        setTimeout("loading" ,500);
    }else{
        alert("There is nothing in the prompt");
    }
}
sendBtn.addEventListener("click" , sendText);