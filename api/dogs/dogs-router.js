const express = require('express');
const Dog = require('./dogs-model');
const router = express.Router();

// DOGS ENDPOINTS
// DOGS ENDPOINTS
// DOGS ENDPOINTS

// ES6 PROMISE:
router.get('/', (req, res) => {
    console.log('A');
    Dog.find()
      .then(dogs => {
        res.status(200).json(dogs);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the dogs',
        });
      });
});

// ASYNC/AWAIT WITH TRY/CATCH
router.get('/', async (req, res) => {
    console.log('B');
    try {
        const dogs = await Dog.find();
        if (dogs) {
            res.status(200).json(dogs);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the dogs',
        });
    }
});

module.exports = router;