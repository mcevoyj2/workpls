const express = require('express');
const { createUnderstanding, findUnderstanding } = require('../Controllers/understandingController');

const router = express.Router();

router.post("/", createUnderstanding);
router.get("/:userId", findUnderstanding);


module.exports = router;