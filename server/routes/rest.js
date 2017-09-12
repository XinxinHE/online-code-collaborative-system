const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser'); // middleware
const jsonparser = bodyParser.json();
const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();

const EXECUTOR_SERVER_URL = 'http://executor/build_and_run';

// registoring remote method
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'POST');


const problemService = require('../services/problemService');
// let: will be changed later
// const: will be consistent  ES6

// GET /api/v1/problems

router.get('/problems', function(req, res) {
    problemService.getProblems()
        .then(problems => res.json(problems));
});

// GET /api/v1/problems/:id

router.get('/problems/:id', function(req, res) {
    const id = req.params.id;
    problemService.getProblem(+id)    // + convert to number
        .then(problem => res.json(problem));
});
// POST /api/v1/j

router.post('/problems', jsonparser, function(req, res) {
    problemService.addProblem(req.body)
        .then(function(problem) {
            res.json(problem);
        }, function(error) {
            res.status(400).send('Problem name already exist!');
        });
});

// build and run
router.post('/build_and_run', jsonparser, function(req, res) {
    const userCodes = req.body.userCodes;
    const lang = req.body.lang;
    console.log('*****' + lang + ' ' + userCodes);
    //res.json({'text': 'hello from nodeJs'});
    restClient.methods.build_and_run(
        {
            data: {
                code: userCodes,
                lang: lang
            },
            headers: {
                'Content-Type': 'application/json'
            }
        },
        (data, response) => {
            console.log('received response from executor server: ');
            console.dir('-----' + data);
            console.dir('-----' + response);

            const text = `Build output: ${data['build']}   Execute output: ${data['run']}`;
            console.log('text is...', text);
            data['text'] = text;
            res.json(data);
        }
    );

    //res.json({'test':'hello'});
});

module.exports = router;