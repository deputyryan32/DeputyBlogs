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
    const posts = ['the-story-of-deputymods.md']; // Add your posts here

    posts.forEach(post => {
        const postName = post.replace('.md', '').replace(/-/g, ' ');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="/DeputyBlogs/posts/${post}">${postName}</a>`;
        postList.appendChild(listItem);
    });
}

// Render a Markdown file into HTML
async function renderMarkdown(postPath) {
    const content = await fetch(postPath).then(res => res.text());
    const html = marked(content); // Using `marked` library to parse Markdown
    document.querySelector('main').innerHTML = html;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
    if (location.pathname === '/DeputyBlogs/index.html' || location.pathname === '/DeputyBlogs/') {
        generatePostList();
    } else if (location.pathname.includes('/DeputyBlogs/posts/')) {
        const postPath = location.pathname;
        renderMarkdown(postPath);
    }
});
