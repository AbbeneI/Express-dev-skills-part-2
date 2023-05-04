// Best practice we name our Models without an s because we are representing a single thing/data item
// Model what a single skill should look like

const skills = [
	{ id: 00, name: 'Being Awesome', essential: true },
	{ id: 01, name: 'Javascript', essential: false },
	{ id: 02, name: 'Typing', essential: false },
	{ id: 03, name: 'Debugging', essential: false },
]

// READ - Index get all of a data (skills)
function getAll()  {
    return skills
}

// READ - Show get 1 object based on the `id`
function getOne(id) {

	// req.params come in as strings always. If we need another data type we need to change that string to the type we need
	id = parseInt(id)
	// I want to find the first element/item that matches my check
	// If nothing is found matching that check I want to return -1
	return skills.find(skill => skill.id === id)
}

function create(skill) {
	skill.id = Date.now() % 1000000
	skill.essential = false
	skills.push(skill)
}

function deleteOne(id) {
	console.log("id before ParseInt",id)

	id = parseInt(id)

	const idx = skills.findIndex(skill => skill.id === id)
	skills.splice(idx, 1)
}

function update(id, skill) {
	id = parseInt(id);

	const idx = skills.findIndex(skill => skill.id === id);
	
	console.log("\n---DEBUGGING CONTROLLER: update ---\n","\nMy Error:",skill);
	skill.id = id;

	if(skill.essential === 'on'){
		skill.essential = true;
	}
	else{
		skill.essential = false;
	}

	//assigning user input to array
	skills[idx] = skill;

	console.log("\nSkills Array\n",skills,"skills[idx]",skills[idx]);

}


// exporting to use elsewhere in my app
module.exports = {
	getAll,
	getOne,
	create,
	deleteOne,
	update
}