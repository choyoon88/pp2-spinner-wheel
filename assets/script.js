function spin() {
    const spinner = document.getElementById('spinner');
    const randomAngle = Math.floor(Math.random() * 3600 + 360);

    spinner.style.transition = 'transform 3s ease-out';
    spinner.style.transform = `rotate(${randomAngle}deg)`;
    console.log(`rotate(${randomAngle}deg)`) // To be removed before deploying. This is only for dev check

    function selectAnswer() {
        let decimalOfRandomAngle = (randomAngle / 360) % 1;
        if (decimalOfRandomAngle > 0.92 || decimalOfRandomAngle <= 0.09) {
            console.log(decimalOfRandomAngle + ' yellow'); // To be removed before deploying. This is only for dev check
            let yellowUserInput = document.getElementById('yellow-text');
            let displayYellowText = document.getElementById('first-select');
            setTimeout(function () {
                displayYellowText.innerText += yellowUserInput.value + ' ';
            }, 3500);
        } else {
            if (decimalOfRandomAngle > 0.09 && decimalOfRandomAngle <= 0.25) {
                console.log(decimalOfRandomAngle + ' green'); // To be removed before deploying. This is only for dev check
                let greenUserInput = document.getElementById('green-text');
                let displayGreenText = document.getElementById('first-select');
                setTimeout(function () {
                    displayGreenText.innerText += greenUserInput.value + ' ';
                }, 3500);
            } else {
                if (decimalOfRandomAngle > 0.25 && decimalOfRandomAngle <= 0.41) {
                    console.log(decimalOfRandomAngle + ' blue'); // To be removed before deploying. This is only for dev check
                    let blueUserInput = document.getElementById('blue-text');
                    let displayBlueText = document.getElementById('first-select');
                    setTimeout(function () {
                        displayBlueText.innerText += blueUserInput.value + ' ';
                    }, 3500);
                } else {
                    if (decimalOfRandomAngle > 0.41 && decimalOfRandomAngle <= 0.57) {
                        console.log(decimalOfRandomAngle + ' red'); // To be removed before deploying. This is only for dev check
                        let redUserInput = document.getElementById('red-text');
                        let displayRedText = document.getElementById('first-select');
                        setTimeout(function () {
                            displayRedText.innerText += redUserInput.value + ' ';
                        }, 3500);
                    } else {
                        if (decimalOfRandomAngle > 0.57 && decimalOfRandomAngle <= 0.73) {
                            console.log(decimalOfRandomAngle + ' purple'); // To be removed before deploying. This is only for dev check
                            let purpleUserInput = document.getElementById('purple-text');
                            let displayPurpleText = document.getElementById('first-select');
                            setTimeout(function () {
                                displayPurpleText.innerText += purpleUserInput.value + ' ';
                            }, 3500);
                        } else {
                            if (decimalOfRandomAngle > 0.73 && decimalOfRandomAngle <= 0.91) {
                                console.log(decimalOfRandomAngle + ' orange'); // To be removed before deploying. This is only for dev check
                                let orangeUserInput = document.getElementById('orange-text');
                                let displayOrangeText = document.getElementById('first-select');
                                setTimeout(function () {
                                    displayOrangeText.innerText += orangeUserInput.value + ' ';
                                }, 3500);
                            };
                        };
                    };
                };
            }; 
        } ;

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