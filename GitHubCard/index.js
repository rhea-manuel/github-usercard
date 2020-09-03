/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'
const myGH = axios.get('https://api.github.com/users/rhea-manuel')
  .then(response => {
    

    const data = response.data

    console.log(data)
    // const imgUrl = data.avatar_url
    // const username = data.login
    
    const newCard = githubCardMaker(data)
    
    const parentDiv = document.querySelector('.cards')
    // debugger
    parentDiv.appendChild(newCard)

    return response
  })
  .catch(error => {
    return error
  })

// console.log(myGH)


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function githubCardMaker(data){
  debugger
  // console.log(imageUrl)
  const parentPanel = document.createElement('div')

  const img = document.createElement('img')
  // console.log(imageUrl)
  img.src = data[avatar_url]
  // console.log(img.src)
  parentPanel.appendChild(img)

  const namePanel = document.createElement('h2')
  namePanel.textContent = data.login
  parentPanel.appendChild(namePanel)

  return parentPanel
}

// function githubCardMaker({imageUrl, username}){
//   // console.log(imageUrl)
//   const parentPanel = document.createElement('div')

//   const img = document.createElement('img')
//   // console.log(imageUrl)
//   img.src = imageUrl
//   console.log(img.src)
//   parentPanel.appendChild(img)

//   const namePanel = document.createElement('h2')
//   namePanel.textContent = username
//   parentPanel.appendChild(namePanel)

//   return parentPanel
// }

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
