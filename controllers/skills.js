// We have the `s` here because there will be many actions

// require in my SkillModel
// Because this is a model best practice is to name it uppercase
// We don't need the `.js` here because we are running this in a Node env. Node will assume that all files it is being given are `.js` files
const SkillModel = require('../models/skill')

function index(req, res) {
    res.render('skills/index', {
        skills: SkillModel.getAll(),
        title: 'All Skills'
    })
    // {
    //     skills: [...skills]
    // }
}

function show(req, res) {
    // console.log(req.params)
    res.render('skills/show', {
        skill: SkillModel.getOne(req.params.id),
        title: 'Skill Details'
    })
}

function newSkill(req, res) {
    res.render('skills/new', { title: 'New Skill' })
}

function create(req, res) {
    // console.log(req.body)
    SkillModel.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    console.log("\n---DEBUGGING CONTROLLER: deleteSkill ---\n","req.body:",req.body," req.params.id",req.params.id,"\n")

    SkillModel.deleteOne(req.params.id)
    res.redirect('/skills')
}

function edit(req, res) {  
    res.render('skills/edit', {
        skill: SkillModel.getOne(req.params.id),
        skills: SkillModel.getAll(),
        title: 'Edit Skill'
    })   
}

function updateSkill(req, res) {
    SkillModel.update(req.params.id, req.body);
    console.log("\n---DEBUGGING CONTROLLER: update ---\n","req.body:",req.body," req.params.id",req.params.id,"\n")
    res.redirect('/skills');
}

module.exports = {
	index,
	show,
	newSkill,
	create,
	deleteSkill,
    edit,
    updateSkill
}