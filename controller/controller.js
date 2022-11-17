const collection = require('../model/model');

const postDatum = async (req, res) => {
  try {
    const datum = await collection.create(req.body);
    res.status(201).json(datum);
  } catch (error) {
    res.status(500).json(error);
  }
};

const getData = async (req, res) => {
  try {
    const data = await collection.find({});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = { postDatum, getData };
