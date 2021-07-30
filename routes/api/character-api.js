const db = require('../../models');

module.exports = (app) => {
  app.get('/api/characters', (req, res) => {
    const query = {};
    if (req.query.user_id) {
      query.userId = req.query.user_id;
    }
    db.Character.findAll({
      where: query,
      include: [db.User],
    }).then((dbCharacter) => res.json(dbCharacter));
  });

  app.post('/api/characters', (req, res) => {
    db.Character.create(req.body).then((dbCharacter) => res.json(dbCharacter));
  });

}
