async function getUsers(){
  try{
  const data = await fetch('https://api.github.com/users/octocat/repos',{
       method:"GET"
  })
  .then((data) => {
    return data.json();
    console.log(data);
  })
.then(users => loadUsers(users));
  }
  catch(error){
    console.log("error");
  }
}



function loadUsers(users){
  const userList = document.createElement("div");
  userList.className='user-list';
  users.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.className = 'user-container';
    userContainer.innerHTML = `
    <p>
    <img class="repo-owner-image" src="https://avatars.githubusercontent.com/u/583231?v=4" target="_blank">  </img>
    </p> 
    <div>
    <h3 class="user-repo"> ${user.name} </h3>
    <p class="fork-count"> Fork Count: ${user.forks_count}</p>
    <p class="star-count"> Stars Count: ${user.stargazers_count}</p>
    <a class="repo-url" href=${user.url}> ${user.url} </a> 
    </div>
    `;
    userList.append(userContainer);
  });
     document.body.append(userList);
}

getUsers();
