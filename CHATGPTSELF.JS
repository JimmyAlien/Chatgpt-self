//Variables that are used.
const userInput = document.querySelector(".incoming-text");
const incomingText = document.querySelector(".incoming-text");
const sendBtn = document.querySelector("#sendBtn");
const themeBtn = document.querySelector("#themeBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const chatDetails = document.querySelector(".chat-details");
//const initialHeight = incomingText.scrollHeight;
const userText = null;
const loadLocalStorage = () =>{
    const themeColor = localStorage.getItem("theme-color");
    document.body.classList.toggle("light-mode" , themeColor === "light_mode");
    document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
    const defaultText = `<div class="default-chat">
                            <h1>Chat GPT</h1>
                            <p>Feel the power of Artificial intelligence</p>
                        </div>`;
    chatDetails.innerHTML = localStorage.getItem("all-chats") || defaultText;
}
loadLocalStorage();
//The div is created.
const createElement = (html , className) =>{
    const div = document.createElement("div");
    div.classList.add("chat" , className);
    div.innerHTML = html;
    return div;
}
const sendText = () =>{
    const html = `<div class="ai-chatBox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJv905e-_7-8r42Evr7jtZ65DqT78z8flXZA&s" alt="AI image">
                    <div id="loading"><i class="fa-solid fa-spinner fa-spin-pulse"></i></div>
                    <div class="ai-chatDetails">
                        <p>AI</p>
                        <i id="copyBtn" class="fa-regular fa-copy" onclick="copyText(this)"></i>
                    </div>
                </div>`;
    const AIchatDiv = createElement(html , "AI");
    chatDetails.appendChild(AIchatDiv);
    localStorage.setItem("all-chats" , chatDetails.innerHTML);
}
const copyText = (copyBtn) =>{
    const copiedText = document.querySelector(".ai-chatDetails p");
    navigator.clipboard.writeText(copiedText.textContent);
    copyBtn.classList.toggle("fa-solid");
    copyBtn.classList.toggle("fa-check");
    setTimeout(changeCopyClasses , 1000);
}
const changeCopyClasses = () =>{
    copyBtn.classList.toggle("fa-copy");
    copyBtn.classList.toggle("fa-solid");
}
//Receives the input and shows what the user has prompt.
const receiveText = () =>{
    const userText = userInput.value.trim();
    if(!userText) return;
	userInput.value = "";
	//userInput.style.height = `${initialHeight}px`;
    const html= `<div class="user-chatBox">
                    <img src="alien.png" alt="User image">
                    <div class="user-chatDetails">
                        <p>User</p>
                    </div>
                </div>`; 
    const userChat = createElement(html , "user");
    userChat.querySelector("p").textContent = userText;
    chatDetails.appendChild(userChat);
	document.querySelector(".default-chat")?.remove();
    setTimeout(sendText,300);
	chatDetails.scrollTo(0 , chatDetails.scrollHeight);
}
const changeTheme = () =>{
    document.body.classList.toggle("light-mode");
    localStorage.setItem("theme-color" , themeBtn.innerHTML)
    themeBtn.innerHTML = document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
}
const deleteAction = () =>{
    if(confirm("Are you sure you want to delete the chats?")){
        localStorage.removeItem("all-chats");
        loadLocalStorage();
    }
}
sendBtn.addEventListener("click" , receiveText);
themeBtn.addEventListener("click" , changeTheme);
deleteBtn.addEventListener("click" , deleteAction);