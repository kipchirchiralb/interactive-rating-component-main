
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const ratingButtons = document.querySelectorAll('.rating-btn');
const submitButton = document.getElementById('submit-btn');
const ratingValue = document.getElementById('rating-value');
let selectedRating = 0;

ratingButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        ratingButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Store the selected rating
        selectedRating = button.dataset.rating;
    });
});

submitButton.addEventListener('click', () => {
    if (selectedRating === 0) {
        alert('Please select a rating before submitting');
        return;
    }
    // Update the rating value in the thank you state
    ratingValue.textContent = selectedRating;
    // Hide rating state and show thank you state
    ratingState.classList.add('hidden');
    thankYouState.classList.remove('hidden');
});
