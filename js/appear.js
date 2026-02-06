/*
Fichier Js qui applique une animation au scrool

*/
// const targets = document.querySelectorAll('.title, .paragraph, .articles, li');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
            } else {
                entry.target.classList.remove("appear");
            }
        });
    },
    {
        root: null, // Le viewport (null signifie que l'on surveille l'intersection avec le viewport)
        rootMargin: "0px", // La marge autour du root
        threshold: 0.1, // L'élément doit être visible à 50% pour être considéré comme intersecté
    }
);

targets.forEach((element) => {
  observer.observe(element);
})