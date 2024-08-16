
const messageNotEncrypted  = document.querySelector(".container__encrypt__textarea");
const messageEncrypeted = document.querySelector(".container__message-textarea__item");

function showMessage() {
    const getContainerTextarea = document.querySelector(".container__message__textarea");
    const getContainerMessageInfo =  document.querySelector(".container__message__info");

    if (messageNotEncrypted.value != "") {
        getContainerTextarea.style.display = "flex";
        getContainerMessageInfo.style.display = "none";
    } else {
        getContainerMessageInfo.style.display = "flex";
        getContainerTextarea.style.display = "none";
    }
}


function encrypt() {
    showMessage();
    const textEncrypted = messageNotEncrypted.value.toLowerCase();
    const textNormalized = textEncrypted.normalize('NFD').replaceAll(/[\u0300-\u036f]/g, "");
    const message = encryptMessage(textNormalized);
    messageEncrypeted.value = message;
    messageNotEncrypted.value = "";

}


function decrypt() {
    showMessage();
    const textEncrypted = decryptMessage(messageNotEncrypted.value);
    messageEncrypeted.value = textEncrypted;
    messageNotEncrypted.value = "";

}

function copyMessage() {
    navigator.clipboard.writeText(messageEncrypeted.value)
}

function encryptText(message) {
    
    const messageText = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
  
    function encryptMessage (message) {
       for (let i = 0; i < messageText.length; i++) {
          if (message.includes(messageText[i][0])) {
            message = message.replaceAll(messageText[i][0], messageText[i][1]);
          }
        }
        return message;
      }
  
    function decryptMessage (message) {
      for (let i = 0; i < messageText.length; i++) {
        if (message.includes(messageText[i][1])) {
          message = message.replaceAll(messageText[i][1], messageText[i][0]);
        }
      }
      return message;
    }
    return {
      encryptMessage,
      decryptMessage
    };
   }
  
  const { encryptMessage, decryptMessage } = encryptText();
   

  