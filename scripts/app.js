// Determine the correct path for layout files based on the current location
function getPath() {
    // Check if the page is in a subdirectory (e.g., /posts/)
    if (location.pathname.includes('/posts/')) {
        return '../layout/';
    } else {
        return './layout/';
    }
}

// Fetch and insert layout components
async function loadLayout() {
    const path = getPath();
    const navbar = await fetch(`${path}nav.html`).then(res => res.text());
    const footer = await fetch(`${path}footer.html`).then(res => res.text());
    document.getElementById('navbar').innerHTML = navbar;
    document.getElementById('footer').innerHTML = footer;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});
