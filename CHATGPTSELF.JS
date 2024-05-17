const incomingText = document.querySelector(".incoming-text");
const sendBtn = document.querySelector("#send");
const userText = null;
const sendText = () =>{
    userText = incomingText.value.trim();
    if(userText.length > 0){
        html = `<div class="user-chatBox">
                    <img src="alien.png" alt="User image">
                    <div class="user-chatDetails">
                        <p></p>
                    </div>
                </div>`;
        const incomingChatDiv = document.createElement(html , "incomingChat");
        userText = document.querySelector("p");
        setTimeout("loading" ,500);
    }else{
        alert("Enter in the prompt area");
    }
}
sendBtn.addEventListener("click" , sendText);