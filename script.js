document.getElementById('openBtn').addEventListener('click', function() {
    // Show the content after clicking the button
    document.getElementById('content').classList.remove('hidden');

    // Hide the button
    document.getElementById('openBtn').style.display = 'none';

    // Trigger confetti effect
    triggerConfetti();
});

function triggerConfetti() {
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A8', '#FFB533'];
    const numberOfConfetti = 150;
    const confettiContainer = document.createElement('div');
    confettiContainer.style.position = 'absolute';
    confettiContainer.style.top = '0';
    confettiContainer.style.left = '0';
    confettiContainer.style.width = '100%';
    confettiContainer.style.height = '100%';
    document.body.appendChild(confettiContainer);

    for (let i = 0; i < numberOfConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.width = '10px';
        confettiPiece.style.height = '10px';
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.animation = `confettiAnimation ${Math.random() * 3 + 2}s infinite`;
        confettiContainer.appendChild(confettiPiece);
    }

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes confettiAnimation {
            0% {
                transform: translateY(0) rotate(0deg);
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
}
