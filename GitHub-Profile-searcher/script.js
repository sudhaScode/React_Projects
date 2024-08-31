
const fetchAPI = async (userID) => {
  let response = await fetch(`https://api.github.com/users/${userID}`);
  let user = await response.json();
  console.log(user, "users debug");
  return user;
};
async function getUserDetails(event) {
    event.preventDefault();
    let formElement = document.getElementById("form");
    const searchInput = formElement.elements.search.value;
  
    let response = await fetch(`https://api.github.com/users/${searchInput}`);
    let user = await response.json();
    createUserCard(user)
    return user;
}
function createUserCard(user) {
    console.log(user)
    //clean main container
   let mainElement = document.getElementById("main");
   mainElement.innerHTML = ""
   mainElement.className="profie-main";
   //deconstruct the user object
   let { name, avatar_url, bio, followers, following, public_repos, twitter_username, location} = user;

   //image container
   let profileImageElement = document.createElement("div");
   profileImageElement.className = "profile-image"
   let img = document.createElement("img");
   img.src = avatar_url;
   img.className="image";
   img.alt = name;
   profileImageElement.appendChild(img);

   //profile container
   let profileElement = document.createElement("div");
   profileElement.className = "profile"
   profileElement.innerHTML = `
        <p class="name">${name}</p>
        <p class="bio">${bio?bio:name} bio could be empty</p>
        </p>
        <ul class="stats">
            <li>Followers: ${followers}</li>
            <li>Following: ${following}</li>
            <li>Repos: ${public_repos}</li>
        </ul>
        <ul class = "social">
            <li>Twitter: ${twitter_username}</li>
            <li>Location: ${location}</li>
        </ul>
   `
   mainElement.appendChild(profileImageElement);
   mainElement.appendChild(profileElement);
}


//fetchAPI("mojobo");

