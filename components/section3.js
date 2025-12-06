let section3 = document.querySelector(".main .section-3");

section3.insertAdjacentHTML(
    "beforeend",
    `
    <div class="sec3-header">
                <div class="first">
                    <div class="hide-btn">
                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                            class="e-91000-icon e-91000-baseline e-91000-icon--auto-mirror" viewBox="0 0 16 16"
                            style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path
                                d="M10.03 10.53a.75.75 0 1 1-1.06-1.06L10.44 8 8.97 6.53a.75.75 0 0 1 1.06-1.06l2 2a.75.75 0 0 1 0 1.06z">
                            </path>
                            <path
                                d="M15 16a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1zm-8.5-1.5v-13h8v13zm-1.5 0H1.5v-13H5z">
                            </path>
                        </svg>
                    </div>
                    <div class="name poppins-medium">Saiyara</div>
                </div>
                <div class="second">
                    <div class="more display-none">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline"
                            viewBox="0 0 16 16"
                            style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path
                                d="M3 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m6.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M16 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0">
                            </path>
                        </svg>
                    </div>
                    <div class="expand display-none">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline"
                            viewBox="0 0 16 16"
                            style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path
                                d="M6.53 9.47a.75.75 0 0 1 0 1.06l-2.72 2.72h1.018a.75.75 0 0 1 0 1.5H1.25v-3.579a.75.75 0 0 1 1.5 0v1.018l2.72-2.72a.75.75 0 0 1 1.06 0zm2.94-2.94a.75.75 0 0 1 0-1.06l2.72-2.72h-1.018a.75.75 0 1 1 0-1.5h3.578v3.579a.75.75 0 0 1-1.5 0V3.81l-2.72 2.72a.75.75 0 0 1-1.06 0">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>

            <div class="banner">
                <div class="img"></div>
            </div>

            <div class="song-detail">
                <div class="first">
                    <div class="name poppins-medium">Saiyara</div>
                    <div class="artist poppins-medium">allu arjun</div>
                </div>
                <div class="second">
                    <div class="download">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline"
                            viewBox="0 0 16 16"
                            style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path
                                d="M1 5.75A.75.75 0 0 1 1.75 5H4v1.5H2.5v8h11v-8H12V5h2.25a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75z">
                            </path>
                            <path
                                d="M8 9.576a.75.75 0 0 0 .75-.75V2.903l1.454 1.454a.75.75 0 0 0 1.06-1.06L8 .03 4.735 3.296a.75.75 0 0 0 1.06 1.061L7.25 2.903v5.923c0 .414.336.75.75.75">
                            </path>
                        </svg>
                    </div>
                    <div class="verify">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline"
                            viewBox="0 0 16 16"
                            style="--encore-icon-fill: var(--text-bright-accent, #107434); --encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path
                                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m11.748-1.97a.75.75 0 0 0-1.06-1.06l-4.47 4.47-1.405-1.406a.75.75 0 1 0-1.061 1.06l2.466 2.467 5.53-5.53z">
                            </path>
                        </svg>
                    </div>
                </div>
            </div>
            `
)