"use strict"

const postContent = document.getElementById('postContent')

const authorName = document.getElementById('authorName')

const postButton = document.getElementById('postButton')

const postsContainer = document.getElementById('postsContainer')

// let me create two posts from 2 users

const yinka = {
    id: 1234,
    name: 'yinka', 
    description: 'Future Dev'
}

const clinton = {
    id: 123423,
    name: 'Clinton', 
    description: 'Becoming a Dev'
}


const posts = [yinka, clinton]
const printPosts = () =>{
    postsContainer.innerHTML = ''
    for(const post of posts){
        const markup = `<div class="post" id=${post.id}>
        <div class="post-author">${post.name}</div>
        <div class="post-content">${post.description}</div>
        <button type="button">🚮</button>
       </div>`

       postsContainer.insertAdjacentHTML('afterbegin', markup)
    }
}

const addPost = function(e){
    e.preventDefault()

    const id = Date.now()
    const newPost = {
        id,
        name: authorName.value,
        description: postContent.value
    }
    
    posts.push(newPost)
    printPosts()
    
}

// Now, we created and read elements correctly. All we are left with is to update and delete a property. Do you want to continue or we should stop here for today?

// So we should stop here for today...
// Ok that means next class we complete it


postButton.addEventListener('click', addPost)

printPosts()
