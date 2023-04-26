//import React from 'react';
//import ReactDOM from 'react-dom/client';
//import '../../css/style.css'

var realPython = React.createClass({
    render: function () {
        return (<h2>Greetings, from Real Python!</h2>);
    }
});

ReactDOM.render(
    React.createElement(realPython, null),
    document.getElementById('content')
);