function spin() {
    const spinner = document.getElementById('spinner');
    const randomAngle = Math.floor(Math.random() * 3600 + 360);

    spinner.style.transition = 'transform 3s ease-out';
    spinner.style.transform = `rotate(${randomAngle}deg)`;
    console.log(`rotate(${randomAngle}deg)`) // To be removed before deploying. This is only for dev check

    function selectAnswer() {
        let decimalOfRandomAngle = (randomAngle / 360) % 1;
        if (decimalOfRandomAngle > 0.92 || decimalOfRandomAngle <= 0.09) {
            console.log(decimalOfRandomAngle); // To be removed before deploying. This is only for dev check
            let yellowUserInput = document.getElementById('yellow-text');
            let displayYellowText = document.getElementById('first-select');
            displayYellowText.innerText += yellowUserInput.value;

        };
    
    };
    setTimeout(selectAnswer, 1000);
};

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
    };
};

