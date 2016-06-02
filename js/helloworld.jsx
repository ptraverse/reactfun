'use strict';

var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');

$(document).on("ready", function() {
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
    );

    ReactDOM.render(
        <button class="btn btn-primary" id="doIt">Do Something</button>,
        document.getElementById('firstTest')
    );

    ReactDOM.render(
        <pre id="debug"></pre>,
        document.getElementById('debug_parent')
    );
});