function openModal(image) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = image.src;
    caption.innerHTML = image.alt;
}

function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}
const modal = document.getElementById("imageModal");

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        closeModal(); // Cierra el modal si haces clic fuera de la imagen
    }
});
