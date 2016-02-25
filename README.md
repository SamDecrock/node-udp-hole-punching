# node-udp-hole-punching
Node.js script to demonstrate UDP hole punching through NAT


## Things to change

Change S.S.S.S in `publicserver.js`, `clientA.js`, `clientB.js` to the IP of your public server.

## How to

Run publicserver.js on a public server (not behind a NAT).

Run clientA.js on your first computer behind a NAT.

Run clientB.js on your second computer behind a (different) NAT.

Good Luck!
