const router = require('express').Router();

let UserModel = require(`../models/user.model`);

router.get('/allBandMembers', (req, res) => {
  UserModel
    .find({})
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Could not find band members in database.');
    })
});

router.get('/leastFavoriteSong', (req, res) => {
  UserModel
    .find(
    { },
    { _id: 0, __v: 0, 'name': 0, 'instrument': 0, songs: { $slice: -1 }} )
    .then(doc => {
      console.log(doc);
      res.status(200).json(doc);
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Could not find least favorite song in database.');
    })
});

router.post('/createBandMember', (req, res) => {
  let newMember = req.body;
  console.log(req.body);
  let newUserDocument = new UserModel(
    newMember);
  newUserDocument.save().then(document => {
    res.status(200).send('Added member.')
  })
    .catch(err => {
      console.error(err);
      res.status(401).send('Failed to create user successfully.');
    });
});

router.post('/createEmily', (req, res) => {
  let newUser = new UserModel({
    name: `Emily`,
    instrument: `piano`,
    songs: [`hello`, `it's me`, `adele`],
  });
  newUser.save()
    .then(doc => {
      console.log(doc)
      res.status(200).send('Successfully added the user!');
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Failed to create user successfully.');
    })
});


router.post('/createCarol', (req, res) => {
  let newUser = new UserModel({
    name: `Carol`,
    instrument: `flute`,
    songs: [`you're so`, `vain`, `carly simon`],
  });
  newUser.save()
    .then(doc => {
      console.log(doc)
      res.status(200).send('Successfully added the user!');
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Failed to create user successfully.');
    })
});


router.post('/createSteve', (req, res) => {
  let newUser = new UserModel({
    name: `Steve`,
    instrument: `drum`,
    songs: [`free`, `bird`, `lynrd skynrd`],
  });
  newUser.save()
    .then(doc => {
      console.log(doc)
      res.status(200).send('Successfully added the user!');
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Failed to create user successfully.');
    })
});


router.post('/createMatthew', (req, res) => {
  let newUser = new UserModel({
    name: `Matthew`,
    instrument: `cowbell`,
    songs: [`bye`, `bye bye`, `nsync`],
  });
  newUser.save()
    .then(doc => {
      console.log(doc)
      res.status(200).send('Successfully added the user!');
    })
    .catch(err => {
      console.error(err);
      res.status(401).send('Failed to create user successfully.');
    })
});

module.exports = router;