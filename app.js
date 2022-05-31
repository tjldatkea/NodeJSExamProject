import express from "express";
const app = express();

app.use(express.json());

import path from "path";
app.use(express.static(path.resolve('./public')));

app.get("/", (req, res) => {
    res.send({test: "test"});
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log("The server is running on port:", PORT);
})