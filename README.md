# abstract
HackCooper 2016 Project

## Inspiration
Data privacy is of very importance to us. We don't want others tracking us what we do every time we click on a link (Psst .. Google). What if we could preview what the content of the link is about before we make the decision to actually click on it?

## What it does
Hover over a link and you will get a small snippet of what the link is about. Clicking on the notification will display more information.

## How I built it
Using a Chrome extension as the frontend and Flask at the backend, we grabbed the url of the link and using PyTeaser to summarize the contents of the link.

## Challenges I ran into
Using chrome extension notifications in the content script, when it is only allowed in background script.

jQuery not working properly in the extension.

## Accomplishments that I'm proud of
Able to get a basic MVP.

## What I learned
Using a backend to receive the AJAX GET request and sending back a response.

## What's next for abstract
Add pictures to the notification and make it more reliable.

