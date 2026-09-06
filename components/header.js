class ZymoraHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="site-header">
            <!-- Logo z podlinkowaniem do strony głównej -->
            <a href="/" class="header-logo">
            <img src="assets/zymora-logotyp.png" alt="Zymora Logotyp" class="logo-img">
            </a>

            <!-- Menu nawigacyjne -->
            <nav class="main-nav">
            <ul class="nav-list">
                <li class="nav-item">
                <a href="#realizacje" class="nav-link">Realizacje</a>
                </li>
                <li class="nav-item">
                <a href="#kontakt" class="nav-link">Kontakt</a>
                </li>
            </ul>
            </nav>
        </header>
    `;
  }
}

customElements.define('zymora-header', ZymoraHeader);