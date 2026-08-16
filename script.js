document.addEventListener('DOMContentLoaded', () => {
    const filterChips = document.querySelectorAll('.chip-filter, .chip-filter-active');
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {

            if (chip.classList.contains('chip-filter-active')) {
                chip.classList.remove('chip-filter-active');
                chip.classList.add('chip-filter');
            } else {
                chip.classList.remove('chip-filter');
                chip.classList.add('chip-filter-active');
            }
        });
    });

    const appointmentForm = document.getElementById('appointmentForm');
    if (appointmentForm) {
        appointmentForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            let isValid = true;
            
            const nameInput = document.getElementById('patientName');
            const nameError = document.getElementById('nameError');
            if (nameInput.value.trim() === '') {
                nameInput.classList.add('error');
                nameError.textContent = 'Patient name is required.';
                isValid = false;
            } else {
                nameInput.classList.remove('error');
                nameError.textContent = '';
            }

            const emailInput = document.getElementById('patientEmail');
            const emailError = document.getElementById('emailError');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.classList.add('error');
                emailError.textContent = 'Please enter a valid email address.';
                isValid = false;
            } else {
                emailInput.classList.remove('error');
                emailError.textContent = '';
            }
            
            const termsCheckbox = document.getElementById('termsCheckbox');
            if (!termsCheckbox.checked) {
                alert("You must agree to the privacy policy.");
                isValid = false;
            }

            if (isValid) {
                alert('Appointment request submitted successfully!');
                appointmentForm.reset();
            }
        });
    }
});
