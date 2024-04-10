const menuItems = document.querySelectorAll('.menu-item');
const confettiElement = document.getElementById('confetti');
const loupesElement = document.getElementById('loupes');

menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = getRandomColor();
    });

    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#fff';
    });

    item.addEventListener('click', () => {
        const theme = item.dataset.theme;
        applyTheme(theme);
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function applyTheme(theme) {
    switch (theme) {
        case 'claro':
            document.body.style.backgroundColor = '#fff';
            confettiElement.style.display = 'block';
            setTimeout(() => {
                confettiElement.style.display = 'none';
            }, 3000);
            break;
        case 'oscuro':
            document.body.style.backgroundColor = '#222';
            confettiElement.style.display = 'block';
            setTimeout(() => {
                confettiElement.style.display = 'none';
            }, 3000);
            break;
        case 'zoom':
            document.body.style.transform = 'scale(1.2)';
            loupesElement.style.display = 'block';
            setTimeout(() => {
                document.body.style.transform = 'scale(1)';
                loupesElement.style.display = 'none';
            }, 5000);
            break;
        // Agrega más casos según los temas que quieras agregar
    }
}
