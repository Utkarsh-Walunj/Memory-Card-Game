const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let shuffledLetters = letters.concat(letters).sort(() => 0.5 - Math.random());
        let flippedCards = [];
        let matchedPairs = 0;

        const grid = document.getElementById('grid');

        function createCard(letter) {
            const card = document.createElement('div');
            card.classList.add('card');
            card.textContent = letter;
            card.addEventListener('click', () => flipCard(card, letter));
            return card;
        }

        function flipCard(card, letter) {
            if (flippedCards.length < 2 && !flippedCards.includes(card)) {
                card.textContent = letter;
                card.style.backgroundColor = 'white';
                flippedCards.push(card);

                if (flippedCards.length === 2) {
                    setTimeout(checkMatch, 1000);
                }
            }
        }

        function checkMatch() {
            const [card1, card2] = flippedCards;
            if (card1.textContent === card2.textContent) {
                card1.removeEventListener('click', () => flipCard(card1));
                card2.removeEventListener('click', () => flipCard(card2));
                flippedCards = [];
                matchedPairs++;

                if (matchedPairs === letters.length) {
                    alert('Congratulations! You matched all pairs.');
                }
            } else {
                card1.textContent = card2.textContent = '';
                card1.style.backgroundColor = card2.style.backgroundColor = 'lightblue';
                flippedCards = [];
            }
        }

        shuffledLetters.forEach(letter => {
            const card = createCard(letter);
            grid.appendChild(card);
        });