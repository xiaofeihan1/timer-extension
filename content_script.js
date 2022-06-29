console.log("The script has been injected")
const button = document.createElement('button');
button.textContent = '发送通知'
document.body.insertAdjacentElement('afterbegin', button);

button.addEventListener('click', function () {
    chrome.runtime.sendMessage('', {
        type: 'notification',
    });
});