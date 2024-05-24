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
	incomingText.value = "";
	incomingText.style.height = `${initialHeight}px`;
    if(!userText) return;
    const html= `<div class="chat-content">
                    <div class="chat-details">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8InLowceGCu032bKzQyJpG-dKlBAeLfzJzg&s" alt="user-image">
                        <p></p>
                    </div>
                </div>`; 
    const incomingChatDiv = createElement(html,"incoming");
    incomingChatDiv.querySelector("p").textContent = userText;
    chatContainer.appendChild(incomingChatDiv);
	document.querySelector(".default-text")?.remove();
    setTimeout(loading,500);
	chatContainer.scrollTo(0 , chatContainer.scrollHeight);
}
const loading = () =>{
    const html = `<div class="ai-chatBox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJv905e-_7-8r42Evr7jtZ65DqT78z8flXZA&s" alt="AI image">
                    <div id="loading"><i class="fa-solid fa-spinner fa-spin-pulse"></i></div>
                    <div class="ai-chatDetails">
                        <p>AI</p>
                        <i id="copyBtn" class="fa-regular fa-copy"></i>
                    </div>
                </div>`;
    const outgoingChatDiv = createElement(html , "outgoing");
    chatContainer.appendChild(outgoingChatDiv);
    chatContainer.scrollTo(0 , chatContainer.scrollHeight);
}
sendBtn.addEventListener("click" , sendText);
