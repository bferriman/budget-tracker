# budget-tracker

[Deployed Site](https://hidden-ridge-07021.herokuapp.com/)

## Description

This progressive web app allows the user to enter and track financial transactions whether online or off. The app stores transactions locally when offline and syncs with the server side database when a connection is made. Balance over time is charted and transaction log is shown.

## Screenshot

![](reference/screenshot.png)

## Technologies Used

Server side data storage uses MongoDB and Mongoose. Client side data stored with IndexedDB.

Implemented as a progressive web app (PWA) with web manifest, service worker, and asset and data caching.

Uses Chart.js.

## Opportunities For Further Development

It would be fun to add push notifications to the app.  Although all transactions are currently user-generated, I could add some algorithmically-generated transactions on the server side and then add push notifications to warn of things like low balances.

## Credits

This site uses [Bootstrap 4](https://getbootstrap.com/) (copyright 2019 Twitter).
