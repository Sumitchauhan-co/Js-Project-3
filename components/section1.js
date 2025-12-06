let section1 = document.querySelector(".main .section-1");

section1.insertAdjacentHTML(
    "beforeend",
    `
    <div class="sidebar-functions display-none">
                <div class="open-playlists">
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="e-91000-icon e-91000-baseline e-91000-icon--auto-mirror" viewBox="0 0 24 24">
                        <path
                            d="M14.457 15.207a1 1 0 0 1-1.414-1.414L14.836 12l-1.793-1.793a1 1 0 0 1 1.414-1.414l2.5 2.5a1 1 0 0 1 0 1.414z">
                        </path>
                        <path
                            d="M20 22a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2zM4 20V4h4v16zm16 0H10V4h10z">
                        </path>
                    </svg>
                </div>
                <div class="add-playlists">
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="e-91000-icon e-91000-baseline yoyv1_1LPucwCXYDe5AN" viewBox="0 0 16 16"
                        style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                        <path
                            d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="sec1-header-container">
                <div class="sec1-header">
                    <div class="left-button ">
                        <h1>Your Library</h1>
                    </div>
                    <div class="right-container">
                        <div class="mid-button background-glow-sec1">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline gPxvvwdrTY6FbTx3mvl1" viewBox="0 0 16 16"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                                <path
                                    d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75">
                                </path>
                            </svg>
                            <span>Create</span>
                        </div>
                        <div class="right-button glow">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                                <path
                                    d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="nav-bar-container">
                    <div class="nav-bar">
                        <span>Playlists</span>
                        <span>Artists</span>
                        <span>Albums</span>
                    </div>
                </div>
            </div>
            <div class="bar">
                <div class="left-button background-left-bar-glow">
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="e-91000-icon e-91000-baseline CIVozJ8XNPJ60uMN23Yg" viewBox="0 0 16 16"
                        style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                        <path
                            d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5M.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7">
                        </path>
                    </svg>
                </div>
                <div class="right-button">
                    <span>Recents</span>
                    <svg data-encore-id="icon" role="img" aria-hidden="true"
                        class="e-91000-icon e-91000-baseline e-91000-icon--auto-mirror" viewBox="0 0 16 16"
                        style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                        <path
                            d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z">
                        </path>
                    </svg>
                </div>
            </div>
            <div class="playlist-container">
                
            </div>
    `
)