function animateSkillLevels() {
    const skillLevels = document.querySelectorAll('.level');

    skillLevels.forEach((level) => {
        const skillValue = level.getAttribute('data-level');
        level.style.width = '0%'; // Start from 0%

        // Create a smooth animation to the target skillValue
        setTimeout(() => {
            level.style.width = skillValue + '%'; 
            level.textContent = skillValue + '%'; 
        }, 100); // Adjust delay if needed
    });
}

window.onload = animateSkillLevels;