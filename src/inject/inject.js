chrome.extension.sendMessage({}, function(response) {
    var readyStateCheckInterval = setInterval(function() {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            //mouseover 
            document.addEventListener("mouseover", function(e) {
                var link = e.target
                var url = link.getAttribute("href")

                //check if there is a links
                if (url !== null && url.includes("http")) {

                	//send a request to ""api""
                    var oReq = new XMLHttpRequest();
                
                    var localHost = "http://127.0.0.1:5000/?url="
                    var timer = setTimeout(function() {	
                    	oReq.addEventListener("load", function() {
                    		//render out 
							var msg = this.response;

							// alert(msg);
							var opt = {
								message: msg,
								iconUrl: "icon.png"
							};
							chrome.runtime.sendMessage({
							type: "shownotification",
							opt: opt
							});
                    	});
                    oReq.open("GET", localHost + url);
                    oReq.send();
                    }, 500);

                    //kill message request if mouse is moved off link
                   	link.addEventListener('mouseout', function(e) {
						clearTimeout(timer);
					});

                }
            });
        }
    }, 10);

});




