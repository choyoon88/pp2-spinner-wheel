// reset functions

function resetStatement() {
    const spans = document.querySelectorAll('#first-select, #second-select, #third-select');
    spans.forEach(span => {
        span.textContent = '';
    });
    spinClickCount = 0;
    spinCounter();
    document.getElementById('spinner').style.transform = 'none';
    document.getElementById('spinner').style.transition = 'none';
}

const colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];

function resetColorText(color) {
    document.getElementById(`${color}-text`).value = '';
}

colors.forEach(color => {
    document.getElementById(`${color}-text`).addEventListener('click', () => resetColorText(color));
});


// spin functions

let spinClickCount = 0;

document.getElementById('spin-btn').addEventListener('click', spin);

function spin() {

    // Before spinning, check whether there's an empty input area for cone texts.
    const hasEmptyTextInput = colors.some(color => {
        const textInput = document.getElementById(`${color}-text`).value;
        return textInput.trim() === '';
    });

    if (hasEmptyTextInput) {
        alert('Please type your options for all cones.');
        return;
    }
    

    // if hasEmptyTextInput is false, move on to the spinning function
    const spinner = document.getElementById('spinner');
    const randomAngle = Math.floor(Math.random() * 3600 + 360);
    spinClickCount++;
    spinCounter();

    spinner.style.transition = 'transform 3s ease-out';
    spinner.style.transform = `rotate(${randomAngle}deg)`;

    let decimalOfRandomAngle = ((randomAngle / 360) % 1).toFixed(2);
    decimalOfRandomAngle = parseFloat(decimalOfRandomAngle);

    switch (spinClickCount) {
        case 1:
            function selectFirstAnswer() {
                if (decimalOfRandomAngle > 0.92 || decimalOfRandomAngle < 0.09) {
                    let yellowUserInput = document.getElementById('yellow-text');
                    let displayYellowText = document.getElementById('first-select');
                    setTimeout(function () {
                        displayYellowText.innerText += yellowUserInput.value + ' ';
                    }, 3500);
                } else {
                    if (decimalOfRandomAngle >= 0.09 && decimalOfRandomAngle <= 0.25) {
                        let greenUserInput = document.getElementById('green-text');
                        let displayGreenText = document.getElementById('first-select');
                        setTimeout(function () {
                            displayGreenText.innerText += greenUserInput.value + ' ';
                        }, 3500);
                    } else {
                        if (decimalOfRandomAngle > 0.25 && decimalOfRandomAngle <= 0.41) {
                            let blueUserInput = document.getElementById('blue-text');
                            let displayBlueText = document.getElementById('first-select');
                            setTimeout(function () {
                                displayBlueText.innerText += blueUserInput.value + ' ';
                            }, 3500);
                        } else {
                            if (decimalOfRandomAngle > 0.41 && decimalOfRandomAngle <= 0.60) {
                                let redUserInput = document.getElementById('red-text');
                                let displayRedText = document.getElementById('first-select');
                                setTimeout(function () {
                                    displayRedText.innerText += redUserInput.value + ' ';
                                }, 3500);
                            } else {
                                if (decimalOfRandomAngle > 0.60 && decimalOfRandomAngle <= 0.74) {
                                    let purpleUserInput = document.getElementById('purple-text');
                                    let displayPurpleText = document.getElementById('first-select');
                                    setTimeout(function () {
                                        displayPurpleText.innerText += purpleUserInput.value + ' ';
                                    }, 3500);
                                } else {
                                    if (decimalOfRandomAngle > 0.74 && decimalOfRandomAngle <= 0.92) {
                                        let orangeUserInput = document.getElementById('orange-text');
                                        let displayOrangeText = document.getElementById('first-select');
                                        setTimeout(function () {
                                            displayOrangeText.innerText += orangeUserInput.value + ' ';
                                        }, 3500);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            setTimeout(selectFirstAnswer, 1000);
            break;

        case 2:
            function selectSecondAnswer() {
                if (decimalOfRandomAngle > 0.92 || decimalOfRandomAngle < 0.09) {
                    let yellowUserInput = document.getElementById('yellow-text');
                    let displayYellowText = document.getElementById('second-select');
                    setTimeout(function () {
                        displayYellowText.innerText += yellowUserInput.value + ' ';
                    }, 3500);
                } else {
                    if (decimalOfRandomAngle >= 0.09 && decimalOfRandomAngle <= 0.25) {
                        let greenUserInput = document.getElementById('green-text');
                        let displayGreenText = document.getElementById('second-select');
                        setTimeout(function () {
                            displayGreenText.innerText += greenUserInput.value + ' ';
                        }, 3500);
                    } else {
                        if (decimalOfRandomAngle > 0.25 && decimalOfRandomAngle <= 0.41) {
                            let blueUserInput = document.getElementById('blue-text');
                            let displayBlueText = document.getElementById('second-select');
                            setTimeout(function () {
                                displayBlueText.innerText += blueUserInput.value + ' ';
                            }, 3500);
                        } else {
                            if (decimalOfRandomAngle > 0.41 && decimalOfRandomAngle <= 0.60) {
                                let redUserInput = document.getElementById('red-text');
                                let displayRedText = document.getElementById('second-select');
                                setTimeout(function () {
                                    displayRedText.innerText += redUserInput.value + ' ';
                                }, 3500);
                            } else {
                                if (decimalOfRandomAngle > 0.60 && decimalOfRandomAngle <= 0.74) {
                                    let purpleUserInput = document.getElementById('purple-text');
                                    let displayPurpleText = document.getElementById('second-select');
                                    setTimeout(function () {
                                        displayPurpleText.innerText += purpleUserInput.value + ' ';
                                    }, 3500);
                                } else {
                                    if (decimalOfRandomAngle > 0.74 && decimalOfRandomAngle <= 0.92) {
                                        let orangeUserInput = document.getElementById('orange-text');
                                        let displayOrangeText = document.getElementById('second-select');
                                        setTimeout(function () {
                                            displayOrangeText.innerText += orangeUserInput.value + ' ';
                                        }, 3500);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            setTimeout(selectSecondAnswer, 1000);
            break;

        case 3:
            function selectThirdAnswer() {
                if (decimalOfRandomAngle > 0.92 || decimalOfRandomAngle < 0.09) {
                    let yellowUserInput = document.getElementById('yellow-text');
                    let displayYellowText = document.getElementById('third-select');
                    setTimeout(function () {
                        displayYellowText.innerText += yellowUserInput.value + ' ';
                    }, 3500);
                } else {
                    if (decimalOfRandomAngle >= 0.09 && decimalOfRandomAngle <= 0.25) {
                        let greenUserInput = document.getElementById('green-text');
                        let displayGreenText = document.getElementById('third-select');
                        setTimeout(function () {
                            displayGreenText.innerText += greenUserInput.value + ' ';
                        }, 3500);
                    } else {
                        if (decimalOfRandomAngle > 0.25 && decimalOfRandomAngle <= 0.41) {
                            let blueUserInput = document.getElementById('blue-text');
                            let displayBlueText = document.getElementById('third-select');
                            setTimeout(function () {
                                displayBlueText.innerText += blueUserInput.value + ' ';
                            }, 3500);
                        } else {
                            if (decimalOfRandomAngle > 0.41 && decimalOfRandomAngle <= 0.60) {
                                let redUserInput = document.getElementById('red-text');
                                let displayRedText = document.getElementById('third-select');
                                setTimeout(function () {
                                    displayRedText.innerText += redUserInput.value + ' ';
                                }, 3500);
                            } else {
                                if (decimalOfRandomAngle > 0.60 && decimalOfRandomAngle <= 0.74) {
                                    let purpleUserInput = document.getElementById('purple-text');
                                    let displayPurpleText = document.getElementById('third-select');
                                    setTimeout(function () {
                                        displayPurpleText.innerText += purpleUserInput.value + ' ';
                                    }, 3500);
                                } else {
                                    if (decimalOfRandomAngle > 0.74 && decimalOfRandomAngle <= 0.92) {
                                        let orangeUserInput = document.getElementById('orange-text');
                                        let displayOrangeText = document.getElementById('third-select');
                                        setTimeout(function () {
                                            displayOrangeText.innerText += orangeUserInput.value + ' ';
                                        }, 3500);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            selectThirdAnswer();
            setTimeout(() => {
                let finishedStatement = document.querySelectorAll('#first-select, #second-select, #third-select')[0].innerText +
                    document.querySelectorAll('#first-select, #second-select, #third-select')[1].innerText +
                    document.querySelectorAll('#first-select, #second-select, #third-select')[2].innerText;

                function alertMessageAndResetSpin() {
                    alert(`Here you go! 
"I will ${finishedStatement}"`);
                    resetStatement();
                    spinClickCount = 0;
                    spinCounter();
                }
                alertMessageAndResetSpin();
            }, 4000);

            break;

        default:
            spinClickCount = 1;
            selectFirstAnswer();
            break;
    }
}


// text input on cones functions

const textInputs = document.querySelectorAll('#text-input input');

textInputs.forEach((input, index) => {
    input.oninput = function () {
        updateConeText(index, input.value);
    };
});

function updateConeText(index, value) {
    // Get reference to the specific option and its text element
    const spinner = document.getElementById('spinner');
    const option = spinner.querySelectorAll('.option')[index];
    const textElement = option.querySelector('.text');

    // Update the text content of the corresponding cone
    if (textElement) {
        textElement.textContent = value;
    }
}


// function for showing spin counts to the user

function spinCounter() {
    const spinCounterDisplay = document.getElementById('spin-counter');
    spinCounterDisplay.textContent = spinClickCount;
}