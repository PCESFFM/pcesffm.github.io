class PCHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });

        shadow.innerHTML = `
            <header>
                <h1><a href="">Pupils' Committee</a></h1>
                <button onclick="document.getElementsByTagName('header').item(0).classList.toggle('hamburger-open')"><ion-icon name="menu"></ion-icon></button>
                <nav>
                    <a href="">Home</a>
                    <a href="about.html">About us</a>
                    <a href="documents.html">Documents</a>
                    <a href="/news/">Newsroom</a>
                    <a href="contact.html">Contact us</a>
                </nav>
            </header>

            <link rel="stylesheet" href="/assets/style/global.css">
            <link rel="stylesheet" href="/assets/style/pc-header.css">
        `;
    }
}

customElements.define("pc-header", PCHeader);
