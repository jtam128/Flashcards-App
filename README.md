## Flashcard Application
This application allows the user to create, view, and edit flashcards and decks, respectively. The decks are a collection of flashcards and the user can create as many decks as they want. The creation of the decks allows the user to easily go to a certain topic they want to study. When running this application, there is a local server running a nonpersistent local database.

## Screenshots
### Home/Landing Page:
  In this page, the user will see an overview of all the decks. They will also see several buttons. A [Create Deck](#create-deck-page) button, allowing the user to create a new deck. Inside each deck, there are "View", "Study", and "Delete" buttons. The [View](#view-deck-page) button, when clicked, brings the user into a new page where they can see the collections of flashcards that are inisde of that deck. The [Study](#study-deck-page) button, when clicked, allows the user to go through each card in the deck. The "Delete" button will delete the deck.

![homepage](/src/images/opening-page.jpg)
### Create Deck Page:
The user is brought to this page if they click on the "Create Deck" button on the Home Page. The user fills in a name input box and a description input box. They can cancel the creation of the deck or submit it.
![create-deck-page](/src/images/create-deck-page.jpg)

### View Deck Page:
The user is brought to this page if they click on the "View" button on the Home page. They can see the name and description of the deck as well as the collection of cards that belong to the specific deck. 

There are also buttons, they are as follows: "Edit", "Study", "Add Cards", and "Delete".
The "Edit" button, when clicked, will bring the user to the Edit page for the Deck or Card, respectively, and allow the user to make changes to either the deck or card(s).
The "Study" button, when clicked, allows the user to go through the back and frontside of all the cards in a deck.
![view-deck-page](/src/images/view-deck-page.jpg)

### Study Deck Page: 
The page that it goes to when you click the "Study" button in the Home page or in the View Deck page. The following three screenshots show the begining, middle, and end of what the user sees as they go through the cards in a deck.
### First, the user sees the first card and a button labeled "Flip", which allows the user to see the backside(a.k.a answer) of the frontside(a.k.a question or term).
![study-deck-page](/src/images/first-appearance-study-page.jpg)
### As the user goes through each card, but has not yet reached the end of the deck of cards, they will see a "Flip" button and a "Next" button. The "Flip" button allows the user to see the front and backside of a card as they please. The "Next" button allows the user to move on to the next card in the deck.
![studydeckpage2](src/images/after-clicking-flip-study-page.jpg)
### When the user reaches the end of the cards in a deck, a pop-up alert will appear to ask them if they want to go over the cards again from the beginning or get out of studying the cards.
![studydeck3](src/images/reach-end-of-study-deck.jpg)

### Edit Deck Page:
The user is brought to this page when they click the "Edit" button in the View Deck page. They can make changes to the Deck Name and Description. They can cancel the changes made or submit it.
![editdeckpage](src/images/edit-deck-page.jpg)
### Edit Card Page:
The user is brought to this page when... They can make changes to the Front and Back of a card. They can cancel or submit the changes made.
![editcardpage](src/images/edit-card-page.jpg)

### Delete Deck Pop-Up Alert Box: 
The user will see this Alert box when they click the "Delete" button on the Home Page or on the Deck page for each individual deck.
![deletedeckpage](src/images/delete-deck-popup-home-page.jpg)
### Delete Card Pop-Up Alert Box:
The user will see this Alert Box when they click on the "delete" button for each individual card of each Deck. They can only delete cards when in the Deck page of each individual deck.
![deletecardpage](src/images/delete-card-popup.jpg)

## Technology & Tools
Built with:
* React
* JavaScript
* HTML
* CSS
* Bootstrap

## Future Goals
* Apply more Bootstrap and more CSS to make it visually appealing.
* Use a real database to support persistent data storage.