chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if(request.type === "shownotification"){
       	var notification = new Notification(request.opt.message);
       	notification.onclick = function(event) {
       		// click for longer message

		  	event.preventDefault(); // prevent the browser from focusing the Notification's tab
		  	alert(request.opt.message);
		}
    }
});