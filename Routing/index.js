const  express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
    console.log(`app is listening on port ${port}` );
});

app.get("/", (req, res) => {
    res.send("hello, i'm root");
});

app.get("/apple", (req, res) => {
    res.send("you connected to apple path");
});

app.get("/orange", (req, res) => {
    res.send("you connected to orange path");
});

app.get("/*splat", (req, res) => {
    res.send("Page not found");
});

// app.use((req, res) => {
//     // console.log(req);
//     console.log("Request received");
//     let code = "<h1>Fruit</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send(code);
// });