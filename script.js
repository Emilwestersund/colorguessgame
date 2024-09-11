document.addEventListener("DOMContentLoaded", function() {
    const squares = document.querySelectorAll(".square");
    const newColorsBtn = document.getElementById("newcolors");
    const easyBtn = document.getElementById("easybtn");
    const hardBtn = document.getElementById("hardbtn");
    const rgbDisplay = document.getElementById("rgbDisplay"); 
    
    let numSquares = 6;
    let colors = [];
    let pickedColor;

    function init() {
        setupButtons();
        setupSquares();
        reset();
    }

    function setupButtons() {
        newColorsBtn.addEventListener("click", reset);
        easyBtn.addEventListener("click", function() {
            numSquares = 3;
            reset();
        });
        hardBtn.addEventListener("click", function() {
            numSquares = 6;
            reset();
        });
    }

    function setupSquares() {
        squares.forEach((square) => {
            square.addEventListener("click", function() {
                const clickedColor = this.style.backgroundColor;
                if (clickedColor === pickedColor) {
                    alert("You win!");
                    reset();
                } else {
                    this.style.backgroundColor = "#232323";
                }
            });
        });
    }

    function reset() {
        colors = generateRandomColors(numSquares);
        pickedColor = pickColor();
        rgbDisplay.textContent = pickedColor; 
        squares.forEach((square, index) => {
            if (colors[index]) {
                square.style.display = "block";
                square.style.backgroundColor = colors[index];
            } else {
                square.style.display = "none";
            }
        });
    }

    function generateRandomColors(num) {
        const arr = [];
        for (let i = 0; i < num; i++) {
            arr.push(randomColor());
        }
        return arr;
    }

    function pickColor() {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    function randomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    init();
});
