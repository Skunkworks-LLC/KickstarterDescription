const express = require('express');
const parser = require('body-parser');
const app = express();
const db = require('../db/mongoDB.js');

app.set('port', 1600);
app.use(express.static('../public'));
app.use(parser.json());

app.get('/allProjects/description', ((request, response) => {
    db.getAllDescriptions().then((data) => {
        response.end(JSON.stringify(data));
    });
}));

app.get('/:projectId/description', ((request, response) => {
    let id = parseInt(request.params.projectId);
    db.get({id: id}).then((data) => {
        response.end(JSON.stringify(data));
    });
}));

app.get('/:projectId/description/campaign', ((request, response) => {
    let id = parseInt(request.params.projectId);
    db.get({id: id}, {'campaign': 1})
        .then((data) => {
            response.end(JSON.stringify(data));
        })
        .catch((err) => {
            response.end(JSON.stringify(err));
        })
}));

app.get('/:projectId/description/updates', ((request, response) => {
    let id = parseInt(request.params.projectId);
    db.get({id: id}, {'updates': 1})
        .then((data) => {
            response.end(JSON.stringify(data));
        })
        .catch((err) => {
            response.end(JSON.stringify(err));
        })
}));

app.get('/:projectId/description/faq', ((request, response) => {
    let id = parseInt(request.params.projectId);
    db.get({id: id}, {'faq': 1})
        .then((data) => {
            response.end(JSON.stringify(data));
        })
        .catch((err) => {
            response.end(JSON.stringify(err));
        })
}));

app.get('/:projectId/description/comments', ((request, response) => {
    let id = parseInt(request.params.projectId);
    db.get({id: id}, {'comments': 1})
        .then((data) => {
            response.end(JSON.stringify(data));
        })
        .catch((err) => {
            response.end(JSON.stringify(err));
        })
}));

app.post('/description', ((request, response) => {
    request.body.KickStarters.forEach((project) => {
        db.postProject(project);
    });
    response.end();
}));

app.listen(app.get('port'));
console.log('listening on port 1600....');