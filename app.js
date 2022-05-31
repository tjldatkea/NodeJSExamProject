const express = import("express");
const app = express();

app.use(express.static(__dirname + '/public')); 
app.use(express.json());

app.get("/", (req, res) => {
    res.send({test: "test"});
});

const PORT = 8080;

app.listen(PORT, () => {
    console.log("The server is running on port:", PORT);
})