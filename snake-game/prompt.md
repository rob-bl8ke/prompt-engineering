# Create a Snake game using Prompt engineering
 ChatGPT - 2025-03-06 based on [following this video](https://youtu.be/LWiMwhDZ9as?t=5186).

## Base Prompt

> You want to create a snake game that runs in the browser using JavaScript. You're only interested in the design of the game and will not be generating any code at this point. You'll formulate the design step by step and with each step you'll prompt me as the end user to provide direction to aid you in your design. Once done, you'll summarize clearly the detailed steps you will take to develop the game (without generating any code). Let's go.

Great! Let’s start by defining the **core concept** of the game.  

## Step 1: Game Overview  
Before we dive into specifics, let's clarify the basics:  

- The game will run in a web browser using JavaScript.  
- It will be a **classic snake game**, where the snake grows as it eats food.  
- The game will have a **grid-based movement system**.  
- The snake will be controlled using **arrow keys** or other input methods.  
- The game should include a **score system**.  
- The game will end if the snake collides with itself or the walls (unless we decide to make it wrap around).  

### Question for You:  
- **Should the snake wrap around the screen when it reaches the edges, or should hitting the edge result in game over?**  
- **Do you want a simple pixel-art style, or should it have a more modern, stylized look?**

> The snake should wrap around the screen instead of ending the tame when it reaches the edges. Let's start with a simple pixel-art style.

Great choices! The snake will **wrap around the screen** instead of ending the game upon hitting the edges, and we'll go with a **simple pixel-art style** for the visuals.  

### **Step 2: Game Grid and Movement**  
Since we're using a grid-based system, we need to decide:  

1. **Grid Size:**  
   - The game board will be made up of square tiles in a grid.  
   - A common approach is a **20x20 or 30x30 grid**, but we can adjust based on gameplay feel.  

2. **Snake Movement:**  
   - The snake moves **one tile at a time** in the chosen direction (up, down, left, right).  
   - Movement will be continuous (the player doesn’t have to repeatedly press a key to move).  
   - When the snake moves beyond the edge, it should **appear on the opposite side of the grid**.  

3. **Frame Rate (Speed):**  
   - We need a refresh rate to move the snake forward at regular intervals.  
   - Typical snake games start with **10 moves per second** and increase speed as the game progresses.  

### **Questions for You:**  
- **What grid size do you prefer? (20x20, 30x30, or something else?)**  
- **Should the game start at a fixed speed and remain constant, or should it gradually speed up over time?**

> 30x30. Gradually speed up.

Got it! We'll use a **30x30 grid** for a more spacious playing field, and the snake's speed will **gradually increase** as the game progresses.  

---

### **Step 3: Snake Growth & Food Mechanics**  
Now, let's define how the snake interacts with food and grows:  

1. **Food Placement:**  
   - A piece of food will randomly appear on an **unoccupied tile** on the grid.  
   - When the snake eats the food, a new piece will appear in a different location.  

2. **Snake Growth:**  
   - Eating food makes the snake grow by **one segment**.  
   - The new segment appears **at the snake’s tail** (it follows the movement direction).  

3. **Score System:**  
   - The score increases when the snake eats food.  
   - We could have a **simple point-per-food** system or introduce **multipliers/combo bonuses** if the player eats food quickly.  

4. **Increasing Speed:**  
   - The game will **slightly increase the speed** each time food is eaten.  
   - We need to balance this so the game doesn't become too difficult too quickly.  

---

### **Questions for You:**  
- **Should the food be a simple colored square or a small pixel-art object (e.g., apple, berry, etc.)?**  
- **Do you want additional mechanics like special food items that give extra points or power-ups?**

> colored square. no special food items

Nice! We'll keep the food as a **simple colored square** and avoid special items for now, keeping the game mechanics straightforward.  

---

### **Step 4: User Input & Controls**  
Now, let's decide how the player will control the snake.  

1. **Keyboard Controls:**  
   - Arrow keys (`↑`, `↓`, `←`, `→`) to move the snake.  
   - Alternatively, `WASD` keys could also be supported.  

2. **Mobile Controls (Optional):**  
   - If we want mobile support, we could add **on-screen buttons** or swipe gestures.  

3. **Input Rules:**  
   - The snake **cannot reverse direction instantly** (e.g., if moving right, pressing left should be ignored until a new turn is made).  
   - Input should be **smooth and responsive** with no noticeable delay.  

---

### **Questions for You:**  
- **Do you want to support both arrow keys and `WASD`, or just arrow keys?**  
- **Should we include mobile-friendly controls (on-screen buttons or swipes), or focus only on desktop for now?**

> WASD and arrow keys. Does not need to be mobile-friendly.

Got it! We'll support **both WASD and arrow keys** for movement but keep it **desktop-only** for now, skipping mobile controls.  

---

### **Step 5: Game Over Conditions & Restart Mechanism**  
Since the snake **wraps around the screen**, the main way to lose is **colliding with itself**. Let’s define how that works:  

1. **Game Over Conditions:**  
   - The game ends when the **snake collides with itself** (its head touches any part of its body).  
   - No walls will cause game over since the snake wraps around.  

2. **Restart Mechanism:**  
   - When the game ends, the player should have an option to restart.  
   - Options for restarting:  
     - **Press a key** (e.g., `Space` or `Enter`).  
     - **Click a "Restart" button** on the screen.  

3. **Score Reset:**  
   - When the game restarts, the score and snake size should **reset to default**.  
   - Should we keep a **high score display** to track the best run?  

---

### **Questions for You:**  
- **How should the player restart the game? (`Space`, `Enter`, a button, or all three?)**  
- **Do you want a high score display to track the best score in a session?**

> Enter key. Yes, for high score tracking.

Great! The game will **restart when the player presses `Enter`**, and we’ll include a **high score tracker** to keep track of the best score in a session.  

---

### **Step 6: Visual & Audio Feedback**  
Since we’re going with a **simple pixel-art style**, let’s define some basic visuals and sounds:  

1. **Snake Appearance:**  
   - A simple **square-body snake**, each segment being a **solid color** (e.g., green).  
   - Should the head be visually distinct (e.g., a slightly different shade or outlined)?  

2. **Food Appearance:**  
   - A **small square** in a contrasting color (e.g., red, yellow).  

3. **Game Board:**  
   - **Black or dark gray background** for contrast?  
   - Should we have a subtle **gridline effect** to make the movement more visually clear?  

4. **Simple Animations:**  
   - Should we add slight **color effects** when eating food or growing?  
   - A **fade-out or flash effect** when the game ends?  

5. **Sound Effects (Optional):**  
   - **Simple "pop" sound** when eating food?  
   - **Subtle sound** when moving?  
   - **Game over sound** when the snake collides with itself?  

---

### **Questions for You:**  
- **Should the snake’s head be visually distinct from the body?**  
- **Should we show faint gridlines in the background, or keep it a solid color?**  
- **Do you want basic sound effects for actions like eating, moving, and game over?**

> Yes. Yes. No.

Got it!  

- The **snake’s head will be visually distinct** (e.g., a slightly different shade or outline).  
- The **game board will have faint gridlines** for better visual clarity.  
- **No sound effects**—we’ll keep the game silent.  

---

### **Step 7: Final Design Summary**  

Now that we’ve covered all aspects, here’s the complete **design plan** for the game:  

#### **Core Gameplay**  
✅ A **classic snake game** running in a web browser using JavaScript.  
✅ The **snake moves on a 30x30 grid**, one tile at a time.  
✅ **Arrow keys (`↑ ↓ ← →`) and WASD** for movement.  
✅ The **snake wraps around the screen** instead of hitting the edges.  
✅ The game speeds up **gradually** as the player eats food.  

#### **Growth & Scoring**  
✅ **Food appears as a simple colored square** in an empty tile.  
✅ Eating food **grows the snake by one segment**.  
✅ **Score increases with each food eaten**, and a **high score is tracked**.  

#### **Game Over & Restart**  
✅ The game ends when the **snake collides with itself**.  
✅ The player **presses `Enter` to restart**.  
✅ The score resets, but the **high score is saved** for the session.  

#### **Visuals & Effects**  
✅ **Pixel-art style**, with a **simple square-body snake**.  
✅ The **snake’s head is visually distinct** from the body.  
✅ The **game board has faint gridlines** for clarity.  
✅ **No sound effects**—silent gameplay.  
✅ Basic **visual effects** (e.g., slight color changes when eating food or growing).  

---

This is the full game design plan! 🎮  
The next step would be **implementing it in code**, but since we're focused on design, we’ll stop here.  

Would you like to adjust anything before finalizing the design? 😊

> Let's go ahead and write the code for the design we've agreed on adhering to the final design summary.

Let's get started on the implementation! I'll create the **JavaScript, HTML, and CSS** code to match the design we've agreed on. The game will run in the browser using the **Canvas API** for rendering.  

I'll structure the code as follows:  
- **HTML:** A simple page with a canvas for rendering the game.  
- **CSS:** Basic styling to center the game on the screen.  
- **JavaScript:** The game logic, including movement, growth, food placement, scoring, and screen wrapping.  

Now, I'll write the full implementation. Stay tuned! 🎮

Here’s the full **JavaScript implementation** of our snake game, adhering exactly to the design we agreed upon! 🎮  

### **Features Implemented:**
✅ **30x30 grid** with faint gridlines.  
✅ **Arrow keys + WASD** for movement.  
✅ **Snake wraps around the screen** instead of ending at edges.  
✅ **Food appears as a red square** and respawns after being eaten.  
✅ **The snake grows** when it eats food.  
✅ **Speed gradually increases** as food is eaten.  
✅ **Game over when the snake collides with itself**.  
✅ **Press `Enter` to restart** the game.  
✅ **Score and high score tracking** displayed on the screen.  

Would you like any modifications or enhancements? 🚀