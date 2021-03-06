const newScore = (req, res, db) => {
  const {email, score} = req.body;
  if(!email || !score){
    return res.status(400).json('Incorrect Submission');
  }

  db.insert({
    email: email,
    score: score
  })
    .into('score')
    .returning('score')
    .then(score => {
      if(score)
        res.status(200).json(score);
      else
        res.json(0);
    })
    .catch(err => res.status(400).json('Something is wrong '+err));
}

module.exports={
  newScore
}