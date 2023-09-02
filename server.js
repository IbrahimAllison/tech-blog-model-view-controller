const express = require("express");
const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const routes = require("./controllers");
const sequelize = require("./config/connection");
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");

// const hbs = exphbs.create({ helpers });
const hbs = exphbs.create({ helpers: require("./utils/helpers") });

const app = express();
const PORT = process.env.PORT || 3005;

// Line 15 through 24 is used for setting up session object with secret, cookie, and store
const sess = {
    secret: "The secret is available",
    // secret: process.env.SECRET,
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));

// Parse incoming JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// app.use(
//     session({
//         secret: process.env.SECRET,
//         store: new SequelizeStore({ db: sequelize }),
//         resave: false,
//         saveUninitialized: false,
//     })
// );


app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});