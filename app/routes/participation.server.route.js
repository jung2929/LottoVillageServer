module.exports = function(app){
    var participation = require(__dirname + '\\../../app/controllers/participation.server.controller');
    app.route('/details_of_participation')
        .post(participation.details_of_participation);
    app.route('/participation')
        .post(participation.participation);
};