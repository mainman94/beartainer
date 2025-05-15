document.addEventListener('DOMContentLoaded', function() {
    const speciesGrid = document.getElementById('speciesGrid');
    const navLinks = document.querySelector('.nav-links');
    const menuToggle = document.querySelector('.menu-toggle');

    // Mobile Navigation Toggle
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }


    if (speciesGrid && typeof baerenDaten !== 'undefined') {
        baerenDaten.forEach(baer => {
            const card = document.createElement('div');
            card.classList.add('species-card');

            const imagePath = `images/${baer.bild}`;

            card.innerHTML = `
                <img src="${imagePath}" alt="${baer.name}" loading="lazy">
                <div class="species-card-content">
                    <h3>${baer.name}</h3>
                    <p>${baer.kurzbeschreibung}</p>
                    <div class="details-content" style="display: none;">
                        <p>${baer.beschreibung_lang}</p>
                        <div class="details-grid">
                            <div class="details-item">
                                <strong>Lebensraum:</strong>
                                <p>${baer.lebensraum}</p>
                            </div>
                            <div class="details-item">
                                <strong>Nahrung:</strong>
                                <p>${baer.nahrung}</p>
                            </div>
                            <div class="details-item">
                                <strong>Besonderheiten:</strong>
                                <p>${baer.besonderheiten}</p>
                            </div>
                        </div>
                    </div>
                    <a href="#" class="details-button" data-id="${baer.id}">Mehr erfahren</a>
                </div>
            `;
            speciesGrid.appendChild(card);

            const detailsButton = card.querySelector('.details-button');
            const detailsContent = card.querySelector('.details-content');
            
            detailsButton.addEventListener('click', (event) => {
                event.preventDefault();

                // Merke aktuelle Scrollposition, bevor geöffnet/geschlossen wird
                let previousScrollY = window.scrollY;

                // Close all other expanded cards first
                const allExpandedCards = speciesGrid.querySelectorAll('.species-card.expanded');
                allExpandedCards.forEach(expandedCard => {
                    if (expandedCard !== card) {
                        expandedCard.classList.remove('expanded');
                        const content = expandedCard.querySelector('.details-content');
                        const button = expandedCard.querySelector('.details-button');
                        content.style.display = 'none';
                        button.textContent = 'Mehr erfahren';
                    }
                });

                // Toggle the current card
                const isExpanded = detailsContent.style.display !== 'none';
                detailsContent.style.display = isExpanded ? 'none' : 'block';
                detailsButton.textContent = isExpanded ? 'Mehr erfahren' : 'Weniger anzeigen';
                card.classList.toggle('expanded');

                if (!isExpanded) {
                    card.setAttribute('tabindex', '-1'); // macht das Element fokussierbar
                    card.focus();
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    // Speichere die aktuelle Scrollposition im Card-Element
                    card.dataset.previousScrollY = previousScrollY;
                } else {
                    // Wenn geschlossen wird, scrolle zurück zur vorherigen Position
                    if (card.dataset.previousScrollY) {
                        window.scrollTo({ top: card.dataset.previousScrollY, behavior: "smooth" });
                        delete card.dataset.previousScrollY;
                    }
                }
            });
        });
    } else if (speciesGrid) {
        speciesGrid.innerHTML = '<p>Bärenarten konnten nicht geladen werden.</p>';
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {

                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

});