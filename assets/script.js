function spin() {
    const spinner = document.getElementById('spinner');
    // const options = spinner.getElementsByClassName('option');
    const randomAngle = Math.floor(Math.random() * 1800);
    
    spinner.style.transition = 'transform 3s ease-out';
    spinner.style.transform = `rotate(${randomAngle}deg)`;
    console.log(`rotate(${randomAngle}deg)`);
}


