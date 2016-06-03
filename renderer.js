'use strict';

var $ = require('./bower_components/jquery/dist/jquery.js');
var spawn = require('child_process').spawn;
var _ = require('./bower_components/underscore/underscore.js');

$(document).on("ready", function() {
    /**
     * Adds String of obj to closest <pre class="debug"> to button
     *
     * @param obj
     * @param button
     */
    var selfDebug = function(obj, button) {
        var pre = $(button).siblings('pre.debug');
        $(pre).append(String(obj));
    };

    /**
     * Bind btn-shell-widget Buttons
     * Takes action of button and runs it as shell script, piping stdout and stderr to output div
     */
    $('button.btn-shell-widget').on('click', function(e) {
        e.preventDefault();
        var button = $(this);
        var action = $(this).attr('action');
        var actionCommand = action.split(/[ ]+/);
        var child = spawn(actionCommand[0], _.last(actionCommand, actionCommand.length - 1));
        child.stdout.on('data', function (chunk) {
            selfDebug(chunk, button);
        });
        child.stderr.on('data', function (err) {
            selfDebug(err, button);
        });
    });

});