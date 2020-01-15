'use strict';

import {linksMap} from "./links.js";

export function createTeamCard(team) {
    const teamCard = document.createElement('div');
    teamCard.classList.add('teamCard');

    const teamImage = createTeamImageElem(team);
    teamCard.appendChild(teamImage);

    const teamName = createTeamNameElem(team);
    teamCard.appendChild(teamName);

    const teamRole = createTeamRoleElem(team);
    teamCard.appendChild(teamRole);

    const teamDescription = createTeamDescriptionElem(team);
    teamCard.appendChild(teamDescription);

    const teamNetworks = createTeamNetworksElem(team);
    teamCard.appendChild(teamNetworks);

    return teamCard;
}

function createTeamImageElem(team) {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('imageContainer');

    const teamImage = new Image();
    teamImage.src = team.profilePicture;
    teamImage.alt = 'profile';

    imageContainer.appendChild(teamImage);

    return imageContainer;
}

function createTeamNameElem(team) {
    const name = document.createElement('h4');
    name.classList.add('name');
    name.innerText = team.name || '';

    return name;
}

function createTeamRoleElem(team) {
    const role = document.createElement('h5');
    role.classList.add('role');
    role.innerText = team.role || '';

    return role;
}

function createTeamDescriptionElem(team) {
    const description = document.createElement('p');
    description.classList.add('description');
    description.innerText = team.description || '';

    return description
}

function createTeamNetworksElem(team) {
    const networksLinks = document.createElement('div');
    networksLinks.classList.add('networkLink');

    if (Array.isArray(team.contacts)){
        team.contacts.forEach(socialLink =>{
            if (linksMap.get(new URL(socialLink).host)){
                const link = document.createElement('a');
                link.href = socialLink;
                const icon = document.createElement('i');
                link.appendChild(icon);
                networksLinks.appendChild(link);
                icon.setAttribute('class', `${linksMap.get(new URL(socialLink).host)}`)
            }
        });
        return networksLinks
    }
}
