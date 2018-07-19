import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { author } from './../imports/utils';

Meteor.startup(function(){
    let jsx = <p>Boilerplate made by {author}</p>;
    ReactDOM.render(jsx, document.getElementById('app'));
});
