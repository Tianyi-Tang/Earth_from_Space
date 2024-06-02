# Earth From Space
I developed an Earth model using Three.js, enhancing its realism by incorporating custom displacement mapping to accurately depict mountains, plateaus, and canyons. To further enrich the visual experience, we implemented a custom shader to simulate the Earth's atmosphere and dynamic cloud movement.

The model allows for self-rotation and provides users with the ability to adjust the rotation speed and toggle cloud layer visibility. Additionally, users can choose to display the moon and control its rotation and revolution speeds. For comparison, the moon employs Three.js's built-in displacement mapping.

## Project Demonstration
Initial view of project with coulds:
<br>
<img src="/Game_demonstrate_img/Normal_Project.png" alt="Normal_Project" width="500" height="500">
<br>
view of project after removing the coulds:
<br>
<img src="/Game_demonstrate_img/Remove_clouds.png" alt="Remove_clouds" width="500" height="5000">
<br>

view of project after display the moon:
<br>
<img src="/Game_demonstrate_img/With_moon.png" alt="With_moon" width="350" height="350">
<br>

## Getting Started
### Perequisites
- Node.js (Version 20.5 or above)
- Three.js (Version 0.155 or above)

## Installation
#### Clone the project
```bash
git clone https://github.com/Tianyi-Tang/Earth_from_Space.git
```

#### Go to glsl Shader
```bash
cd ./shader
```

## Build and Run
```bash
npx vite
```
Then click the link showing in terminal