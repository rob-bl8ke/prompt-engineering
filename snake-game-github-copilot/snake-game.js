// Snake Game Implementation

// Constants and game variables
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = 600;
canvas.height = 600;
const gridSize = 20;
const tileCount = 30;
let snake = [{ x: 10, y: 10 }];
let direction = { x: 1, y: 0 };
let food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
let score = 0;
let highScore = 0;
let speed = 150;
let gameInterval;
let gameOver = false;

// Input Handling
document.addEventListener("keydown", (e) => {
    if ((e.key === "ArrowUp" || e.key === "w") && direction.y === 0) direction = { x: 0, y: -1 };
    if ((e.key === "ArrowDown" || e.key === "s") && direction.y === 0) direction = { x: 0, y: 1 };
    if ((e.key === "ArrowLeft" || e.key === "a") && direction.x === 0) direction = { x: -1, y: 0 };
    if ((e.key === "ArrowRight" || e.key === "d") && direction.x === 0) direction = { x: 1, y: 0 };
    if (e.key === "Enter") restartGame();
});

// Game Loop
function gameLoop() {
    if (!gameOver) {
        update();
        draw();
    }
}

// Update Game State
function update() {
    let head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Add new head to the snake
    snake.unshift(head);

    // Check for boundary collision after updating the snake's position
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        clearInterval(gameInterval);
        gameOver = true;
        return;
    }

    // Check for collision with itself
    if (snake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)) {
        clearInterval(gameInterval);
        gameOver = true;
        return;
    }

    // Check for food collision
    if (head.x === food.x && head.y === food.y) {
        score++;
        highScore = Math.max(score, highScore);
        food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
        speed = Math.max(50, speed - 5); // Gradually increase speed
        clearInterval(gameInterval);
        gameInterval = setInterval(gameLoop, speed);
    } else {
        snake.pop(); // Remove tail if no food eaten
    }
}

// Draw Everything
function draw() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = "#222";
    for (let i = 0; i < tileCount; i++) {
        for (let j = 0; j < tileCount; j++) {
            ctx.strokeRect(i * gridSize, j * gridSize, gridSize, gridSize);
        }
    }

    // Draw food
    ctx.fillStyle = "red";
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Draw snake
    ctx.fillStyle = "lime";
    snake.forEach((segment, index) => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        if (index === 0) {
            ctx.strokeStyle = "darkgreen"; // Differentiate the head
            ctx.strokeRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        }
    });

    // Draw Score
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Score: ${score}`, 10, 20);
    ctx.fillText(`High Score: ${highScore}`, 10, 40);

    // Draw Game Over overlay if game is over
    if (gameOver) {
        drawGameOver();
    }
}

// Draw Game Over Overlay
function drawGameOver() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText("Game Over", canvas.width / 2 - 150, canvas.height / 2 - 25);

    ctx.font = "20px Arial";
    ctx.fillText("Press Enter to Restart", canvas.width / 2 - 100, canvas.height / 2 + 25);
}

// Restart Game
function restartGame() {
    snake = [{ x: 10, y: 10 }];
    direction = { x: 1, y: 0 };
    score = 0;
    speed = 150;
    gameOver = false;
    clearInterval(gameInterval);
    gameInterval = setInterval(gameLoop, speed);
}

// Start Game
gameInterval = setInterval(gameLoop, speed);