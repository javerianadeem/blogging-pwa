const blogs = document.querySelector('.blogs-wrapper')

document.addEventListener('DOMContentLoaded', function () {
    const menus = document.querySelector('.side-menu')
    M.Sidenav.init(menus, { edge: 'right' });

    const forms = document.querySelector('.side-form')
    M.Sidenav.init(forms, { edge: 'left' });
})
const addBlog = (data, id) => {
    const html = `<div class="card-panel  lighten-5
    z-depth-1 blog-div" data-id="${id}">
        <div class="row valign-wrapper blog-row ">
            <div class="col s3">
                <img src="images/blog.jpg" alt="" class=" responsive-img">
                <!-- notice the "circle" class -->
            </div>

            <div class="col s9 l9">
                <h6 class="blog-header">${data.title}</h6>
                <span class="">${data.description}</span>
            </div>
        </div>
        <div class="center-align blog-delete">
            <button class="delete-btn btn #673ab7 deep-purple" data-id="${id}">Delete</button>
        </div>
    </div>
    `;
    blogs.innerHTML += html
}