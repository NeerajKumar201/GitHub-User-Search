let inputUser = document.getElementById('search-input');
let card = document.getElementById('user');

const clickSearchButton = () => {
  let url = `https://api.github.com/users/${inputUser.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => datafunction(data));
};

const datafunction = (data) => {
  if (data.login == undefined) {
    alert('Invalid your username');
  } else {
    card.innerHTML = `
    
    <div class="card-body">
    <img src="${data.avatar_url}" alt="${data.login}" />
        <p><a href="${data.html_url}">@${data.login}</a></p>
        <h2>${data.name ? data.name : 'No Name?'}</h2>
        <p><b>Location:</b> ${
          data.location ? data.location : 'No Location?'
        }</p>
        <p><b>Repositories:</b> ${
          data.public_repos ? data.public_repos : 'No Reositories?'
        }</p>
        <a href="${data.html_url}?tab=followers">Followers: ${
      data.followers
    }</a>
        <a href="${data.html_url}?tab=following"">Following: ${
      data.following
    }</a>
    </div>
    `;

  }
};
