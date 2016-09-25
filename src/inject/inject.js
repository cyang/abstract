chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

     	document.addEventListener("mouseover", function(e){
 			if (e.target.getAttribute("href") !== null) {
 				console.log(e.target.getAttribute("href"));
 			}
     		
     	});  		
	}
	}, 10);

});

