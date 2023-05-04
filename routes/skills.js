const express = require('express')
const router = express.Router()

const skillController = require('../controllers/skills')

// URL in the browser to localhost:3000/skills/kaleSoup
// GET request localhost:3000/skills

// ------ Get Requests ------
router.get('/', skillController.index)

router.get('/new', skillController.newSkill)

router.get('/:id', skillController.show)

router.get('/:id/edit', skillController.edit);

//------ Post, Delete, Put ------
router.post('/', skillController.create)

router.delete('/:id', skillController.deleteSkill)

router.put('/:id/edit', skillController.updateSkill)

// If there is only 1 export you don't need the object
module.exports = router

// GET - gives back information, Index show all data from a model, Show request show a single item from that model.

// GET - WE CANNOT SEND WHAT IS CALLED A BODY, we cannot accept user information

// PUT, PATCH - If we need to intake user information (ei. from a form) we need to have access to the body so we can send that information. We get access to the body when sending a put or patch


// DELETE