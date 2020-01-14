'use strict';
import {loadJson} from './components/fetchLoader.js';
import {createTeamCard} from './components/createTeamCard.js';

const teamContent = document.getElementsByClassName('teamContainer')[0];

loadJson('./data/employees.json')
    .then(teams => {
        teams.forEach(team =>{
            teamContent.appendChild(createTeamCard(team));
        })
});