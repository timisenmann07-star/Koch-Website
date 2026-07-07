// Authentication Management

// Benutzer-Status überwachen
auth.onAuthStateChanged((user) => {
    updateUIForUser(user);
});

function updateUIForUser(user) {
    const authLinks = document.querySelectorAll('.auth-links');
    const prefix = window.location.pathname.includes('/rezepte/') ? '../' : '';

    authLinks.forEach(container => {
        if (user) {
            container.innerHTML = `
                <button class="profile-btn" onclick="toggleProfileMenu()">👤 Profil</button>
                <div class="profile-menu" id="profileMenu">
                    <span class="profile-email">${user.email}</span>
                    <a href="${prefix}meine-favoriten.html">Meine Favoriten</a>
                    <a href="#" onclick="logout()">Logout</a>
                </div>
            `;
        } else {
            container.innerHTML = `
                <a href="${prefix}login.html">Login / Registrieren</a>
            `;
        }
    });
}

function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Menü schließen wenn außerhalb geklickt wird
document.addEventListener('click', (e) => {
    if (!e.target.closest('.auth-links')) {
        const menu = document.getElementById('profileMenu');
        if (menu) {
            menu.classList.remove('active');
        }
    }
});

// Registrierung
async function register(email, password) {
    console.log('Registriere Benutzer:', email);
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        alert('Registrierung erfolgreich!');
        window.location.href = 'index.html';
        return userCredential.user;
    } catch (error) {
        let errorMessage = 'Registrierung fehlgeschlagen.';
        if (error.code === 'auth/email-already-in-use') {
            errorMessage = 'Diese E-Mail-Adresse wird bereits verwendet.';
        } else if (error.code === 'auth/weak-password') {
            errorMessage = 'Das Passwort muss mindestens 6 Zeichen lang sein.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Ungültige E-Mail-Adresse.';
        }
        alert(errorMessage);
        throw error;
    }
}

// Login
async function login(email, password) {
    try {
        const userCredential = await auth.signInWithEmailAndPassword(email, password);
        alert('Login erfolgreich!');
        window.location.href = 'index.html';
        return userCredential.user;
    } catch (error) {
        let errorMessage = 'Login fehlgeschlagen.';
        if (error.code === 'auth/user-not-found') {
            errorMessage = 'Kein Benutzer mit dieser E-Mail gefunden.';
        } else if (error.code === 'auth/wrong-password') {
            errorMessage = 'Falsches Passwort.';
        } else if (error.code === 'auth/invalid-email') {
            errorMessage = 'Ungültige E-Mail-Adresse.';
        }
        alert(errorMessage);
        throw error;
    }
}

// Logout
function logout() {
    auth.signOut().then(() => {
        alert('Logout erfolgreich!');
        const indexPath = window.location.pathname.includes('/rezepte/') ? '../index.html' : 'index.html';
        window.location.href = indexPath;
    }).catch((error) => {
        alert('Logout fehlgeschlagen.');
        console.error(error);
    });
}

// Prüfen ob Benutzer eingeloggt ist
function requireAuth() {
    auth.onAuthStateChanged((user) => {
        if (!user) {
            alert('Bitte melde dich an, um diese Seite zu sehen.');
            const loginPath = window.location.pathname.includes('/rezepte/') ? '../login.html' : 'login.html';
            window.location.href = loginPath;
        }
    });
}
