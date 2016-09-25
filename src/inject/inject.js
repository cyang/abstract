chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            document.addEventListener("mouseover", function(e) {
                var link = e.target
                var url = link.getAttribute("href")
                if (url !== null && url.includes("http")) {
                    var oReq = new XMLHttpRequest();
                    var ngrok = "https://837e89f8.ngrok.io/?url="

                    oReq.addEventListener("load", reqListener);
                    oReq.open("GET", ngrok + url);
                    oReq.send();

                    
                }
            });
        }
    }, 10);

});

function reqListener() {
	if (this.response !== "none") {
		var msg = this.response;

		var timer = setTimeout(function() {
			var opt = {
				message: msg,
				iconUrl: "icon.png"
			};
			chrome.runtime.sendMessage({
				type: "shownotification",
				opt: opt
			}, function() {});
		}, 1000);
		link.addEventListener('mouseout', function(e) {
			clearTimeout(timer);
		});
	}
}
