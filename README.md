# 🧮 Numerical Method Calculator

> เว็บแอปพลิเคชันสำหรับแก้โจทย์ Numerical Methods ครบทุกหัวข้อ พร้อมแสดงขั้นตอนการคำนวณแบบ Step-by-step, กราฟ และตาราง Iterations

<!-- 🎨 Frontend -->
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?logo=vite&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router_DOM-7.9.3-CA4245?logo=reactrouter&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?logo=bootstrap&logoColor=white)
![React Bootstrap](https://img.shields.io/badge/React--Bootstrap-2.10.10-7952B3?logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?logo=axios&logoColor=white)
![MathJax](https://img.shields.io/badge/better--react--mathjax-2.3.0-007ACC)
![Plotly](https://img.shields.io/badge/Plotly.js-3.1.0-3F4F75?logo=plotly&logoColor=white)
![React Plotly](https://img.shields.io/badge/react--plotly.js-2.6.0-3F4F75)
![Math.js](https://img.shields.io/badge/Math.js-14.7.0-E67E22)
<!-- ⚙️ Backend -->
![Node.js](https://img.shields.io/badge/Node.js-22-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.1.0-000000?logo=express&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8.19.0-880000?logo=mongodb&logoColor=white)
![dotenv](https://img.shields.io/badge/dotenv-17.2.3-ECD53F?logo=dotenv&logoColor=black)
![cors](https://img.shields.io/badge/cors-2.8.5-000000)
![Swagger JSDoc](https://img.shields.io/badge/swagger--jsdoc-6.2.8-85EA2D?logo=swagger&logoColor=black)
![Swagger UI Express](https://img.shields.io/badge/swagger--ui--express-5.0.1-85EA2D?logo=swagger&logoColor=black)
<!-- 🚀 Deployment -->
![Netlify](https://img.shields.io/badge/Netlify-Frontend_Host-00C7B7?logo=netlify&logoColor=white)
![Render](https://img.shields.io/badge/Render-Backend_Host-46E3B7?logo=render&logoColor=black)
![MongoDB Atlas](https://img.shields.io/badge/MongoDB_Atlas-Database_Host-47A248?logo=mongodb&logoColor=white)

---

## 📋 สารบัญ

- [🌟 ภาพรวมโปรเจค](#-ภาพรวมโปรเจค)
- [🛠 Tech Stack](#-tech-stack)
- [📁 โครงสร้างโปรเจค](#-โครงสร้างโปรเจค)
- [🚀 วิธีติดตั้งและรัน](#-วิธีติดตั้งและรัน)
- [☁️ การนำขึ้นระบบ](#️-การนำขึ้นระบบ)
- [📡 API Contract](#-api-contract)
- [📚 เอกสารประกอบ](#-เอกสารประกอบ)

---

## 🌟 ภาพรวมโปรเจค

โปรเจคนี้พัฒนาขึ้นเป็นส่วนหนึ่งของ **Option สอบพิเศษ** วิชา Numerical Methods โดยครอบคลุมวิธีการคำนวณทั้งหมด 6 หมวด ประมาณ 30 วิธี

ผู้ใช้สามารถกรอกข้อมูลเช่น สมการ f(x), ค่า Error Tolerance, ลำดับอนุพันธ์ หรือข้อมูลเมทริกซ์ แล้วระบบจะแสดงผลการคำนวณพร้อมกราฟและตาราง Iterations แบบ Real-time นอกจากนี้ยังรองรับการสุ่มตัวอย่างโจทย์จากฐานข้อมูลเพื่อความสะดวกในการทดสอบ

### หัวข้อที่รองรับทั้งหมด

| Type of Problem	 | Solution |
|------|---------|
| **1. Root of Equation** | Graphical Method, Bisection Method, False Position Method, One Point Iteration Method, Newton Raphson Method, Secant Method |
| **2. Linear Algebra** | Cramer's Rule, Gauss Elimination, Gauss Jordan, Matrix Inversion, LU Decomposition, Cholesky Decomposition, Jacobi Iteration, Gauss-Seidel, Conjugate Gradient |
| **3. Interpolation** | Newton Divided Difference, Lagrange Interpolation, Spline Interpolation (Linear / Quadratic / Cubic) |
| **4. Extrapolation** | Simple Regression (Polynomial), Multiple Linear Regression |
| **5. Integration** | Single Trapezoidal Rule, Composite Trapezoidal Rule, Single Simpson's Rule, Composite Simpson's Rule |
| **6. Differentiation** | Forward Divided Difference, Backward Divided Difference, Central Divided Difference |

---

## 🛠 Tech Stack

### 🟦 Frontend

| Badge | เทคโนโลยี | หน้าที่ |
|-------|-----------|---------|
| ![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=flat-square&logo=react&logoColor=black) | React 19.1.1 | Component-based UI ด้วย Class Components และ Inheritance Pattern |
| ![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=flat-square&logo=vite&logoColor=white) | Vite 7.1.2 | Build Tool, HMR สำหรับ Dev |
| ![React Router](https://img.shields.io/badge/React_Router-7.9.3-CA4245?style=flat-square&logo=react-router&logoColor=white) | React Router DOM 7.9.3 | Client-side routing สำหรับประมาณ 30 หน้า |
| ![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.8-7952B3?style=flat-square&logo=bootstrap&logoColor=white) | Bootstrap 5.3.8 + React-Bootstrap 2.10.10 | UI Components และ Responsive Layout |
| ![Axios](https://img.shields.io/badge/Axios-1.12.2-5A29E4?style=flat-square&logo=axios&logoColor=white) | Axios 1.12.2 | HTTP Client สำหรับเรียก API |
| ![MathJax](https://img.shields.io/badge/MathJax-better--react--mathjax-E74C3C?style=flat-square) | better-react-mathjax 2.3.0 | แสดงสมการคณิตศาสตร์ในรูปแบบ LaTeX |
| ![Plotly](https://img.shields.io/badge/Plotly-3.1.0-3F4F75?style=flat-square&logo=plotly&logoColor=white) | Plotly.js 3.1.0 + react-plotly.js 2.6.0 | Interactive Graph สำหรับ Root Finding และ Regression |
| ![Math.js](https://img.shields.io/badge/Math.js-14.7.0-FF6B35?style=flat-square) | Math.js 14.7.0 | ประมวลผลสมการ, Matrix Operations, Symbolic Differentiation |

**รายละเอียด Dependencies ทั้งหมด:**

| Package | Version |
|---------|---------|
| react | 19.1.1 |
| react-dom | 19.1.1 |
| react-router-dom | 7.9.3 |
| bootstrap | 5.3.8 |
| react-bootstrap | 2.10.10 |
| axios | 1.12.2 |
| mathjs | 14.7.0 |
| better-react-mathjax | 2.3.0 |
| plotly.js | 3.1.0 |
| react-plotly.js | 2.6.0 |
| recharts | 3.2.1 |
| react-chartjs-2 | 5.3.0 |

---

### 🟩 Backend

| Badge | เทคโนโลยี | หน้าที่ |
|-------|-----------|---------|
| ![Node.js](https://img.shields.io/badge/Node.js-22-339933?style=flat-square&logo=node.js&logoColor=white) | Node.js 22 | Runtime สำหรับ Backend Server |
| ![Express](https://img.shields.io/badge/Express-5.1.0-000000?style=flat-square&logo=express&logoColor=white) | Express 5.1.0 | REST API Framework |
| ![Mongoose](https://img.shields.io/badge/Mongoose-8.19.0-880000?logo=mongoose) | Mongoose 8.19.0 | ODM สำหรับเชื่อมต่อ MongoDB และจัดการ Schema |
| ![dotenv](https://img.shields.io/badge/dotenv-17.2.3-ECD53F?style=flat-square) | dotenv 17.2.3 | จัดการ Environment Variables |
| ![CORS](https://img.shields.io/badge/CORS-2.8.5-FF6B6B?style=flat-square) | cors 2.8.5 | Cross-Origin Resource Sharing |
| ![Swagger](https://img.shields.io/badge/Swagger-UI-85EA2D?style=flat-square&logo=swagger&logoColor=black) | swagger-jsdoc 6.2.8 + swagger-ui-express 5.0.1 | Auto-generate API Documentation |

**รายละเอียด Dependencies ทั้งหมด:**

| Package | Version |
|---------|---------|
| express | 5.1.0 |
| mongoose | 8.19.0 |
| dotenv | 17.2.3 |
| cors | 2.8.5 |
| swagger-jsdoc | 6.2.8 |
| swagger-ui-express | 5.0.1 |

---

### 🐳 Infrastructure

| เทคโนโลยี | หน้าที่ |
|-----------|---------|
| Docker + Docker Compose | Containerize ทั้ง Frontend, Backend และ MongoDB ใน Environment เดียว |
| Nginx | Web Server สำหรับ Serve static files ของ Frontend ใน Production |
| MongoDB Compass | ใช้สำหรับเชื่อมต่อและจัดการ MongoDB ผ่าน GUI |
| MongoDB Atlas | Cloud Database สำหรับ Production |

---

## 📁 โครงสร้างโปรเจค

```
📁 Numerical-Method-Website
├── 📁 backend
│   ├── ⚙️ .env.example
│   ├── 🐳 Dockerfile
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   ├── 📄 server.js
│   └── 📄 swaggerConfig.js
├── 📁 frontend
│   ├── 📁 public
│   │   ├── 📄 _redirects
│   │   └── 🖼️ vite.svg
│   ├── 📁 src
│   │   ├── 📁 assets
│   │   │   ├── 🖼️ react.svg
│   │   │   └── 🖼️ reshot-icon-calculator-6SDGV8BJYK.svg
│   │   ├── 📁 components
│   │   │   ├── 📄 MathDisplay.jsx
│   │   │   └── 📄 NavbarComponent.jsx
│   │   ├── 📁 pages
│   │   │   ├── 📁 differentiation
│   │   │   │   ├── 📄 BackwardDividedDifference.jsx
│   │   │   │   ├── 📄 BaseDifferentiation.jsx
│   │   │   │   ├── 📄 CentralDividedDifference.jsx
│   │   │   │   └── 📄 ForwardDividedDifference.jsx
│   │   │   ├── 📁 extrapolation
│   │   │   │   ├── 📄 MultipleLinearRegression.jsx
│   │   │   │   └── 📄 SimpleRegression.jsx
│   │   │   ├── 📁 integration
│   │   │   │   ├── 📄 BaseIntegration.jsx
│   │   │   │   ├── 📄 CompositeSimpsonsRule.jsx
│   │   │   │   ├── 📄 CompositeTrapezoidalRule.jsx
│   │   │   │   ├── 📄 SingleSimpsonsRule.jsx
│   │   │   │   └── 📄 SingleTrapezoidalRule.jsx
│   │   │   ├── 📁 interpolation
│   │   │   │   ├── 📄 BaseInterpolation.jsx
│   │   │   │   ├── 📄 LagrangeInterpolation.jsx
│   │   │   │   ├── 📄 NewtonDividedDifference.jsx
│   │   │   │   └── 📄 SplineInterpolation.jsx
│   │   │   ├── 📁 linear-algebra
│   │   │   │   ├── 📄 BaseLinearAlgebra.jsx
│   │   │   │   ├── 📄 CholeskyDecompositionMethod.jsx
│   │   │   │   ├── 📄 ConjugateGradientMethod.jsx
│   │   │   │   ├── 📄 CramersRule.jsx
│   │   │   │   ├── 📄 GaussEliminationMethod.jsx
│   │   │   │   ├── 📄 GaussJordanMethod.jsx
│   │   │   │   ├── 📄 GaussSeidelMethod.jsx
│   │   │   │   ├── 📄 JacobiIterationMethod.jsx
│   │   │   │   ├── 📄 LUDecompositionMethod.jsx
│   │   │   │   └── 📄 MatrixInversion.jsx
│   │   │   ├── 📁 root-of-equation
│   │   │   │   ├── 📄 BaseRootOfEquation.jsx
│   │   │   │   ├── 📄 BisectionMethod.jsx
│   │   │   │   ├── 📄 FalsePositionMethod.jsx
│   │   │   │   ├── 📄 GraphicalMethod.jsx
│   │   │   │   ├── 📄 NewtonRaphsonMethod.jsx
│   │   │   │   ├── 📄 OnePointIterationMethod.jsx
│   │   │   │   └── 📄 SecantMethod.jsx
│   │   │   └── 📄 Home.jsx
│   │   ├── 🎨 App.css
│   │   ├── 📄 App.jsx
│   │   ├── 📄 PresetManager.js
│   │   ├── 🎨 index.css
│   │   └── 📄 main.jsx
│   ├── ⚙️ .env.example
│   ├── 🐳 Dockerfile
│   ├── 📄 eslint.config.js
│   ├── 🌐 index.html
│   ├── ⚙️ package-lock.json
│   ├── ⚙️ package.json
│   └── 📄 vite.config.js
├── 📁 mongo-init
│   └── 📄 init.js
├── ⚙️ .dockerignore
├── ⚙️ .gitignore
├── 📝 README.md
├── ⚙️ docker-compose.yml
├── ⚙️ package-lock.json
└── ⚙️ package.json
```

---

## 🚀 วิธีติดตั้งและรัน

### Prerequisites

| เครื่องมือ | ใช้ทำอะไร | Download |
|-----------|----------|---------|
| Git | Clone โปรเจค | [git-scm.com](https://git-scm.com) |
| **Docker Desktop** | รันระบบทั้งหมดผ่าน Container (แนะนำ) | [docker.com](https://www.docker.com/products/docker-desktop) |
| Node.js >= 18 | รัน Frontend / Backend โดยตรง (สำหรับ Dev) | [nodejs.org](https://nodejs.org) |
| MongoDB Compass *(ทางเลือก)* | GUI สำหรับดูและจัดการข้อมูลใน MongoDB | [mongodb.com/compass](https://www.mongodb.com/products/compass) |

---

### วิธีที่ 1: รันด้วย Docker (แนะนำ)

วิธีนี้จะ Start ทุกอย่างในครั้งเดียว ทั้ง Frontend, Backend และ MongoDB

**1. Clone โปรเจค**
```bash
git clone https://github.com/Rinious19/Numerical-Method-Website
cd Numerical-Method-Website
```


> ไฟล์ .env ไม่จำเป็นต้องแก้ไขอะไร สำหรับการรันด้วย Docker ค่า default ใช้งานได้เลย

**2. Build และ Start ทุก Service**
```bash
docker compose up --build
```

**3. เข้าใช้งาน**

| Service | URL |
|---------|-----|
| 🌐 Frontend | http://localhost:5173 |
| ⚙️ Backend API | http://localhost:8000 |
| 📄 Swagger UI | http://localhost:8000/api-docs |
| 🍃 MongoDB | mongodb://localhost:27017 |

**4. หยุดการทำงาน**
```bash
# หยุดแต่ยังเก็บข้อมูลไว้
docker compose down

# หยุดและลบข้อมูลทั้งหมด (รวม MongoDB volume)
docker compose down -v
```

---

### วิธีที่ 2: รันแยก Frontend / Backend (สำหรับ Dev)

ใช้วิธีนี้เมื่อต้องการพัฒนาและเห็น Hot Reload ทันที

**1. Clone โปรเจค**
```bash
git clone https://github.com/Rinious19/Numerical-Method-Website
cd Numerical-Method-Website
```

**2. ติดตั้ง Dependencies ทั้งหมด**
```bash
npm install
```

**3. ตั้งค่า Environment Variables**

สำหรับ Backend:
```bash
cp backend/.env.example backend/.env
```
แก้ไข `backend/.env`:
```env
MONGO_URL=mongodb://localhost:27017/numericalMethodsDB
CLIENT_URL=http://localhost:5173
```

สำหรับ Frontend:
```bash
cp frontend/.env.example frontend/.env
```
แก้ไข `frontend/.env`:
```env
VITE_API_URL=http://localhost:8000
```

**4. เตรียม MongoDB**

ใช้ **MongoDB Shell** ที่ฝังอยู่ใน MongoDB Compass (ไม่ต้องติดตั้งเพิ่ม)

1. เปิด **MongoDB Compass** และ Connect ให้เรียบร้อย
2. สังเกตแถบด้านบนของหน้าต่าง จะมีปุ่ม **`>_Open MongoDB shell`** ให้คลิกเพื่อเปิด Embedded Shell
3. เปิดไฟล์ `mongo-init/init.js` ใน Text Editor (เช่น VS Code) แล้ว **Copy โค้ดทั้งหมด**
4. **Paste** ลงในช่อง MONGOSH แล้วกด Enter
5. ระบบจะสร้าง Database `numericalMethodsDB` พร้อม Collection และข้อมูลตัวอย่างทั้งหมดให้ทันที

**5. รัน Frontend และ Backend พร้อมกัน**
```bash
npm run dev
```

หรือรันแยก Terminal:
```bash
# Terminal 1 - Backend
npm run dev -w backend

# Terminal 2 - Frontend
npm run dev -w frontend
```

**6. เข้าใช้งาน**

| Service | URL |
|---------|-----|
| 🌐 Frontend | http://localhost:5173 |
| ⚙️ Backend API | http://localhost:8000 |
| 📄 Swagger UI | http://localhost:8000/api-docs |

---

## ☁️ การนำขึ้นระบบ

โปรเจคนี้ได้รับการ Deploy บน Cloud ตามโครงสร้างแบบแยกส่วน:

| ส่วน | Platform | ลิงก์ |
|------|----------|-------|
| **Frontend** | Netlify | 🔗 [numerical-method-calculator.netlify.app](https://numerical-method-calculator.netlify.app) |
| **Backend** | Render | 🔗 [numerical-method-backend.onrender.com](https://numerical-method-backend.onrender.com) |
| **Database** | MongoDB Atlas | 🔒 Private |

> **หมายเหตุ:** Backend บน Render ใช้ Free Tier ซึ่งอาจ Spin Down เมื่อไม่มีการใช้งาน การเรียกครั้งแรกอาจใช้เวลาสักครู่

---

## 📡 API Contract

Backend มี API Endpoint เดียวสำหรับสุ่มดึงข้อมูล Preset โจทย์ตัวอย่างจากฐานข้อมูล

### `GET /api/presets/random/:collectionName`

ดึงข้อมูล Preset แบบสุ่ม 1 รายการจาก Collection ที่ระบุ ใช้สำหรับฟีเจอร์ **Fill Form** ในแต่ละหน้า

**Path Parameter:**

| Parameter | Type | ค่าที่รองรับ |
|-----------|------|------------|
| `collectionName` | string | `rootofequationpresets`, `integrationpresets`, `differentiationpresets` |

**ตัวอย่างการเรียก:**
```
GET http://localhost:8000/api/presets/random/rootofequationpresets
```

**Response (200 OK) — ตัวอย่าง Root of Equation:**
```json
{
  "_id": "...",
  "id": "68e48e446ba85e00ad9a2085",
  "fx": "x^4 - 13",
  "xStart": 0,
  "xEnd": 10,
  "tol": 0.001
}
```

**Response (200 OK) — ตัวอย่าง Integration:**
```json
{
  "_id": "...",
  "id": "68e8d6be6d602bdfe7d984de",
  "fx": "4x^5 - 3x^4 - 6x + 2",
  "lowerBound": 2,
  "upperBound": 8,
  "segments": 4
}
```

**Response (200 OK) — ตัวอย่าง Differentiation:**
```json
{
  "_id": "...",
  "id": "68e920957c06facdc073b1f5",
  "fx": "9x^7 + 2x^5 + 8x^3 - 12x - 1",
  "x": 2.5,
  "h": 0.2
}
```

**Error Responses:**

| Status | ความหมาย |
|--------|---------|
| `404` | ไม่พบ Collection ที่ระบุ หรือ Collection ว่างเปล่า |
| `500` | เกิดข้อผิดพลาดฝั่ง Server |

> 📄 ดู API Documentation แบบ Interactive ได้ที่ [/api-docs](http://localhost:8000/api-docs) (Swagger UI)

---

## 📚 เอกสารประกอบ

| เอกสาร | ลิงก์ |
|--------|-------|
| 📝 เอกสารโปรเจคฉบับเต็ม (Google Docs) | [🔗 เปิดเอกสาร](https://docs.google.com/document/d/1XG2SJmS3s5K_A6Vvl8zW3Op_s0AYG9duZxqL4woBsIw/edit?usp=sharing) |
| 📖 Swagger API Docs (Local) | http://localhost:8000/api-docs |
| 📖 Swagger API Docs (Production) | https://numerical-method-backend.onrender.com/api-docs |

---

<div align="center">
  <sub>พัฒนาด้วย ❤️ สำหรับวิชา Numerical Methods</sub>
</div>
