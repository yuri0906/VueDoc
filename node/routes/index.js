var express = require('express');
var router = express.Router();

const { convertToRankingdata } = require("./api/convertToRankingdata"); 

router.get('/', async function(req, res, next) {
  const ranking = await convertToRankingdata(req.body.text)
    .then(result => {
      return result;
    })
    .catch(err =>{
      return err;
    })
  res.send(ranking);
});

module.exports = router;
