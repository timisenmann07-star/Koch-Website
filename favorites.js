// Favoriten-Verwaltung

// Rezept zu Favoriten hinzufügen
async function addToFavorites(recipeId, recipeName) {
    console.log('Versuche Favorit hinzuzufügen:', recipeId);
    const user = auth.currentUser;

    if (!user) {
        alert('Bitte melde dich an, um Rezepte zu speichern.');
        const loginPath = window.location.pathname.includes('/rezepte/') ? '../login.html' : 'login.html';
        window.location.href = loginPath;
        return;
    }

    try {
        await db.collection('favorites').doc(user.uid).collection('recipes').doc(recipeId).set({
            recipeId: recipeId,
            recipeName: recipeName,
            addedAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Favorit erfolgreich hinzugefügt');
        alert('Rezept zu Favoriten hinzugefügt!');
        updateFavoriteButton(recipeId, true);
    } catch (error) {
        console.error('Fehler beim Hinzufügen:', error);
        alert('Fehler beim Hinzufügen zu Favoriten.');
    }
}

// Rezept aus Favoriten entfernen
async function removeFromFavorites(recipeId) {
    const user = auth.currentUser;
    
    if (!user) return;

    try {
        await db.collection('favorites').doc(user.uid).collection('recipes').doc(recipeId).delete();
        alert('Rezept aus Favoriten entfernt!');
        updateFavoriteButton(recipeId, false);
        
        // Wenn wir auf der Favoriten-Seite sind, Seite neu laden
        if (window.location.pathname.includes('meine-favoriten.html')) {
            loadFavorites();
        }
    } catch (error) {
        console.error('Fehler beim Entfernen:', error);
        alert('Fehler beim Entfernen aus Favoriten.');
    }
}

// Prüfen ob Rezept bereits in Favoriten ist
async function isFavorite(recipeId) {
    const user = auth.currentUser;
    if (!user) return false;

    try {
        const doc = await db.collection('favorites').doc(user.uid).collection('recipes').doc(recipeId).get();
        return doc.exists;
    } catch (error) {
        console.error('Fehler beim Prüfen:', error);
        return false;
    }
}

// Favoriten-Button aktualisieren
function updateFavoriteButton(recipeId, isFav) {
    const button = document.querySelector(`[data-recipe-id="${recipeId}"]`);
    if (button) {
        if (isFav) {
            button.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Aus Favoriten entfernen';
            button.classList.add('favorited');
        } else {
            button.innerHTML = '<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> Zu Favoriten hinzufügen';
            button.classList.remove('favorited');
        }
    }
}

// Alle Favoriten laden (für Favoriten-Seite)
async function loadFavorites() {
    const user = auth.currentUser;
    
    if (!user) {
        window.location.href = 'login.html';
        return;
    }

    const favoritesContainer = document.getElementById('favorites-container');
    if (!favoritesContainer) return;

    try {
        const snapshot = await db.collection('favorites').doc(user.uid).collection('recipes')
            .orderBy('addedAt', 'desc').get();

        if (snapshot.empty) {
            favoritesContainer.innerHTML = '<p class="no-favorites">Du hast noch keine Favoriten gespeichert.</p>';
            return;
        }

        let html = '<div class="recipes-grid">';
        
        snapshot.forEach((doc) => {
            const data = doc.data();
            const recipe = recipeData[data.recipeId];
            
            if (recipe) {
                html += `
                    <div class="recipe-card">
                        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
                        <h3>${recipe.name}</h3>
                        <p class="cuisine">${recipe.cuisine}</p>
                        <p class="description">${recipe.description}</p>
                        <div class="recipe-details">
                            <span><svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> ${recipe.time}</span>
                            <span><svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg> ${recipe.servings}</span>
                        </div>
                        <a href="${recipe.link}" class="recipe-link">Rezept anzeigen</a>
                        <button class="favorite-btn remove-btn" onclick="removeFromFavorites('${data.recipeId}')">
                            <svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg> Entfernen
                        </button>
                    </div>
                `;
            }
        });
        
        html += '</div>';
        favoritesContainer.innerHTML = html;
    } catch (error) {
        console.error('Fehler beim Laden der Favoriten:', error);
        favoritesContainer.innerHTML = '<p class="error">Fehler beim Laden der Favoriten.</p>';
    }
}

// Favoriten-Button Status beim Laden der Rezeptseite setzen
async function initializeFavoriteButton(recipeId) {
    const user = auth.currentUser;
    if (!user) return;

    const isFav = await isFavorite(recipeId);
    updateFavoriteButton(recipeId, isFav);
}

// Toggle Favoriten-Funktion (für onclick in Rezeptseiten)
async function toggleFavorite(recipeId, recipeName) {
    console.log('Toggle Favorite für:', recipeId);
    const user = auth.currentUser;

    if (!user) {
        alert('Bitte melde dich an, um Rezepte zu speichern.');
        const loginPath = window.location.pathname.includes('/rezepte/') ? '../login.html' : 'login.html';
        window.location.href = loginPath;
        return;
    }

    try {
        const isFav = await isFavorite(recipeId);
        console.log('Ist Favorit:', isFav);
        if (isFav) {
            await removeFromFavorites(recipeId);
        } else {
            await addToFavorites(recipeId, recipeName);
        }
    } catch (error) {
        console.error('Fehler beim Umschalten der Favoriten:', error);
        alert('Fehler beim Umschalten der Favoriten.');
    }
}
