document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("lista-doacoes");

    for (let i = 1; i <= 15; i++) {
        const autor = i <= 10 ? "Miagui" : "Flexform";

        container.innerHTML += `
            <div class="card-doacao">
                <div class="texto-doado">DOADO</div>
                <div class="circulo-doacao">
                    <img src="assets/midia/Caminho 150.svg" class="icone-computador" alt="Computador">
                    <span class="numero-doacao">${i < 10 ? "0" + i : i}</span>
                </div>
                <div class="texto-autor">por <span class="negrito">${autor}</span></div>
            </div>
        `;
    }
});

function generateDonationButtons() {
    const wrapperElement = document.getElementById('donationContainer');
    const buttonLabels = ['+', '1', '3', '4', '5'];

    buttonLabels.forEach(labelText => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'donationItem';

        const circleElement = document.createElement('div');
        circleElement.className = 'roundButton';
        circleElement.textContent = labelText;

        const textElement = document.createElement('div');
        textElement.className = 'donationLabel';
        textElement.textContent = 'DOE AGORA';

        itemDiv.appendChild(textElement);
        itemDiv.appendChild(circleElement);

        wrapperElement.appendChild(itemDiv);
    });
}

window.onload = generateDonationButtons;

const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 30; i++) {
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';

    const gridText = document.createElement('span');
    gridText.className = 'grid-text';
    gridText.innerText = 'DOE AGORA';

    const gridCircle = document.createElement('div');
    gridCircle.className = 'grid-circle';

    const gridIcon = document.createElement('img');
    gridIcon.src = 'assets/midia/Grupo 322.svg';
    gridIcon.alt = 'Microwave icon';
    gridIcon.className = 'grid-icon';

    gridCircle.appendChild(gridIcon);
    gridItem.appendChild(gridText);
    gridItem.appendChild(gridCircle);
    gridContainer.appendChild(gridItem);
}

const wrapperBox = document.getElementById('box-wrapper');

for (let i = 0; i < 10; i++) {
    const boxItem = document.createElement('div');
    boxItem.className = 'grid-box';

    const boxLabel = document.createElement('span');
    boxLabel.className = 'box-text';
    boxLabel.innerText = 'AJUDE AGORA';

    const boxShape = document.createElement('div');
    boxShape.className = 'box-circle';

    const boxImage = document.createElement('img');
    boxImage.src = 'assets/midia/Grupo 322.svg';
    boxImage.alt = 'Ícone de ajuda';
    boxImage.className = 'box-icon';

    boxShape.appendChild(boxImage);
    boxItem.appendChild(boxLabel);
    boxItem.appendChild(boxShape);
    wrapperBox.appendChild(boxItem);
}
