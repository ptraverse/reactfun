'use strict';

var $ = require('./bower_components/jquery/dist/jquery.js');
var spawn = require('child_process').spawn;

$(document).on("ready", function() {

    var spawnDebug = function(obj) {
        $('#debug').append(String(obj));
    };

    $('button#doIt').on('click', function () {
        var child = spawn('echo', [
            'asdfasdfasdf'
        ]);
        child.stdout.on('data', function (chunk) {
            spawnDebug(chunk);
        });

        child.stderr.on('data', function (err) {
            spawnDebug(err);
        });
    });

});