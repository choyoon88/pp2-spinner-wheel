function spin() {
    const spinner = document.getElementById('spinner');
    const randomAngle = Math.floor(Math.random() * 3600 + 360);

    spinner.style.transition = 'transform 3s ease-out';
    spinner.style.transform = `rotate(${randomAngle}deg)`;
    console.log(`rotate(${randomAngle}deg)`) // To be removed before deploying. This is only for dev check

    function selectAnswer() {    
        if (randomAngle % 360 <= 0 && randomAngle % 360 >= 16) {
            document.getElementById('statement').append(document.getElementById('yellow-text'));            
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

