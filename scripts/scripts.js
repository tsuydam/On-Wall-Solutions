// "Get a Quote" Modal Logic
const quoteModal = document.getElementById('quoteModal');
const openQuoteModal = document.getElementById('openModal');
const closeQuoteModal = document.getElementById('closeModal');

// Open "Get a Quote" modal
openQuoteModal.addEventListener('click', (e) => {
    e.preventDefault();
    quoteModal.style.display = 'block';
});

// Close "Get a Quote" modal
closeQuoteModal.addEventListener('click', () => {
    quoteModal.style.display = 'none';
});

// Close "Get a Quote" modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === quoteModal) {
        quoteModal.style.display = 'none';
    }
});

// Image Modal Logic
document.addEventListener("DOMContentLoaded", () => {
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const closeImageModal = imageModal.querySelector(".close"); // Use the close button inside the image modal

    // Add click event to all images in the gallery
    document.querySelectorAll("#gallery img").forEach((img) => {
        img.addEventListener("click", () => {
            imageModal.style.display = "flex"; // Show the modal
            modalImage.src = img.src; // Set the modal image source
        });
    });

    // Close the image modal when the close button is clicked
    closeImageModal.addEventListener("click", () => {
        imageModal.style.display = "none"; // Hide the modal
    });

    // Close the image modal when clicking outside the image
    imageModal.addEventListener("click", (e) => {
        if (e.target === imageModal) {
            imageModal.style.display = "none"; // Hide the modal
        }
    });
});