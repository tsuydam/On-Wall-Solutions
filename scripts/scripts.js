// Get modal elements
const modal = document.getElementById('quoteModal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

// Open modal when "Get a Quote" button is clicked
openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'block';
});

// Close modal when the close button is clicked
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});