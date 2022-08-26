const chat = document.querySelector(".chat");
const Input = document.querySelector("#Input");



Input.addEventListener("keyup", ({ target: elem, keyCode: key }) => {
  if (key === 13) {
    let val = elem.value.trim();
    if (val) {


      renderUserMessage(val);
    }
    elem.value = '';
    chat.scrollTop = chat.scrollHeight;
  }
});

const renderUserMessage = (value) => {

  renderMes(value, "user");
  
  setTimeout(() => {
    renderMes('...');
  })
  setTimeout(() => {
    chat.lastElementChild.remove();
    renderChatbotResponse(value);
  }, 600);
  Input.value = "";
};

const renderChatbotResponse = (userMessage) => {
  let value = userMessage.toLowerCase();

  const res = getChatbotResponse(value);
  renderMes(res);
};

const getChatbotResponse = (userMessage) => {
  const answer = questionAnswer[userMessage];
  const res = answer ? answer : "Please try something else";
  return res;
};


const renderMes = (txt, type) => {
 
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);


  messageEle.classList.add(`${type === 'user' ? 'user' : 'chatbot'}-message`);
  messageEle.append(txtNode);
  if(chat.lastElementChild && chat.lastElementChild.innerHTML === '...') {
    chat.lastElementChild.before(messageEle);
  } else {
    chat.append(messageEle);
  }
  chat.scrollTop = chat.scrollHeight;
};




const questionAnswer = {
  'hello': 'Hi',
  'how are you?': 'Am am fine thank you,how are you?',
  'what is your name?': 'Alice',
  
}


