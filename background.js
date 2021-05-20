chrome.contextMenus.create({
    title: "TWITTER SOCIAL TOOLKIT",
    contexts: ["selection"],
    onclick: myFunction
});

function myFunction(selectedText) {
    const tweetContent = selectedText.selectionText;
    if (tweetContent.length <= 280) {
        const tweetUrl = "https://twitter.com/intent/tweet?text=" + selectedText.selectionText;
        chrome.tabs.create({
            url: tweetUrl
        });
    } else {
        alert("The maximum characters allowed in a tweet is 280");
    }

}