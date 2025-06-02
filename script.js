document.getElementById('surpriseBtn').addEventListener('click', function() {
    const area = document.getElementById('animationArea');
    area.innerHTML = '';
    // Confetti
    for (let i = 0; i < 60; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 90 + '%';
        confetti.style.background = `hsl(${Math.random()*360}, 90%, 60%)`;
        confetti.style.top = '-20px';
        confetti.style.animationDelay = (Math.random() * 0.7) + 's';
        area.appendChild(confetti);
    }
    // Firework text
    const msg = document.createElement('div');
    msg.textContent = 'You are awesome!';
    msg.style.position = 'absolute';
    msg.style.left = '50%';
    msg.style.top = '50%';
    msg.style.transform = 'translate(-50%, -50%) scale(0.7)';
    msg.style.fontSize = '2rem';
    msg.style.fontWeight = 'bold';
    msg.style.color = '#ffb347';
    msg.style.textShadow = '0 2px 16px #ffb34788, 0 2px 8px #000a';
    msg.style.opacity = '0';
    msg.style.transition = 'all 0.7s cubic-bezier(.5,1.8,.5,1)';
    area.appendChild(msg);
    setTimeout(() => {
        msg.style.opacity = '1';
        msg.style.transform = 'translate(-50%, -50%) scale(1)';
    }, 900);
    setTimeout(() => {
        area.innerHTML = '';
    }, 3200);
});
