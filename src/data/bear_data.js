const baerenDaten = [
    {
        id: 1,
        name: "Braunbär (Ursus arctos)",
        kurzbeschreibung: "Der Braunbär ist einer der bekanntesten und am weitesten verbreiteten Bären. Man findet ihn in Nordamerika, Europa und Asien.",
        beschreibung_lang: "Braunbären (Ursus arctos) sind große Säugetiere aus der Familie der Bären (Ursidae). Ihre Fellfarbe variiert von hellbraun bis fast schwarz. Sie sind Allesfresser mit einer sehr variablen Ernährung, die Pflanzen, Insekten, Fische und gelegentlich größere Tiere umfasst. Grizzlybären und Kodiakbären sind bekannte Unterarten des Braunbären.",
        lebensraum: "Wälder, Gebirgsregionen, Tundra",
        nahrung: "Beeren, Wurzeln, Gräser, Insekten, Fisch, kleine Säugetiere, Aas",
        besonderheiten: "Ausgeprägter Schulterbuckel, lange Krallen. Halten Winterruhe.",
        bild: "braunbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Brown_bear_(Ursus_arctos_arctos)_running.jpg (Lizenz prüfen!)
    },
    {
        id: 2,
        name: "Eisbär (Ursus maritimus)",
        kurzbeschreibung: "Der Eisbär ist perfekt an das Leben in der Arktis angepasst und ernährt sich hauptsächlich von Robben.",
        beschreibung_lang: "Der Eisbär (Ursus maritimus) ist ein Fleischfresser, der an die extremen Bedingungen der Arktis angepasst ist. Sein dichtes Fell und eine dicke Fettschicht schützen ihn vor Kälte. Eisbären sind ausgezeichnete Schwimmer und jagen Robben an Eislöchern oder auf dem Packeis.",
        lebensraum: "Arktische Regionen, Packeis, Küstengebiete",
        nahrung: "Hauptsächlich Robben, gelegentlich Walrosse, Wale (Aas), Seevögel",
        besonderheiten: "Weißes Fell zur Tarnung, große Tatzen zum Laufen auf Schnee und Eis. Gilt als gefährdet aufgrund des Klimawandels.",
        bild: "eisbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Polar_bear_(Ursus_maritimus)_in_the_drift_ice_region_north_of_Svalbard.jpg (Lizenz prüfen!)
    },
    {
        id: 3,
        name: "Amerikanischer Schwarzbär (Ursus americanus)",
        kurzbeschreibung: "Der Amerikanische Schwarzbär, auch Baribal genannt, ist die häufigste Bärenart Nordamerikas.",
        beschreibung_lang: "Der Amerikanische Schwarzbär (Ursus americanus) ist kleiner als der Braunbär und hat meist ein schwarzes Fell, obwohl auch braune oder zimtfarbene Varianten vorkommen. Er ist ein Allesfresser und ein guter Kletterer. Die Population gilt als stabil.",
        lebensraum: "Wälder, Sümpfe, Gebirge in Nordamerika",
        nahrung: "Pflanzen, Früchte, Nüsse, Insekten, kleine Wirbeltiere, Aas",
        besonderheiten: "Kein ausgeprägter Schulterbuckel, kürzere Krallen als Braunbären. Sehr anpassungsfähig.",
        bild: "amerik_schwarzbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:American_Black_Bear_in_Jasper_National_Park,_Alberta,_Canada_-_August_2006.jpg (Lizenz prüfen!)
    },
    {
        id: 4,
        name: "Kragenbär (Ursus thibetanus)",
        kurzbeschreibung: "Der Kragenbär, auch Asiatischer Schwarzbär, ist durch eine helle, V-förmige Zeichnung auf der Brust gekennzeichnet.",
        beschreibung_lang: "Der Kragenbär (Ursus thibetanus) lebt in den Wäldern und Gebirgsregionen Asiens. Charakteristisch ist sein schwarzes Fell mit einer auffälligen weißen oder gelblichen Zeichnung auf der Brust, die an einen Kragen erinnert. Er ist ein guter Kletterer und ernährt sich hauptsächlich pflanzlich.",
        lebensraum: "Wälder und Gebirge in Asien",
        nahrung: "Früchte, Nüsse, Eicheln, Insekten, kleine Wirbeltiere",
        besonderheiten: "Auffällige Brustzeichnung ('Mondbär'). Oft Opfer von Wilderei wegen seiner Galle.",
        bild: "kragenbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Ursus_thibetanus_3_(Wroclaw_zoo).jpg (Lizenz prüfen!)
    },
    {
        id: 5,
        name: "Lippenbär (Melursus ursinus)",
        kurzbeschreibung: "Der Lippenbär ist in Indien und Sri Lanka beheimatet und hat sich auf Insektennahrung spezialisiert.",
        beschreibung_lang: "Der Lippenbär (Melursus ursinus) besitzt ein zotteliges, schwarzes Fell und eine lange Schnauze mit beweglichen Lippen, die ideal zur Aufnahme von Ameisen und Termiten geeignet sind. Trotz seiner Spezialisierung frisst er auch Früchte und Honig. Er ist nachtaktiv und gilt als gefährdet.",
        lebensraum: "Tropische und subtropische Wälder und Grasland in Südasien",
        nahrung: "Ameisen, Termiten, Früchte, Honig",
        besonderheiten: "Lange, sichelförmige Krallen zum Aufbrechen von Termitenbauten. Trägt seine Jungen oft auf dem Rücken.",
        bild: "lippenbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Sloth_Bear_Pench.jpg (Lizenz prüfen!)
    },
    {
        id: 6,
        name: "Malaienbär (Helarctos malayanus)",
        kurzbeschreibung: "Der Malaienbär, auch Sonnenbär genannt, ist die kleinste Bärenart und lebt in den tropischen Regenwäldern Südostasiens.",
        beschreibung_lang: "Der Malaienbär (Helarctos malayanus) ist bekannt für sein kurzes, schwarzes Fell und eine oft orangefarbene, hufeisenförmige Brustzeichnung. Er hat eine sehr lange Zunge, um Insekten und Honig aus Nestern zu holen. Er ist ein geschickter Kletterer und hauptsächlich nachtaktiv.",
        lebensraum: "Tropische Regenwälder Südostasiens",
        nahrung: "Insekten (besonders Ameisen und Termiten), Honig, Früchte, kleine Wirbeltiere",
        besonderheiten: "Kleinste Bärenart. Lange Zunge (bis zu 25 cm). Wird auch 'Honigbär' genannt.",
        bild: "malaienbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Sun_Bear_Borneo.jpg (Lizenz prüfen!)
    },
    {
        id: 7,
        name: "Brillenbär (Tremarctos ornatus)",
        kurzbeschreibung: "Der Brillenbär ist der einzige in Südamerika beheimatete Bär und hat oft helle Gesichtszeichnungen, die an eine Brille erinnern.",
        beschreibung_lang: "Der Brillenbär (Tremarctos ornatus) lebt in den Andenregionen Südamerikas. Sein Name leitet sich von den hellen Fellzeichnungen im Gesicht ab, die bei jedem Tier individuell sind. Er ist überwiegend Pflanzenfresser und ein guter Kletterer, der oft Nester in Bäumen baut.",
        lebensraum: "Andenregionen, Nebelwälder, Grasland",
        nahrung: "Hauptsächlich Pflanzen (Früchte, Bromelienherzen, Kakteen), selten Insekten oder kleine Tiere",
        besonderheiten: "Einziger Bär Südamerikas. Die Gesichtszeichnung ist einzigartig wie ein Fingerabdruck.",
        bild: "brillenbaer.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Spectacled_Bear_at_Quito_Zoo.jpg (Lizenz prüfen!)
    },
    {
        id: 8,
        name: "Großer Panda (Ailuropoda melanoleuca)",
        kurzbeschreibung: "Der Große Panda ist weltberühmt für seine schwarz-weiße Fellzeichnung und seine Bambusdiät.",
        beschreibung_lang: "Der Große Panda (Ailuropoda melanoleuca) ist ein Symbol des Artenschutzes und lebt in den Bergregionen Zentralchinas. Trotz seiner Zugehörigkeit zu den Raubtieren ernährt er sich fast ausschließlich von Bambus. Charakteristisch sind sein schwarz-weißes Fell und sein 'sechster Finger', ein umgewandelter Handwurzelknochen zum Festhalten von Bambusstangen.",
        lebensraum: "Gemäßigte Bergwälder mit Bambusvorkommen in China",
        nahrung: "Fast ausschließlich Bambus (verschiedene Arten), selten kleine Wirbeltiere oder Fische",
        besonderheiten: "Spezialisierte Bambusdiät. Symbol des WWF. Gilt als gefährdet, obwohl sich die Bestände leicht erholen.",
        bild: "grosser_panda.jpg" // z.B. https://commons.wikimedia.org/wiki/File:Giant_Panda_Chengdu.JPG (Lizenz prüfen!)
    }
];