const express = require('express');

const characterRouter = require('./routes/api/character-api.js');

const PORT = process.env.PORT || 3001;
const app = express();

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

characterRouter(app);

db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log(`Server on port ${PORT}`));
});
