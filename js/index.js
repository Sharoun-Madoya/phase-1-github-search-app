
document.addEventListener('DOMContentLoaded', function(){
    const form = document.querySelector('#github-form')

form.addEventListener ('submit',(e) => {
    e.preventDefault()
    
    const search = document.getElementById('search').value

    const originalName = search.split(' ').join('')
    // alert (originalName)

    fetch ('https://api.github.com/search/users?q=' +originalName)
    .then((result) => result.json())
    .then ((data) => {
        console.log (data)
        const item = data.items
        console.log (item)
        item.forEach (function(entry){
            let userInformation = entry
      
        const list = document.createElement('li')
        list.innerText = userInformation.login 
        document.getElementById('user-list').appendChild(list)
        list.addEventListener('click', (e) => {
.

        })
        document.getElementById('github-container').innerHTML = `
        <a target= "blank "href= "https://api.github.com/${originalName}" > </a> <img src="${data.avatar_url}"/> `
    })
    })
})
function fetchdata(){
    fetch(`https://api.github.com/users/${result.login}/repos`)
    .then(res=>res.json())
    .then(repos => {
        repos.map(repo => {
            let repoResult = document.createElement('li')
            repoResult. innerHTML =  repo.visibility })
            })
}
})
