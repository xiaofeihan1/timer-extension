const button = document.getElementById("confirm");
button.addEventListener("click", function () {
    const content = document.getElementById('content').value;
    const time = document.getElementById('time').value;
    setTimeout(function () {
        chrome.notifications.create(
            '',
            {
                type: 'basic',
                title: '到时间啦!',
                message: content,
                iconUrl: 'timer.png',
            }
        );
    }, Number(time) * 1000);
});
