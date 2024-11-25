// Fetch and insert layout components
async function loadLayout() {
    const navbar = await fetch('/DeputyBlogs/layout/nav.html').then(res => res.text());
    const footer = await fetch('/DeputyBlogs/layout/footer.html').then(res => res.text());
    document.getElementById('navbar').innerHTML = navbar;
    document.getElementById('footer').innerHTML = footer;
}

// Generate post list for the home page
async function generatePostList() {
    const postList = document.getElementById('post-list');
    const posts = [
        { title: "The Story of DeputyMods", link: "/DeputyBlogs/posts/the-story-of-deputymods.html" }
    ];

    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="${post.link}" class="post-link">${post.title}</a>`;
        postList.appendChild(listItem);
    });
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
    if (location.pathname === 'index.html' || location.pathname === '/DeputyBlogs/') {
        generatePostList();
    }
});
