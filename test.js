const radioButtons = document.querySelectorAll('input[type="radio"]');

radioButtons.forEach((radio) => {
    radio.addEventListener('change', () => {
        const id = radio.getAttribute('id');
        const radioButton = document.getElementById(`size-${id}`);

        if (radio.checked) {
            radioButton.style.backgroundColor = '#007bff';
            radioButton.style.borderColor = '#007bff';
        } else {
            radioButton.style.backgroundColor = '#0d09f0';
            radioButton.style.borderColor = '#3513f3';
        }
    });
});