# abstract
HackCooper 2016 Project

**Won Best Data Privacy Hack**



## Inspiration
Data privacy is of very importance to us. We don't want others tracking us what we do every time we click on a link (Psst .. Google). What if we could preview what the content of the link is about before we make the decision to actually click on it?

## What it does
Hover over a link and you will get a small snippet of what the link is about just like that of an abstract of a research paper. Clicking on the notification will display more information.

![Demo](http://i.imgur.com/v3CBueV.png)


## How I built it
Using a Chrome extension as the frontend and Flask at the backend, we grabbed the url of the link and using _PyTeaser_ to summarize the contents of the link.

## How to run
1. Clone project
2. Load unpacked extension in Chrome
3. Install python packages by running ```pip install -r requirements.txt```
4. Run ```python main.py``` to start the Flask server
5. Hover over a link for 1-2 seconds and you should get a notification!
6. Click the notification to read more

## Challenges I ran into
* Using chrome extension notifications in the content script, when it is only allowed in background script.
* jQuery not working properly in the extension.
* Non-reliable summaries provided by _PyTeaser_ for web pages other than news articles.

## Accomplishments that I'm proud of
Able to get a basic MVP.

## What I learned
Using a backend to receive the AJAX GET request and sending back a response.

## What's next for abstract
Add pictures to the notification and make it more reliable.

