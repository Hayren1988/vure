const sanitizeInput = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g, '');
};
const WebSocket = require('ws');
const wss = new WebSocket.Server({ verifyClient: (info, done) => {
    validateToken(info.req.headers['sec-websocket-protocol']).then(isValid => {
        done(isValid);
    });
}});
