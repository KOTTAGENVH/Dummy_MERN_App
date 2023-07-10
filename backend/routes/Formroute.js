const router = require("express").Router();
const mongoose = require("mongoose");
const Form = require("../models/Form");


router.get('/getForm', async(req, res)=> {
  try {
    const forms = await Form.find();
    res.status(200).json(forms);
  } catch (e) {
    res.status(400).send(e.message);
  }
})



//create product
router.post('/addForm', async(req, res)=> {
  try {
    const {Name,Age} = req.body;
    const form = await Form.create({ Name,Age});
    console.log(form);
    const forms = await Form.find();
    res.status(201).json(forms);
  } catch (e) {
    res.status(400).send(e.message);
  }
})


  module.exports = router;

