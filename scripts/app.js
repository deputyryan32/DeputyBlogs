// Fetch and insert layout components
async function loadLayout() {
    const navbar = await fetch('/layout/nav.html').then(res => res.text());
    const footer = await fetch('/layout/footer.html').then(res => res.text());
    document.getElementById('navbar').innerHTML = navbar;
    document.getElementById('footer').innerHTML = footer;
}

// Generate post list for the home page
async function generatePostList() {
    const postList = document.getElementById('post-list');
    const posts = ['post1.md', 'post2.md']; // Add your posts here

    posts.forEach(post => {
        const postName = post.replace('.md', '').replace(/-/g, ' ');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<a href="/posts/${post}">${postName}</a>`;
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
    if (location.pathname === '/index.html' || location.pathname === '/') {
        generatePostList();
    } else if (location.pathname.includes('/posts/')) {
        const postPath = location.pathname;
        renderMarkdown(postPath);
    }
});
