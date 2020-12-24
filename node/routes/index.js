var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  try{
    res.send("hello docker");
  }catch(error){
    res.status(500).send(err);
  }
});

module.exports = router;
