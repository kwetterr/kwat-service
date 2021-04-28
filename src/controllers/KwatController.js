const mongoose = require('mongoose');
const Kwats = mongoose.model('kwats');

exports.baseRoute = async (req, res) => {
  res.send('Server running');
}

exports.createKwat = async (req, res) => {
  req.body.created_at = Math.round((new Date()).getTime() / 1000);
  await new Kwats(req.body).save((err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Kwat created",
        data
      })
    }
  })
}

exports.updateKwat = async (req, res) => {
  await Kwats.updateOne({ _id: req.params.id }, req.body, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later."
      });
    } else {
      res.status(200).json({
        message: "Kwat updated",
        data
      })
    }
  })
}

exports.getKwat = async (req, res) => {
  await Kwats.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
        data
      })
    } else {
      res.status(200).json({
        data
      })
    }
  })
}

exports.deleteKwat = async (req, res) => {
  var kwat = await Kwats.findById(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      })
    } 
  })
  await Kwats.deleteOne(kwat, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later.",
      })
    } else {
      res.status(200).json({
        message: "Kwat deleted."
      })
    }
  });
}

exports.getNewsfeed = async (req, res) => {
  var newsfeed = await new Kwats.findById()(req.params.id, (err, data) => {
    if (err) {
      res.status(500).json({
        message: "Something went wrong, please try again later."
      })
    }
  }).sort({ "created_at": -1 }).limit(1)

  res.status(200).json({
    newsfeed
  })
}

exports.getTrending = async (req, res) => {
  res.status(200).json({
    message: "Endpoint works."
  })
}
  
  exports.getMentions = async (req, res) => {
    res.status(200).json({
      message: "Endpoint works."
    })
  }