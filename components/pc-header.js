class PCHeader extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        // Create a shadow root

        this.shadowRoot.innerHTML = `
        <header>
            <h1><a href="">Pupils' Committee</a></h1>
            <button onclick="this.getRootNode().host.toggleNav()"><ion-icon name="menu"></ion-icon></button>
            <nav>
                <a href="">Home</a>
                <a href="about.html">About us</a>
                <a href="documents.html">Documents</a>
                <a href="news/">Newsroom</a>
                <a href="contact.html">Complaint Box</a>
            </nav>
        </header>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
                border: 0;
                overflow: hidden;

                font-family: inherit;
                font-weight: inherit;
                color: inherit;
            }

            header {
                display: grid;
                grid-template: auto auto / auto auto;

                position: fixed;
                z-index: 1;
                top: 0;
                width: 100%;
                padding: 4px 24px;
                overflow: hidden;

                font-family: "Poppins", Tahoma, sans-serif;

                background-color: rgba(0,0,0,0.7);
                backdrop-filter: blur(2px);
                box-shadow: 0 20px 30px rgba(0,0,0,0.4);
                border-bottom: 2px solid rgba(255,255,255,0.4);

                h1 {
                    place-self: center start;

                    font-size: 36px;
                    font-weight: 900;
                    color: transparent;
                    letter-spacing: 3px;
                    text-transform: uppercase;

                    background-image: url(/assets/images/title-scroll-effect.png);
                    background-repeat: repeat-x;
                    background-clip: text;
                    animation: title-scroll 5s linear infinite;

                    a {
                        -webkit-text-stroke: 1px white; /*For some reason does not work when applied to h1*/
                        text-decoration: none;
                    }
                }

                nav {
                    place-self: center end;

                    display: flex;
                    flex-flow: row wrap;
                    align-items: center;
                    gap: 10px;

                    a {
                        display: block;

                        letter-spacing: 1px;
                        padding: 5px 15px;
                        transition: 0.3s ease-in;
                        text-decoration: none;

                        &:hover {
                            background-color: #fff;
                            color: #000;
                        }
                        &.current-link {
                            background-color: #fff;
                            color: #000;
                            transition: none;
                        }
                    }
                }
                button {
                    place-self: center end;

                    display: none;
                    align-items: center;
                    justify-content: center;

                    height: 50px;
                    aspect-ratio: 1 / 1;
                    background: none;
                    font-size: 36px;
                }
            }

            @media (max-width: 1080px) and (min-width: 721px) and (min-height: 401px) {
                header h1, nav {
                    place-self: center;
                    grid-column: 1 / 3;
                }
            }

            @media (max-width: 720px) or ((max-width: 1080px) and (max-height: 400px)) {
                header {
                    button {
                        display: flex;
                    }
                    nav {
                        grid-column: 1 / 3;
                        width: 100%;

                        align-items: end;
                        flex-flow: column nowrap;

                        a {
                            animation: hamburger-open-links 1000ms ease-out 0ms;
                            animation-fill-mode: backwards;
                            &:nth-child(2) {
                                animation-delay: 50ms;
                            }
                            &:nth-child(3) {
                                animation-delay: 100ms;
                            }
                            &:nth-child(4) {
                                animation-delay: 150ms;
                            }
                            &:nth-child(5) {
                                animation-delay: 200ms;
                            }
                            &:nth-child(6) {
                                animation-delay: 250ms;
                            }
                            &:nth-child(7) {
                                animation-delay: 300ms;
                            }
                            &:nth-child(8) {
                                animation-delay: 350ms;
                            }
                        }
                    }
                }
                header:not(.hamburger-open) nav {
                    display: none;
                }
            }

            @media (max-width: 512px) and (min-width: 401px) {
                header h1, button {
                    font-size: 24px;
                }
            }

            @keyframes hamburger-open-links {
                from {
                    translate: -20vw 0;
                    opacity: 0;
                }
            }

            @keyframes title-scroll {
                to {
                    background-position: 320px 0; /*Must travel the size of the actual image*/
                }
            }
        </style>
        `;

        document.onreadystatechange = () => {
            if (document.readyState === "complete") {
                const url = window.location.pathname;
                const filename = url.substring(url.indexOf('/')+1);

                let currentLinks = this.shadowRoot.querySelectorAll(`a[href="${filename}"]`);
                currentLinks.forEach(link => link.classList.add("current-link"));
            }
        };
    }

    toggleNav() {
        this.shadowRoot.querySelector("header").classList.toggle("hamburger-open");
    }
}

customElements.define("pc-header", PCHeader);
