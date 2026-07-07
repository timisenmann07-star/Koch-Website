// Rezept-Daten für Favoriten-Anzeige
const recipeData = {
    'gourmet-burger': {
        name: 'Gourmet Burger',
        cuisine: 'Amerikanisch',
        description: 'Saftiger Burger mit premium Zutaten und hausgemachten Saucen',
        time: '30 Min',
        servings: '4 Portionen',
        image: 'bilder/gourmet-burger.jpg',
        link: 'rezepte/gourmet-burger.html'
    },
    'hahnchen-curry': {
        name: 'Hähnchen Curry',
        cuisine: 'Indisch',
        description: 'Würziges und geschmackvolles indisches Curry mit zartem Hähnchen',
        time: '45 Min',
        servings: '4 Portionen',
        image: 'bilder/hahnchen-curry.jpg',
        link: 'rezepte/hahnchen-curry.html'
    },
    'schokoladen-cookies': {
        name: 'Schokoladen Cookies',
        cuisine: 'Dessert',
        description: 'Weiche und knusprige Cookies mit reichlich Schokoladenstückchen',
        time: '25 Min',
        servings: '24 Cookies',
        image: 'bilder/schokoladen-cookies.jpg',
        link: 'rezepte/schokoladen-cookies.html'
    },
    'pasta-carbonara': {
        name: 'Pasta Carbonara',
        cuisine: 'Italienisch',
        description: 'Klassische italienische Pasta mit cremiger Sauce, Eiern und knusprigem Speck',
        time: '20 Min',
        servings: '4 Portionen',
        image: 'bilder/pasta-carbonara.jpg',
        link: 'rezepte/pasta-carbonara.html'
    },
    'gemuesesuppe': {
        name: 'Gemüsesuppe',
        cuisine: 'Gesund',
        description: 'Gesunde und herzhafte Suppe gefüllt mit frischem saisonalem Gemüse',
        time: '30 Min',
        servings: '6 Portionen',
        image: 'bilder/gemuesesuppe.jpg',
        link: 'rezepte/gemuesesuppe.html'
    },
    'tacos-al-pastor': {
        name: 'Tacos al Pastor',
        cuisine: 'Mexikanisch',
        description: 'Würzige marinierte Schweinefleisch-Tacos mit Ananas und frischen Toppings',
        time: '40 Min',
        servings: '6 Tacos',
        image: 'bilder/tacos-al-pastor.jpg',
        link: 'rezepte/tacos-al-pastor.html'
    },
    'risotto-pilze': {
        name: 'Risotto mit Pilzen',
        cuisine: 'Italienisch',
        description: 'Cremiges Risotto mit gemischten Pilzen und Parmesan',
        time: '35 Min',
        servings: '4 Portionen',
        image: 'bilder/risotto-pilze.jpg',
        link: 'rezepte/risotto-pilze.html'
    },
    'gebratener-fisch': {
        name: 'Gebratener Fisch',
        cuisine: 'Mediterran',
        description: 'Perfekt gebratener Fisch mit Kräutern und Zitrone',
        time: '25 Min',
        servings: '2 Portionen',
        image: 'bilder/gebratener-fisch.jpg',
        link: 'rezepte/gebratener-fisch.html'
    },
    'schokoladenkuchen': {
        name: 'Schokoladenkuchen',
        cuisine: 'Dessert',
        description: 'Saftiger Schokoladenkuchen mit reichhaltigem Geschmack',
        time: '60 Min',
        servings: '12 Stücke',
        image: 'bilder/schokoladenkuchen.jpg',
        link: 'rezepte/schokoladenkuchen.html'
    },
    'ramen-nudeln': {
        name: 'Ramen Nudeln',
        cuisine: 'Asiatisch',
        description: 'Authentische japanische Ramen mit würziger Brühe',
        time: '50 Min',
        servings: '4 Portionen',
        image: 'bilder/ramen-nudeln.jpg',
        link: 'rezepte/ramen-nudeln.html'
    },
    'kartoffelsalat': {
        name: 'Kartoffelsalat',
        cuisine: 'Deutsch',
        description: 'Traditioneller deutscher Kartoffelsalat',
        time: '40 Min',
        servings: '6 Portionen',
        image: 'bilder/kartoffelsalat.jpg',
        link: 'rezepte/kartoffelsalat.html'
    },
    'caesar-salat': {
        name: 'Caesar Salat',
        cuisine: 'Amerikanisch',
        description: 'Knackiger Salat mit Caesar-Dressing und Croutons',
        time: '15 Min',
        servings: '4 Portionen',
        image: 'bilder/caesar-salat.jpg',
        link: 'rezepte/caesar-salat.html'
    },
    'spaghetti-bolognese': {
        name: 'Spaghetti Bolognese',
        cuisine: 'Italienisch',
        description: 'Klassisches italienisches Gericht mit saftiger Hackfleischsauce und Spaghetti',
        time: '60 Min',
        servings: '4 Portionen',
        image: 'bilder/spaghetti-bolognese.jpg',
        link: 'rezepte/spaghetti-bolognese.html'
    },
    'wiener-schnitzel': {
        name: 'Wiener Schnitzel',
        cuisine: 'Österreichisch',
        description: 'Klassisches österreichisches Gericht mit paniertem Kalbsschnitzel',
        time: '20 Min',
        servings: '4 Portionen',
        image: 'bilder/wiener-schnitzel.jpg',
        link: 'rezepte/wiener-schnitzel.html'
    },
    'sushi-rolls': {
        name: 'Sushi Rolls',
        cuisine: 'Japanisch',
        description: 'Frische California Rolls mit Avocado, Gurke und Krebsfleisch',
        time: '30 Min',
        servings: '4 Portionen',
        image: 'bilder/sushi-rolls.jpg',
        link: 'rezepte/sushi-rolls.html'
    },
    'lasagne': {
        name: 'Lasagne',
        cuisine: 'Italienisch',
        description: 'Klassische italienische Lasagne mit Hackfleisch und Bechamel-Sauce',
        time: '45 Min',
        servings: '6 Portionen',
        image: 'bilder/lasagne.jpg',
        link: 'rezepte/lasagne.html'
    },
    'ratatouille': {
        name: 'Ratatouille',
        cuisine: 'Französisch',
        description: 'Französisches Gemüse-Eintopf mit Auberginen, Zucchini und Tomaten',
        time: '40 Min',
        servings: '4 Portionen',
        image: 'bilder/ratatouille.jpg',
        link: 'rezepte/ratatouille.html'
    },
    'paella': {
        name: 'Paella',
        cuisine: 'Spanisch',
        description: 'Spanisches Reisgericht mit Meeresfrüchten und Safran',
        time: '30 Min',
        servings: '4 Portionen',
        image: 'bilder/paella.jpg',
        link: 'rezepte/paella.html'
    },
    'beef-stroganoff': {
        name: 'Beef Stroganoff',
        cuisine: 'Russisch',
        description: 'Russisches Rindfleischgericht mit saurer Sahne und Pilzen',
        time: '25 Min',
        servings: '4 Portionen',
        image: 'bilder/beef-stroganoff.jpg',
        link: 'rezepte/beef-stroganoff.html'
    },
    'thai-green-curry': {
        name: 'Thai Green Curry',
        cuisine: 'Thailändisch',
        description: 'Würziges thailändisches Curry mit Kokosmilch und Gemüse',
        time: '20 Min',
        servings: '4 Portionen',
        image: 'bilder/thai-green-curry.jpg',
        link: 'rezepte/thai-green-curry.html'
    },
    'quiche-lorraine': {
        name: 'Quiche Lorraine',
        cuisine: 'Französisch',
        description: 'Französische Tarte mit Speck, Eiern und Käse',
        time: '35 Min',
        servings: '6 Portionen',
        image: 'bilder/quiche-lorraine.jpg',
        link: 'rezepte/quiche-lorraine.html'
    },
    'falafel': {
        name: 'Falafel',
        cuisine: 'Nahöstlich',
        description: 'Knusprige Kichererbsenbällchen aus dem Nahen Osten',
        time: '15 Min',
        servings: '4 Portionen',
        image: 'bilder/falafel.jpg',
        link: 'rezepte/falafel.html'
    },
    'borscht': {
        name: 'Borscht',
        cuisine: 'Osteuropäisch',
        description: 'Rote Rübensuppe aus Osteuropa mit saurer Sahne',
        time: '40 Min',
        servings: '6 Portionen',
        image: 'bilder/borscht.jpg',
        link: 'rezepte/borscht.html'
    },
    'kimchi-fried-rice': {
        name: 'Kimchi Fried Rice',
        cuisine: 'Koreanisch',
        description: 'Koreanisches Reisgericht mit fermentiertem Kimchi',
        time: '15 Min',
        servings: '2 Portionen',
        image: 'bilder/kimchi-fried-rice.jpg',
        link: 'rezepte/kimchi-fried-rice.html'
    },
    'shakshuka': {
        name: 'Shakshuka',
        cuisine: 'Nordafrikanisch',
        description: 'Nordafrikanisches Eiergericht in Tomatensauce',
        time: '20 Min',
        servings: '4 Portionen',
        image: 'bilder/shakshuka.jpg',
        link: 'rezepte/shakshuka.html'
    },
    'bouillabaisse': {
        name: 'Bouillabaisse',
        cuisine: 'Französisch',
        description: 'Französische Fischsuppe aus Marseille mit Meeresfrüchten',
        time: '40 Min',
        servings: '6 Portionen',
        image: 'bilder/bouillabaisse.jpg',
        link: 'rezepte/bouillabaisse.html'
    },
    'tiramisu': {
        name: 'Tiramisu',
        cuisine: 'Italienisch',
        description: 'Italienisches Dessert mit Mascarpone und Kaffee',
        time: '30 Min',
        servings: '8 Portionen',
        image: 'bilder/tiramisu.jpg',
        link: 'rezepte/tiramisu.html'
    },
    'creme-brulee': {
        name: 'Creme Brulee',
        cuisine: 'Französisch',
        description: 'Französisches Vanille-Dessert mit karamellisierter Zuckerkruste',
        time: '50 Min',
        servings: '6 Portionen',
        image: 'bilder/creme-brulee.jpg',
        link: 'rezepte/creme-brulee.html'
    },
    'baklava': {
        name: 'Baklava',
        cuisine: 'Türkisch',
        description: 'Türkisches Blätterteiggebäck mit Nüssen und Honig',
        time: '45 Min',
        servings: '12 Stück',
        image: 'bilder/baklava.jpg',
        link: 'rezepte/baklava.html'
    },
    'poutine': {
        name: 'Poutine',
        cuisine: 'Kanadisch',
        description: 'Kanadisches Gericht mit Pommes, Käse und Bratensauce',
        time: '20 Min',
        servings: '4 Portionen',
        image: 'bilder/poutine.jpg',
        link: 'rezepte/poutine.html'
    },
    'bibimbap': {
        name: 'Bibimbap',
        cuisine: 'Koreanisch',
        description: 'Koreanisches Reisgericht mit Gemüse und Fleisch',
        time: '30 Min',
        servings: '4 Portionen',
        image: 'bilder/bibimbap.jpg',
        link: 'rezepte/bibimbap.html'
    },
    'ceviche': {
        name: 'Ceviche',
        cuisine: 'Peruanisch',
        description: 'Peruanisches Gericht mit mariniertem rohem Fisch',
        time: '20 Min',
        servings: '4 Portionen',
        image: 'bilder/ceviche.jpg',
        link: 'rezepte/ceviche.html'
    }
};
