//Variables that are used.
const userInput = document.querySelector(".incoming-text");
const incomingText = document.querySelector(".incoming-text");
const sendBtn = document.querySelector("#sendBtn");
const themeBtn = document.querySelector("#themeBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const copyBtn = document.querySelector("#copyBtn");
const chatDetails = document.querySelector(".chat-details");
//const initialHeight = incomingText.scrollHeight;
const userText = null;
//The div is created.
const createElement = (html , className) =>{
    const div = document.createElement("div");
    div.classList.add("chat" , className);
    div.innerHTML = html;
    return div;
}
//Receives the input and shows what the user has prompt.
const receiveText = () =>{
    const userText = userInput.value.trim();
    console.log(userText);
    if(!userText) return;
	userInput.value = "";
	//userInput.style.height = `${initialHeight}px`;
    const html= `<div class="chat-content">
                    <div class="chat-details">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8InLowceGCu032bKzQyJpG-dKlBAeLfzJzg&s" alt="user-image">
                        <p></p>
                    </div>
                </div>`; 
    const incomingChatDiv = createElement(html,"incoming");
    incomingChatDiv.querySelector("p").textContent = userText;
    chatDetails.appendChild(incomingChatDiv);
	//document.querySelector(".default-text")?.remove();
    // setTimeout(loading,500);
	// chatDetails.scrollTo(0 , chatDetails.scrollHeight);
}
// const sendText = () =>{
//     userText = chatInput.value.trim();
// 	chatInput.value = "";
// 	chatInput.style.height = `${initialHeight}px`;
//     if(!userText) return;
//     const html= `<div class="chat-content">
//                     <div class="chat-details">
//                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8InLowceGCu032bKzQyJpG-dKlBAeLfzJzg&s" alt="user-image">
//                         <p></p>
//                     </div>
//                 </div>`; 
//     const outgoingChatDiv = createElement(html,"outgoing");
//     outgoingChatDiv.querySelector("p").textContent = userText;
//     chatContainer.appendChild(outgoingChatDiv);
// 	document.querySelector(".default-text")?.remove();
//     setTimeout(showTypingAnimation,500);
// 	chatContainer.scrollTo(0 , chatContainer.scrollHeight);
// }
// const loading = () =>{
//     const html = `<div class="ai-chatBox">
//                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJv905e-_7-8r42Evr7jtZ65DqT78z8flXZA&s" alt="AI image">
//                     <div id="loading"><i class="fa-solid fa-spinner fa-spin-pulse"></i></div>
//                     <div class="ai-chatDetails">
//                         <p>AI</p>
//                         <i id="copyBtn" class="fa-regular fa-copy"></i>
//                     </div>
//                 </div>`;
//     const outgoingChatDiv = createElement(html , "outgoing");
//     chatDetails.appendChild(outgoingChatDiv);
//     chatDetails.scrollTo(0 , chatDetails.scrollHeight);
// }
sendBtn.addEventListener("click" , receiveText);
