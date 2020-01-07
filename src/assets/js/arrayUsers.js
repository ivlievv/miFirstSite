'use strict';

fetch('./data/employees.json')
    .then(response => response.json())
    .then(addUsersToPage)
    .catch(console.error);



function createUserListItem(user) {

    const userItemContainer = document.createElement('div');
    userItemContainer.classList.add('teamContainer');

    const generalContainer = document.createElement('div');
    generalContainer.classList.add('container');
    userItemContainer.appendChild(generalContainer);


    const teamListContainer = document.createElement('div');
    teamListContainer.classList.add('teamList');
    userItemContainer.appendChild(teamListContainer);

    const teamItemContainer = document.createElement('div');
    teamItemContainer.classList.add('teamItem');
    userItemContainer.appendChild(teamItemContainer);

    const userImage = document.createElement('img');
    userImage.setAttribute('src', user.profilePicture);
    userImage.setAttribute('alt', 'user picture');
    teamItemContainer.appendChild(userImage);


    const userFullNameElem = document.createElement('h4');
    userFullNameElem.classList.add('teamName');
    userFullNameElem.innerText = `${user.name}`;
    teamItemContainer.appendChild(userFullNameElem);

    const userRole = document.createElement('h5');
    userRole.classList.add('role');
    userRole.innerText = `${user.role}`;
    teamItemContainer.appendChild(userRole);

    const description = document.createElement('p');
    description.classList.add('teamText');
    description.innerText = `${user.description}`;
    teamItemContainer.appendChild(description);

    const icons = document.createElement("div");
    icons.classList.add('teamIcons');
    teamItemContainer.appendChild(icons);

    const linkIcons = document.createElement('a');
    linkIcons.classList.add('teamSocialIcon');
    icons.appendChild(linkIcons);

    const imgIcons = document.createElement('img');
    imgIcons.classList.add('socialTeamIcon');
    icons.appendChild(imgIcons);
    imgIcons.innerText = `${user.contacts}`;



    return userItemContainer;
}

function addUsersToPage(users) {

    const usersList = document.getElementById('team');
    users.forEach(function (user) {
        const newUserListItem = createUserListItem(user);

        usersList.appendChild(newUserListItem);

    })
}
