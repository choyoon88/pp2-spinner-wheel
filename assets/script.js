function spin() {
    const spinner = document.getElementById('spinner');

    const minValue = 1080;
    const maxValue = 9999;
    const randomAngle = Math.floor(Math.random() * (maxValue - minValue) + minValue);

    spinner.style.transition = 'transform 3s ease-out';
    spinner.style.transform = `rotate(${randomAngle}deg)`;
    console.log(`rotate(${randomAngle}deg)`)
}

function resetSpinner() {
    const spinner = document.getElementById('spinner');
    spinner.style.transform = 'rotate(0deg)'; 
}

const textInputs = document.querySelectorAll('#text-input input');

textInputs.forEach((input, index) => {
    input.oninput = function () {
        updateConeText(index, input.value);
    };
});

function updateConeText(index, value) {
    // Get reference to the specific option and its text element
    const option = spinner.querySelectorAll('.option')[index];
    const textElement = option.querySelector('.text h5');

    // Update the text content of the corresponding cone
    if (textElement) {
        textElement.textContent = value;
    } else {
        option.querySelector('.text').textContent = value;
    }
}