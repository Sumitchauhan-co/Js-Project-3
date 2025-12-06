let section2PhonePage2 = document.querySelector(".main .section-2");

section2PhonePage2.insertAdjacentHTML(
  "beforeend",
  `
  <div class="page-2-phone display-none">
                <div class="phone-header-container2">
                    <div class="img"></div>
                    <div class="content">
                        <span>Playlist</span>
                        <h1>Chill and Relax</h1>
                        <div>
                            <span>Sumit</span>
                            <span>• 35 Songs</span>
                        </div>
                    </div>
                    <div class="bg"></div>
                </div>
                <div class="phone-header-function" style="background-image: url();">
                    <div class="left">
                        <div class="play-pause">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline" viewBox="0 0 16 16"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                                <path
                                    d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z">
                                </path>
                            </svg>
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline display-none" viewBox="0 0 24 24">
                                <path
                                    d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7z">
                                </path>
                            </svg>
                        </div>
                        <div class="download">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-larger); --encore-icon-width: var(--encore-graphic-size-decorative-larger);">
                                <path
                                    d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12">
                                </path>
                                <path
                                    d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1">
                                </path>
                            </svg>
                        </div>
                        <div class="invite">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-larger); --encore-icon-width: var(--encore-graphic-size-decorative-larger);">
                                <path
                                    d="M4.99 3h2.993v2H4.99v3H2.994V5H0V3h2.994V0h1.995zm7.288-.533a5.49 5.49 0 0 1 6.275 1.322 5.5 5.5 0 0 1 1.133 1.953c.18.532.33 1.474.277 2.378-.098 1.659-.8 3.02-1.749 4.156l-.432.52a.5.5 0 0 0 .134.752l3.59 2.077A5 5 0 0 1 24 19.955V22H4.99v-2.045a5 5 0 0 1 2.494-4.33l3.59-2.077a.5.5 0 0 0 .133-.753l-.43-.518-.002-.001c-.949-1.135-1.65-2.497-1.749-4.156-.053-.904.097-1.846.277-2.378a5.5 5.5 0 0 1 1.133-1.953 5.5 5.5 0 0 1 1.842-1.322M14.494 4a3.5 3.5 0 0 0-2.586 1.14 3.5 3.5 0 0 0-.715 1.245c-.092.272-.213.954-.174 1.617.066 1.124.536 2.092 1.287 2.99l.001.002.433.52a2.503 2.503 0 0 1-.669 3.767l-3.589 2.076a3 3 0 0 0-1.497 2.598V20h15.02v-.045a3 3 0 0 0-1.498-2.598l-3.589-2.076a2.503 2.503 0 0 1-.669-3.766l.433-.52.002-.003c.75-.898 1.22-1.866 1.287-2.99.039-.663-.082-1.345-.174-1.617-.163-.48-.4-.9-.715-1.245A3.5 3.5 0 0 0 14.494 4">
                                </path>
                            </svg>
                        </div>
                        <div class="options">
                            <svg data-encore-id="icon" role="img" aria-hidden="true"
                                class="e-91000-icon e-91000-baseline" viewBox="0 0 24 24"
                                style="--encore-icon-height: var(--encore-graphic-size-decorative-larger); --encore-icon-width: var(--encore-graphic-size-decorative-larger);">
                                <path
                                    d="M4.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m15 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-7.5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3">
                                </path>
                            </svg>
                        </div>
                    </div>
                    <div class="right">
                        <span>List</span>
                        <svg data-encore-id="icon" role="img" aria-hidden="true"
                            class="e-91000-icon e-91000-baseline e-91000-icon--auto-mirror" viewBox="0 0 16 16"
                            style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path
                                d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="phone-header-row">
                    <div class="songs">
                        <div class="hash">#</div>
                        <div class="title">Title</div>
                    </div>
                    <div class="duration">
                        <svg data-encore-id="icon" role="img" aria-hidden="true" class="e-91000-icon e-91000-baseline"
                            viewBox="0 0 16 16"
                            style="--encore-icon-height: var(--encore-graphic-size-decorative-smaller); --encore-icon-width: var(--encore-graphic-size-decorative-smaller);">
                            <path d="M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8">
                            </path>
                            <path d="M8 3.25a.75.75 0 0 1 .75.75v3.25H11a.75.75 0 0 1 0 1.5H7.25V4A.75.75 0 0 1 8 3.25">
                            </path>
                        </svg>
                    </div>
                </div>
                <div class="line"></div>

                <!-- contains song loaded through js -->
                <div class="phone-songs-container"></div>

            </div>
        </div>
  `
)