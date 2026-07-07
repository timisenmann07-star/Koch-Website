// SVG Icons Library

const svgIcons = {
    // Cooking/Food Icons
    cooking: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 4v16h10V4M9 9h6M9 13h6M5 20h14"></path></svg>`,
    
    // Time/Clock Icon
    time: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    
    // Servings/People Icon
    servings: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></svg>`,
    
    // Heart/Favorite Icon (filled)
    heart: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    
    // Heart Outline/Empty Heart Icon
    heartEmpty: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`,
    
    // Close/Delete Icon
    close: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>`,
    
    // Email Icon
    email: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>`,
    
    // Document/List Icon
    document: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="13" x2="8" y2="13"></line><line x1="12" y1="17" x2="8" y2="17"></line></svg>`,
    
    // Phone Icon
    phone: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>`,
    
    // Location/Map Icon
    location: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    
    // Clock/Hours Icon
    hours: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    
    // Chef/Cook Icon
    chef: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 9.5c-1.93 0-3.5-1.57-3.5-3.5S8.07 4.5 10 4.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></svg>`,
    
    // Tacos Icon
    tacos: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7c0-1 2-3 9-3s9 2 9 3"></path><path d="M3 7l1 10c0 1 1 2 2 2h12c1 0 2-1 2-2l1-10"></path><line x1="8" y1="12" x2="8" y2="15"></line><line x1="12" y1="12" x2="12" y2="15"></line><line x1="16" y1="12" x2="16" y2="15"></line></svg>`,
    
    // Burger Icon
    burger: `<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 10h18"></path><path d="M5 8c0-1 1-2 2-2h10c1 0 2 1 2 2"></path><path d="M5 10v4c0 1 1 2 2 2h10c1 0 2-1 2-2v-4"></path><line x1="7" y1="14" x2="7" y2="16"></line><line x1="12" y1="14" x2="12" y2="16"></line><line x1="17" y1="14" x2="17" y2="16"></line></svg>`,
    
    // Fire/Heat Icon
    fire: `<svg class="icon" viewBox="0 0 24 24" fill="currentColor"><path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9c1 1 2.6 1.6 4.1 1.6 1.5 0 3.1-.6 4.1-1.6.9-1 1.5-2.4 1.5-4v-5.5h-3V7c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2.5H8.5v5.5c0 1.6.6 3 1.5 4z"></path></svg>`,
};

// Function to get SVG icon as HTML
function getSvgIcon(iconName) {
    return svgIcons[iconName] || '';
}

// Function to replace text with SVG icon
function replaceCookingIcon(text) {
    return svgIcons.cooking + text;
}

function replaceTimeIcon(text) {
    return svgIcons.time + text;
}

function replaceServingsIcon(text) {
    return svgIcons.servings + text;
}

function replaceHeartIcon(text) {
    return svgIcons.heart + text;
}

function replaceHeartEmptyIcon(text) {
    return svgIcons.heartEmpty + text;
}

function replaceCloseIcon(text) {
    return svgIcons.close + text;
}

function replaceEmailIcon(text) {
    return svgIcons.email + text;
}

function replaceDocumentIcon(text) {
    return svgIcons.document + text;
}

function replacePhoneIcon(text) {
    return svgIcons.phone + text;
}

function replaceLocationIcon(text) {
    return svgIcons.location + text;
}

function replaceHoursIcon(text) {
    return svgIcons.hours + text;
}

function replaceChefIcon(text) {
    return svgIcons.chef + text;
}

function replaceTacosIcon(text) {
    return svgIcons.tacos + text;
}

function replaceBurgerIcon(text) {
    return svgIcons.burger + text;
}

function replaceFireIcon(text) {
    return svgIcons.fire + text;
}
