'use strict';
/*

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

    const linkIconsFacebook = document.createElement('a');
    linkIconsFacebook.classList.add('teamSocialIcon');
    icons.appendChild(linkIconsFacebook);

    const imgIconsFacebook = document.createElement('img');
    imgIconsFacebook.classList.add('socialTeamIcon');
    icons.appendChild(imgIconsFacebook);

    const linkIconsTwitter = document.createElement('a');
    linkIconsTwitter.classList.add('teamSocialIcon');
    icons.appendChild(linkIconsTwitter);

    const imgIconsTwitter = document.createElement('img');
    imgIconsTwitter.classList.add('socialTeamIcon');
    icons.appendChild(imgIconsTwitter);

    const linkIconsLinkedIn = document.createElement('a');
    linkIconsLinkedIn.classList.add('teamSocialIcon');
    icons.appendChild(linkIconsLinkedIn);

    const imgIconsLinkedIn = document.createElement('img');
    imgIconsLinkedIn.classList.add('socialTeamIcon');
    icons.appendChild(imgIconsLinkedIn);

    const linkIconsGooglePlus = document.createElement('a');
    linkIconsGooglePlus.classList.add('teamSocialIcon');
    icons.appendChild(linkIconsGooglePlus);

    const imgIconsGooglePlus = document.createElement('img');
    imgIconsGooglePlus.classList.add('socialTeamIcon');
    icons.appendChild(imgIconsGooglePlus);

    const linkIconsDribble = document.createElement('a');
    linkIconsDribble.classList.add('teamSocialIcon');
    icons.appendChild(linkIconsDribble);

    const imgIconsDribble = document.createElement('img');
    imgIconsDribble.classList.add('socialTeamIcon');
    icons.appendChild(imgIconsDribble);




    return userItemContainer;
}

function addUsersToPage(users) {

    const usersList = document.getElementsByClassName('teamList')[0];
    users.forEach(function (user) {
        const newUserListItem = createUserListItem(user);

        usersList.appendChild(newUserListItem);

    })
}
*/
