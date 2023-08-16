// Obtener el idioma del navegador
const userLanguage = navigator.language || navigator.userLanguage;

// Redirigir según el idioma
if (userLanguage.startsWith("es")) {
    window.location.href = "index_es.html"; // Redirigir a la página en español
} else {
    window.location.href = "index.html"; // Redirigir a la página en inglés (por defecto)
}