chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		    document.addEventListener("mouseover", function(e){
     		var link = e.target
     		var url = link.getAttribute("href")
     		if (url !== null && url.includes("http")){
     			console.log("it's link")
     			var timer = setTimeout(function(){
     				var opt = {
				    	TemplateType: "basic",
				    	title: "Just a test!",
				    	message: url,
				    	iconUrl: "icon.png"
					};
					chrome.runtime.sendMessage({type: "shownotification", opt: opt}, function(){});
     			}, 1000);
     			link.addEventListener('mouseout', function(e){
     				clearTimeout(timer);
     			});
     		}
		});		
	}
	}, 10);

});


