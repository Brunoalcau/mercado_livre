var http = require('http');

module.exports = app => {
    if (process.env.NODE_ENV !== "test") {
        http.createServer(app)
            .listen(app.get("port"), () => console.log(`http://localhost:${app.get("port")}`));
    }
}
