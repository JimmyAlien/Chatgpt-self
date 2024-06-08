//TODO:Launch this website
//Variables that are used.
const incomingText = document.querySelector(".incoming-text");
const sendBtn = document.querySelector("#sendBtn");
const themeBtn = document.querySelector("#themeBtn");
const deleteBtn = document.querySelector("#deleteBtn");
const chatDetails = document.querySelector(".chat-details");
const textboxHeight = incomingText.scrollHeight;
const userText = null;
const loadLocalStorage = () =>{
    const themeColor = localStorage.getItem("theme-color");
    document.body.classList.toggle("light-mode" , themeColor === "light_mode");
    document.body.classList.contains("light-mode") ? "dark_mode" : "light_mode";
    const defaultText = `<div class="default-chat">
                            <h1>Chat GPT</h1>
                            <p>Feel the power of Artificial intelligence.</p>
                            <p>We only have 10 request a day.</p>
                        </div>`;
    chatDetails.innerHTML = localStorage.getItem("all-chats") || defaultText;
    chatDetails.scrollTo(0 , chatDetails.scrollHeight);
}
loadLocalStorage();
//The div is created.
const createElement = (html , className) =>{
    const div = document.createElement("div");
    div.classList.add("chat" , className);
    div.innerHTML = html;
    return div;
}
const getAIresponse = async(AIchatDiv , incomingText) =>{
    const url = 'https://chatgpt-42.p.rapidapi.com/geminipro';
    const AiText = document.createElement("p");
    console.log(userText);
    const options = {
        method: 'POST',
        headers: {
            'x-rapidapi-key': '47854af86bmshea792a2ed2a75c2p1e50bejsn4ef229c5a5d4',
            'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: 'How can I be rich'
                }
            ]
        })
    };
    // try {
    //     const response = await fetch(url, options);
    //     const result = await response.json();
    //     console.log(result);
    //     errorText = `<p class= "errorText">Error ,no response</p>`
    //     if(result == null){
    //         AiText.textContent = errorText;
    //     }
    //     else{
    //         AiText.textContent = result.result;
    //     }
    //     } catch (error) {
    //         console.log(error);
    // }
    //AIchatDiv.querySelector("#loading").remove();
    // AIchatDiv.querySelector(".ai-chatDetails").appendChild(AiText);
    // localStorage.setItem("all-chats" , chatDetails.innerHTML);
    }
const sendText = () =>{
    const html = `<div class="ai-chatBox">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJv905e-_7-8r42Evr7jtZ65DqT78z8flXZA&s" alt="AI image">
                    <div id="loading"><i class="fa-solid fa-spinner fa-spin-pulse"></i></div>
                    <div class="ai-chatDetails">
                        <p></p>
                        <i id="copyBtn" class="fa-regular fa-copy" onclick="copyText(this)"></i>
                    </div>
                </div>`;
    const AIchatDiv = createElement(html , "AI");
    chatDetails.appendChild(AIchatDiv);
    getAIresponse(AIchatDiv);
}
    const copyText = (copyBtn) =>{
        const copiedText = document.querySelector(".ai-chatDetails p");
        navigator.clipboard.writeText(copiedText.textContent);
        copyBtn.classList.toggle("fa-solid");
        copyBtn.classList.toggle("fa-check");
        setTimeout(changeCopyClasses , 1000);
}
//BUG:ncaught TypeError: Cannot read properties of undefined (reading 'toggle') at changeCopyClasses (CHATGPTSELF.JS:91:23) 
const changeCopyClasses = () =>{
    copyBtn.classList.toggle("fa-copy");
    copyBtn.classList.toggle("fa-solid");
    }
//Receives the input and shows what the user has prompt.
const receiveText = () =>{
    const userText = incomingText.value.trim();
    userText.style.height = `${textboxHeight}px`
    if(!userText) return;
	userInput.value = "";
    const html= `<div class="user-chatBox">
                    <img src="alien.png" alt="User image">
                     <div class="user-chatDetails">
                        <p></p>
                    </div>
                </div>`; 
    const userChat = createElement(html , "user");
    userChat.querySelector("p").textContent = userText;
    chatDetails.appendChild(userChat);
	document.querySelector(".default-chat")?.remove();
    setTimeout(sendText,300);
	chatDetails.scrollTo(0 , chatDetails.scrollHeight);
    getAIresponse(userText);
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
incomingText.addEventListener("input" , ()=>{
    incomingText.style.height = `${textboxHeight}px`;
    incomingText.style.height =  `${incomingText.scrollHeight}px`;
});
incomingText.addEventListener("keydown" , (e) =>{
    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        receiveText();
    }
});
sendBtn.addEventListener("click" , receiveText);
themeBtn.addEventListener("click" , changeTheme);
deleteBtn.addEventListener("click" , deleteAction);