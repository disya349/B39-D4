let dataBlog = []

function addBlog(event){
    event.preventDefault()

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files

    image = URL.createObjectURL(image[0])

    let blog = {
        title,
        content,
        image,
        author: "Dicki Syafrudin",
        postAt: "01 Januari 1970"
    }

    dataBlog.push(blog)
    renderBlog()
}

function renderBlog(){
    document.getElementById("contents").innerHTML = ''
    console.log(dataBlog);
    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML += 
        `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
            <h1>
            <a href="blog-detail.html" target="_blank"
            >${dataBlog[index].title}</a
            >
            </h1>
            <div class="detail-blog-content">
            ${dataBlog[index].postAt} | ${dataBlog[index].author}
            </div>
            <p>
            ${dataBlog[index].content}
            </p>
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            </div>
        </div>
        `
    }
}