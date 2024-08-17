const express = require('express');
const Card = require('../models/card');
const router = express.Router();

// Create a new card
router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body;
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all cards
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific card by title
router.get('/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) return res.status(404).json({ error: 'Card not found' });
    res.json(card);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
