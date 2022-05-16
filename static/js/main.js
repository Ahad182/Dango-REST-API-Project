


// Get = read the post 
// method = get 

const root = document.querySelector('.root');
const url = 'http://127.0.0.1:3000/api/posts';
const url2 = 'http://127.0.0.1:3000/api/posts/delete';
const url3 = 'http://127.0.0.1:3000/api/posts/create/';
const url4 = 'http://127.0.0.1:3000/api/posts/update';
const GetFormId = document.querySelector('#postForm');
const GetTitleValue = document.getElementById('title');
const GetContentValue = document.getElementById('content');
const GetButton = document.querySelector('#Updat-btn');
let alldata = '';

const renderposts = (posts)=>{
    posts.map(post => {
        alldata += `
        <div class="col-md-4 mt-3 ">
            <div class="card shadow-lg " >
                <div class="card-body "  id=${post.id}>
                  <h5 class="card-title">Title:- <br>  ${post.title}</h5>
                  <h6 class="card-content mb-2 text-muted">Content:- <br>${post.content}</h6>
                  <p class="card-text">Time:-${post.date} <br></p>
                  <a href="#" class="card-link" id="edit-post">Edit</a>
                  <a href="#" class="card-link" id="delete-post">Delete</a>
                </div>
              </div>
        </div>
        
        `;
       
    });
    root.innerHTML = alldata;
}

fetch(url)
.then(response => response.json())
.then(data => renderposts(data))


// post = Creat the post 
// method = post 

GetFormId.addEventListener('submit', (e) =>{
    e.preventDefault();

    fetch(url3,{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ 
            title : GetTitleValue.value , content : GetContentValue.value,
        }),
    })
    .then(res => res.json())
    .then(data => {
        const dataarry = [];
        dataarry.push(data);
        renderposts(dataarry);
        location.reload();

    })

});

// DELETE the post and UPDATE posts 

root.addEventListener('click', (e) => {
    e.preventDefault();
    let PressEditButton = e.target.id == 'edit-post';
    let PressDeleteButton = e.target.id == 'delete-post';
    const id = e.target.parentElement.id;

    // method: DELETE 
    if (PressDeleteButton){
        fetch(`${url2}/${id}/`,{
            method: 'DELETE',

        })
        .then(response => response.json())
        .then(location.reload())
    }

    // method : PATCH 

    if (PressEditButton){
        const parent = e.target.parentElement;
        let CardtitleText = parent.querySelector('.card-title').textContent;
        let CardcontentText = parent.querySelector('.card-content').textContent;
        GetTitleValue.value = CardtitleText ;
        GetContentValue.value = CardcontentText;

        GetButton.addEventListener('click',(e)=>{
            e.preventDefault()
            
            fetch(`${url4}/${id}/`,{
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ 
                    title : GetTitleValue.value , content : GetContentValue.value,
                }),
            })
            .then(response => response.json())
            .then(location.reload())
    
        })
    
       
    }

    
    
})