chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

     	document.addEventListener("mouseover", function(e){
     		setTimeout(function() {
     			var link = e.target.getAttribute("href");
 				if (link !== null && link.includes("http")) {
 					console.log(link);
 				}
     		}, 2000);
     	});  		
	}
	}, 10);

});

