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
                    <a href="#" class="details-button" data-id="${baer.id}">Mehr erfahren</a>
                </div>
            `;
            speciesGrid.appendChild(card);


            const detailsButton = card.querySelector('.details-button');
            detailsButton.addEventListener('click', (event) => {
                event.preventDefault();

                alert(`Details für ${baer.name}:\n\n${baer.beschreibung_lang}\n\nLebensraum: ${baer.lebensraum}\nNahrung: ${baer.nahrung}\nBesonderheiten: ${baer.besonderheiten}`);
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