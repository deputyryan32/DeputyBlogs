// Determine the correct path for layout files based on the current location
function getPath() {
    const currentPath = location.pathname;
    if (currentPath.includes('/posts/')) {
        return '../layout/';
    } else {
        return './layout/';
    }
}

// Fetch and insert layout components
async function loadLayout() {
    const path = getPath();
    try {
        const navbar = await fetch(`${path}nav.html`).then(res => {
            if (!res.ok) throw new Error(`Failed to fetch ${path}nav.html`);
            return res.text();
        });
        const footer = await fetch(`${path}footer.html`).then(res => {
            if (!res.ok) throw new Error(`Failed to fetch ${path}footer.html`);
            return res.text();
        });

        document.getElementById('navbar').innerHTML = navbar;
        document.getElementById('footer').innerHTML = footer;
    } catch (error) {
        console.error('Error loading layout:', error);
        document.getElementById('navbar').innerHTML = '<p>Navigation failed to load.</p>';
        document.getElementById('footer').innerHTML = '<p>Footer failed to load.</p>';
    }
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});
