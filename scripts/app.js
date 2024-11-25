// Fetch and insert layout components
async function loadLayout() {
    const navbar = await fetch('../layout/nav.html').then(res => res.text());
    const footer = await fetch('../layout/footer.html').then(res => res.text());
    document.getElementById('navbar').innerHTML = navbar;
    document.getElementById('footer').innerHTML = footer;
}

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    loadLayout();
});
