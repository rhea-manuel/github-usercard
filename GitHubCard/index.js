/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'

// function makeAllCards(){}
axios.get('https://api.github.com/users/rhea-manuel')
  .then(response => {
    console.log(response.data)

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

const followersArray = [
  'dionne-stratton',
  'joshuaholloway',
  'leachtucker',
  'oliviaChen2020',
  'rhea-manuel',
  'simonesquad',
  'sleepylazarus',
  'sophiethedeveloper',
]

function makeAllCards(allUsers){

  for (let i = 0 ; i < allUsers.length; i++){

    const link = `https://api.github.com/users/${allUsers[i]}`
    // console.log(link)
    axios.get(link)
    .then(response => {
  
  
      const data = response.data
  
      // console.log(data)
      // const imgUrl = data.avatar_url
      // const username = data.login
  
      const newCard = githubCardMaker(data)
  
      const parentDiv = document.querySelector('.cards')
      // debugger
      parentDiv.appendChild(newCard)
      // console.log(response.data)
  
      return response
    })
    .catch(error => {
      return error
    })

  }
  // const data = response.data

  // console.log(data)
  // // const imgUrl = data.avatar_url
  // // const username = data.login

  // const newCard = githubCardMaker(data)

  // const parentDiv = document.querySelector('.cards')
  // // debugger
  // parentDiv.appendChild(newCard)
}



makeAllCards(followersArray)

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

function githubCardMaker(data){
  // debugger
  // console.log(imageUrl)
  const parentPanel = document.createElement('div')
  parentPanel.className = 'card'
  parentPanel.classList.add('hidden')
  console.log(parentPanel.className)

  const childPanel = document.createElement('div')
  childPanel.className = 'card-info'

  
  // console.log(childPanel)

  const img = makeElement('img', 'src', data.avatar_url)
  parentPanel.appendChild(img)

  const name = makeElement('h3', 'textContent', data.name, 'name')
  childPanel.appendChild(name)

  const username = makeElement('p', 'textContent', data.login, 'username')
  childPanel.appendChild(username)

  const allProperties = ['location', 'profile', 'followers', 'following', 'bio']

  for (let i = 0; i < allProperties.length; i++){
    // console.log(allProperties[i])
    let curProp = allProperties[i]
    const toAdd = data[curProp]

    // Makes curProp uppercase when its injected into the final string
    curProp = curProp.charAt(0).toUpperCase() + curProp.slice(1)

    let item = 0;
    // console.log(toAdd)
    if (i!=1){
      item = makeElement('p', 'textContent', `${curProp}: ${toAdd}`) 
    }

    else {
      item = makeElement('p', 'innerHTML', `Profile: <a href="${data.url}">${data.url}</a>`)
      // console.log(item)
    }

    // item.className = 'listItem'
    // item.classList.add('hidden')
    // console.log(item)
    childPanel.appendChild(item)
  }

  function makeElement(type, property, propertyContent, className){
    const curItem = document.createElement(type)
    if (className!=undefined){
      curItem.className = className
    }
    curItem[property] = propertyContent

    return curItem
  }

  parentPanel.appendChild(childPanel)


  const button = document.createElement('span')
  button.textContent = "+"
  button.className = 'button'

  button.addEventListener('click', function(){
    parentPanel.classList.toggle('hidden')

  })

  // const location = makeElement('p', 'textContent', `Location: ${data.location}`)
  // name.appendChild(location)

  // const 
  
  parentPanel.appendChild(button)

  return parentPanel

  

}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
