Tic Tac Toad

A slimy take on a classic, deployed here:
https://rotondozer.github.io/tic-tac-toe/

This project uses HTML and CSS with Bootstrap for page layout and styling. Interactive gameboard and game logic are written in JavaScript and JQuery.
It is a Single Page Application that uses JSON and AJAX to communicate with a provided API.

The process for completing this project within a 1-2 week timeframe was as follows:
1. Create wireframes ([Imgur](http://i.imgur.com/hl27vnq.jpg), [Imgur](http://i.imgur.com/WAwwy0s.jpg), [Imgur](http://i.imgur.com/0ETWFhJ.jpg)) and general outline of game logic    
2. Implement basic page mockup
3. Apply JavaScript and JQuery to achieve functional gameboard
4. Create game logic and win logic
5. Style page enough to move it out of the mockup phase
6. Establish comminication with API for user login, logout and password change functionality
7. Add style for better UI on deployment
8. AJAX requests for creating a game, patching game moves and retrieving completed games by the signed in user

Anticipated Updates:

Better UI for retrieving user's completed games. Instead of returning raw JSON data for the user I will display game numbers which, when accessed, reveal a reconstructed a gameboard depicting the state of the game upon it's completion.

More meaningful success/fail callback functions on AJAX requests. For instance, incorrect password submission changing text to red.

Fully functioning mobile buttons. Gameboard is and navbar are mobile repsonsive, as is the dropdown hamburger button, but the containing 'Sign In' and 'My Account' buttons do not work on mobile.
