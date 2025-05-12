# 🎮 Maze Runner (React + Tailwind)

**Maze Runner** is a browser-based maze game built with **React.js** and styled using **Tailwind CSS**. The maze is generated using the **recursive backtracking algorithm**, and it's up to the **player** to find their way from the start to the exit.

---

## 🧩 Gameplay

- A maze is randomly generated each time using depth-first search (recursive backtracking).
- The player navigates from the **start cell** to the **end cell** using on-screen buttons.
- The player must find the correct path through the maze.

---

## 🚀 Features

- 🌀 Maze generation using recursive backtracking
- 🎮 Player-controlled maze navigation
- 📱 Responsive design using TReact components
- 🧱 Realistic wall-based cell rendering

---

## 🛠️ Tech Stack

- **React.js**  
- **Tailwind CSS** 
- **TypeScript**  


---

## ⚙️ How to Run


1. Clone the repository
```bash
git clone https://github.com/your-username/maze-runner.git
cd maze-runner
```
2. Install dependencies
```bash
npm install
```
3. Start the app
```bash
npm start
```
The app will run at http://localhost:8080


---

## 🧠 How It Works

### Maze Generation

The maze is built using the **recursive backtracking algorithm**:
- Start from the top-left cell.
- Randomly visit unvisited neighbors.
- Remove walls between the current and next cells.
- Backtrack when stuck — repeat until all cells are visited.

### Game Objective

- Start from the top-left corner (or defined starting point).
- Reach the goal cell at the bottom-right (or defined endpoint).
- Avoid dead ends and navigate around walls.


## 📸 Screenshots

![Screenshot 2025-05-12 at 21 13 27](https://github.com/user-attachments/assets/97abecaa-58b3-47a8-8809-f1ef2fe662ef)

![Screenshot 2025-05-12 at 21 15 20](https://github.com/user-attachments/assets/9041c338-09ca-421b-abe4-521b5f3404b0)



---

