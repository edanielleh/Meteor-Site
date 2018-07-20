import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { author } from './../imports/utils';

Meteor.startup(function(){
    let jsx = (
    <div>
        <h1>{title}</h1>
        <p>Boilerplate made by {author}</p>
    </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
