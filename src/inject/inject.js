chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
     	document.addEventListener("mouseover", function(e){
 			var link = e.target.getAttribute("href");
			if (link !== null && link.includes("http")) {
				console.log(link);
				var opt = {
				    TemplateType: "basic",
				    title: "Just a test!",
				    message: link,
				    iconUrl: "icon.png"
				};
				chrome.runtime.sendMessage({type: "shownotification", opt: opt}, function(){});
			}
     	});  		
	}
	}, 10);

});

