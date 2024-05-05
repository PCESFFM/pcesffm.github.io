const url = window.location.pathname;
const filename = url.substring(url.lastIndexOf('/')+1);

function highlightCurrentLink() {
    currentLinks = document.querySelectorAll('a[href="'+filename+'"]');
    currentLinks.forEach(link => link.className += ' current-link');
}

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        highlightCurrentLink();
    }
};
