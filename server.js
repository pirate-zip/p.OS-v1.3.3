const express = require('express');
const server = express();

server.all(`/`, (req, res) => {
    res.send(`Result: [p.OS v1.3.3.1 IS ONLINE]. - (you aren't supposed to be here, but you found secret p.OS 24/7 server mannn)`);
});

function keepAlive() {
    server.listen(3000, () => {
        console.log(`Server is now ready! | ` + Date.now());
    });
}

module.exports = keepAlive;