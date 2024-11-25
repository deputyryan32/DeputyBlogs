// Fetch and insert layout components
async function loadLayout() {
    const navbar = await fetch('./layout/nav.html').then(res => res.text());
    const footer = await fetch('./layout/footer.html').then(res => res.text());
    document.getElementById('navbar').innerHTML = navbar;
    document.getElementById('footer').innerHTML = footer;
}

// Generate post list for the home page
async function generatePostList() {
    const postList = document.getElementById('post-list');
    const posts = [
        { title: "The Story of DeputyMods", link: "./posts/the-story-of-deputymods.md" }
    ];

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="#" class="post-link" data-post="${post.link}">${post.title}</a>`;
        postList.appendChild(listItem);
    });

    // Add click event listeners for rendering full posts
    document.querySelectorAll('.post-link').forEach(link => {
        link.addEventListener('click', async (e) => {
            e.preventDefault();
            const postPath = e.target.dataset.post;
            renderFullPost(postPath);
        });
    });
}

// Render a Markdown file into the full post view
async function renderFullPost(postPath) {
    const content = await fetch(postPath).then(res => res.text());
    const html = marked(content); // Using `marked` library to parse Markdown
    document.getElementById('post-content').innerHTML = html;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
    if (location.pathname.endsWith('index.html') || location.pathname === '/') {
        generatePostList();
    }
});
