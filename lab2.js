const HTTP_PORT = process.env.PORT || 3000;
const express = require("express");
const exphbs = require('express-handlebars');
const app = express();

app.get('/',(req,res) => {
    const now = new Date().toISOString();
    const text = `Billie Wu - WEB322 ${now}`;
    res.send(text);
});
 app.listen(HTTP_PORT, () => {
    console.log(`Listening on port ${HTTP_PORT}`);
});
console.log("lab2");

