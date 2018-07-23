import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { author } from './../imports/utils';
import { introduction } from './../imports/components/introduction.jsx';
import { navbar } from './../imports/components/navbar.jsx';
import { skills } from './../imports/components/skills.jsx';
import { coloradotrails } from './../imports/components/coloradotrails.jsx';
import { buildandgo } from './../imports/components/buildandgo.jsx';
import { footer } from './../imports/components/footer.jsx';


Meteor.startup(function(){
    let jsx = (
    <div style = {{'backgroundColor': '#E7E5E5'}}>
        <div> { navbar } </div>
        <div> { introduction } </div>
        <div> { skills } </div>
        <div> { coloradotrails } </div>
        <div> { buildandgo } </div>
        <div> { footer } </div>
    </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
});
