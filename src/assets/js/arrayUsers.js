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

    const teamListContainer = document.createElement('div');
    teamListContainer.classList.add('teamList');

    const teamItemContainer = document.createElement('div');
    teamItemContainer.classList.add('teamItem');

    const userImage = document.createElement('img');
    userImage.setAttribute('src', user.profilePicture);
    userImage.setAttribute('alt', 'user picture');

    teamItemContainer.appendChild(userImage);

    const userFullNameElem = document.createElement('h4');
    userFullNameElem.innerText = `${user.name} ${user.surname}`;

    teamItemContainer.appendChild(teamListContainer);
    teamItemContainer.appendChild(userFullNameElem);

    return teamItemContainer;
}

function addUsersToPage(users) {

    const usersList = document.getElementById('team');
    users.forEach(function (user) {
        const newUserListItem = createUserListItem(user);

        usersList.appendChild(newUserListItem);

    })

}*/
