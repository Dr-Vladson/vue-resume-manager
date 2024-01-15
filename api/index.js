const JSONdb = require('simple-json-db');
const {v4: uuidv4} = require('uuid');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = require('express')();

const PORT = 8888
const db = new JSONdb('resumes.json');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/resumes-simple-list', (req, res) => {
	const resumesObj = db.JSON();
	const simpleListFromResumesObj = Object.keys(resumesObj).map(key => {
		const {id, name, position} = resumesObj[key]
		return {id, name, position}
	})

	res.send(simpleListFromResumesObj)
})

app.get('/resume-full/:id', (req, res) => {
	const resume = db.get(req.params.id)

	if(!resume) {
		return res.status(404).send({message: 'RESUME NOT FOUND'})
	}

	res.send(resume)
})

app.post('/create-resume', (req, res) => {
	if(!req.body) {
		return res.status(400).send({message: 'BODY NOT PROVIDED'})
	}

	const {name, position, email, phone, intro, skills} = req.body

	if
	(
		!name || typeof name !== "string" ||
		!position || typeof position !== "string" ||
		!email || typeof email !== "string" ||
		!phone || typeof phone !== "string" ||
		!intro || typeof intro !== "string" ||
		!skills || typeof skills !== "string"
	) {
		return res.status(400).send(
			{
				message: 'BODY NOT CORRECT'
			}
		)
	}

	const id = uuidv4();
	const newResume = {id,name, position, email, phone, intro, skills}

	db.set(id, newResume);

	res.send(newResume);
})

app.use((_, res) => res.status(404).send({message: 'NOT FOUND'}))

app.listen(PORT, () => {
	console.log('Listening on port', PORT)
})


