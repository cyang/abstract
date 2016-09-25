chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type === "shownotification"){
       new Notification(request.opt.message);
    }
});