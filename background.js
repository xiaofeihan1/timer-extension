chrome.runtime.onMessage.addListener(data => {
    if (data.type === 'notification') {
        chrome.notifications.create(
            '',
            {
                type: 'basic',
                title: '到时间啦!',
                message: "",
                iconUrl: 'timer.png',
            }
        );
    }
  });