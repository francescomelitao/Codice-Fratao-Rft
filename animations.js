document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll("h1, h2");
    headers.forEach(h => {
        h.style.opacity = 0;
        setTimeout(() => {
            h.style.transition = "opacity 1.5s";
            h.style.opacity = 1;
        }, 200);
    });
});