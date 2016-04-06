# trello-points

Card estimation Power-Up for Trello

- Press a button on a card to pick the estimated size of work a crda represents, between 1 and 4
- The points appear on the cards on the board, and on the button itself if the card is open
- I haven't tested it yet, but the data *should* be accessible via the [Trello API](https://developers.trello.com/advanced-reference/card#get-1-cards-card-id-or-shortlink-field), via `GET /1/cards/[card_id]/badges`. Stay tuned!

![](http://screenshots.kevinbongart.net/OLKcs.gif)

## Installation

1. Head over to [Trello's Power-Ups Admin](https://trello.com/power-ups/admin)
2. Create a new Power-Up for your team with `https://kevinbongart.github.io/trello-points/manifest.json` as the manifest URL
3. Enable the Power-Up in your Trello board
4. ???
5. Profit
