let express = require(`express`);
let app = express();
let port = 3000;

let hbs = require(`hbs`);
app.set(`views`, `views`);
app.set(`view engine`, `hbs`);

app.use(express.static(`public`));

app.listen(port, function () {
    console.log(`Сервер запущен http://localhost:${port} `);
});

app.get(`/`, function (req, res) {
    res.render(`versal`);
});

