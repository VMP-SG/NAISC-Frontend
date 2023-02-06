# Hawk-Eye Centre Dashboard

One of the many use cases of Hawk-Eye Centre is an online dashboard providing accurate live information on the crowdedness level in selected hawker centres.

Our integrated dashboard can be found at this [link](https://naisc.vmpsg.xyz).

## ✨ Features

1. **Home Page**
   - Heatmap
   - People Count
   - Zonal Count
   - People Count across the Past Day
2. **Feed Page (Admin)**
   - Raw Live Camera Feed
   - Camera Feed with Bounding Boxes 
3. **Customer Analytics Page**
   - Empty Tables Analytics
   - Popular Stalls
   - Stalls with Shortest Queue

## 🛠️ To Run (Docker)

1. Clone the repository
```bash
git clone https://github.com/VMP-SG/NAISC-Frontend.git
```

2. Build & Run the container with Docker
```bash
docker build -t hawk-eye-centre-dashboard .
docker run -p 3000:3000 hawk-eye-centre-dashboard
```
The online dashboard will be hosted at [http://127.0.0.1:5173/](http://127.0.0.1:5173/) by default.
## 🛠️ To Run (Without Docker)

1. Install yarn at [https://classic.yarnpkg.com/lang/en/docs/install/](https://classic.yarnpkg.com/lang/en/docs/install/)

2. Clone the repository
```bash
git clone https://github.com/VMP-SG/NAISC-Frontend.git
```

2. Run the following commands
```bash
yarn
yarn dev
```

The online dashboard will be hosted at [http://127.0.0.1:5173/](http://127.0.0.1:5173/) by default.

## 📗 File Structure
- `src/assets`: all images, icons and misc. project assets
- `src/components`: all reusable components of the project
- `src/constants`: reusable constants / utilities of the project
- `src/views`: different pages of the application
