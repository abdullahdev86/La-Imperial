// FAQ Dropdown Functionality
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        button.querySelector('.dropdown-icon').textContent = answer.style.display === 'block' ? '&#9650;' : '&#9660;';
    });
});

// Form Submission
document.getElementById('question-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your question! We will get back to you soon.');
    e.target.reset();
});