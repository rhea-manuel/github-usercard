/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

import axios from 'axios'

axios.get('https://api.github.com/users/rhea-manuel')
  .then(response => {
    console.log(response.data)

    return response
  })
  .catch(error => {
    return error
  })


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

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

function githubCardMaker(data) {

  // Create the parent panel
  const parentPanel = document.createElement('div')
  parentPanel.className = 'card'
  parentPanel.classList.add('hidden')
  console.log(parentPanel.className)

  // Create and add the image element
  const img = makeElement('img', 'src', data.avatar_url)
  parentPanel.appendChild(img)

  // Create and add the child panel
  const childPanel = document.createElement('div')
  childPanel.className = 'card-info'
  parentPanel.appendChild(childPanel)

  // Create and add the name + username elements
  const name = makeElement('h3', 'textContent', data.name, 'name')
  childPanel.appendChild(name)

  const username = makeElement('p', 'textContent', data.login, 'username')
  childPanel.appendChild(username)

  // List of properties for the list of elements, since they all share similar traits.
  const allProperties = ['location', 'profile', 'followers', 'following', 'bio']

  // Loops trhough the properties and adds the appropriate elements.
  for (let i = 0; i < allProperties.length; i++) {

    // Get the current property name and appropriate data item
    let curProp = allProperties[i]
    const toAdd = data[curProp]

    // Makes curProp uppercase when its injected into the final string
    curProp = curProp.charAt(0).toUpperCase() + curProp.slice(1)

    // Define a placeholder item
    let item = 0;

    // If it's not the link property, use the general template for a text element.
    if (i != 1) {
      item = makeElement('p', 'textContent', `${curProp}: ${toAdd}`)
    }

    // Use the special template for the link element
    else {
      item = makeElement('p', 'innerHTML', `Profile: <a href="${data.url}">${data.url}</a>`)
    }

    // Add the item to the childPanel
    childPanel.appendChild(item)
  }

  // Function that actually makes the element
  function makeElement(type, property, propertyContent, className) {

    const curItem = document.createElement(type)

    // If there's a classname, adds it
    if (className != undefined) {
      curItem.className = className
    }

    // Adds the appropriate content
    curItem[property] = propertyContent

    return curItem
  }

  // STRETCH GOAL: Create and add the button for opening/collapsing the card
  const button = document.createElement('span')
  button.textContent = "+"
  button.className = 'button'

  // STRETCH GOAL: Add functionality to the button
  button.addEventListener('click', function () {
    parentPanel.classList.toggle('hidden')
  })

  // STRETCH GOAL: Add button to the panel
  parentPanel.appendChild(button)

  return parentPanel
}


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

axios.get('https://api.github.com/users/rhea-manuel')
  .then(response => {

    const data = response.data

    const newCard = githubCardMaker(data)

    const parentDiv = document.querySelector('.cards')
    parentDiv.appendChild(newCard)

    return response
  })

  .catch(error => {
    return error
  })

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
  'simonesquad',
  'sleepylazarus',
  'sophiethedeveloper',
]

function makeAllCards(allUsers) {

  for (let i = 0; i < allUsers.length; i++) {

    // Create the link using the appropriate index
    const link = `https://api.github.com/users/${allUsers[i]}`

    axios.get(link)
      .then(response => {

        // Get the data and make the card with the current item
        const data = response.data
        const newCard = githubCardMaker(data)

        // Get the parent div and attach the card to it
        const parentDiv = document.querySelector('.cards')
        parentDiv.appendChild(newCard)

        return response
      })
      .catch(error => {
        return error
      })

  }
}

// Call the card function
makeAllCards(followersArray)

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
