'use strict';

var classNames = require('classnames');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    <h4>ShellWidget Example</h4>,
    document.getElementById('firstTest')
);

var ShellWidget = React.createClass({
    render: function() {
        return (
            <div>
                <ShellWidgetButton text={this.props.text} action={this.props.action} />
                <ShellWidgetOutput />
            </div>
        );
    }
});

var ShellWidgetButton = React.createClass({
    render: function() {
        var btnClass = classNames({
            'btn': true,
            'btn-primary': true,
            'btn-shell-widget': true
        });
        return (
            <button action={this.props.action} className={btnClass}>
                {this.props.text}
            </button>
        );
    }
});

var ShellWidgetOutput = React.createClass({
    render: function() {
        return (
            <pre className="debug">
            </pre>
        );
    }
});

ReactDOM.render(
    <ShellWidget text="Click Me" action="echo im in ur shell!" />,
    document.getElementById('secondTest')
);

ReactDOM.render(
    <ShellWidget text="List Files" action="ls -la" />,
    document.getElementById('thirdTest')
);