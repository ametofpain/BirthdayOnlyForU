document.getElementById('surpriseBtn').addEventListener('click', function() {
    const area = document.getElementById('animationArea');
    area.innerHTML = '';
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 90 + '%';
        confetti.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
        confetti.style.top = '-20px';
        confetti.style.animationDelay = (Math.random() * 0.5) + 's';
        area.appendChild(confetti);
    }
    setTimeout(() => area.innerHTML = '', 2500);
});
