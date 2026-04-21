//? ไฟล์: mongo-init/init.js

//* เลือก Database ที่ต้องการใช้ (ตรงกับใน .env ของคุณ)
db = db.getSiblingDB('numericalMethodsDB');

//@ 1. เพิ่มข้อมูลสำหรับ Root of Equation
db.rootofequationpresets.insertMany([
    {
        id: "68e48e446ba85e00ad9a2085",
        fx: "x^4 - 13",
        xStart: 0,
        xEnd: 10,
        tol: 0.001,
    },
    {
        id: "68e48e446ba85e00ad9a2086",
        fx: "x^2 - 2",
        xStart: 1,
        xEnd: 3,
        tol: 0.001,
    },
    {
        id: "68e48e446ba85e00ad9a2088",
        fx: "cos(x) - x",
        xStart: -1,
        xEnd: 1,
        tol: 0.001,
    },
    {
        id: "68e48e446ba85e00ad9a2089",
        fx: "x^2 - 5x + 3",
        xStart: 0,
        xEnd: 4,
        tol: 0.0001,
    },
    {
        id: "68e48e446ba85e00ad9a208a",
        fx: "e^x - 3",
        xStart: 0,
        xEnd: 2,
        tol: 0.001,
    },
    {
        id: "68e48e446ba85e00ad9a208b",
        fx: "sin(x) - 0.5",
        xStart: 0,
        xEnd: 2,
        tol: 0.0001,
    },
    {
        id: "68e48e446ba85e00ad9a208c",
        fx: "x^2 - 5",
        xStart: 2,
        xEnd: 3,
        tol: 0.001,
    },
    {
        id: "68e48e446ba85e00ad9a208d",
        fx: "x^3 - x - 2",
        xStart: 0,
        xEnd: 2,
        tol: 0.001,
    },
    {
        id: "68e48e446ba85e00ad9a208e",
        fx: "x^3 - 7x + 6",
        xStart: 0,
        xEnd: 1,
        tol: 0.001,
    },
    {
        id: "68e4900122a1807b01c5d2d9",
        fx: "e^(-x) - x",
        xStart: 0,
        xEnd: 1,
        tol: 0.0001,
    },
]);

//@ 2. เพิ่มข้อมูลสำหรับ Integration
db.integrationpresets.insertMany([
    {
        id: "68e8d6be6d602bdfe7d984de",
        fx: "4x^5 - 3x^4 - 6x + 2",
        lowerBound: 2,
        upperBound: 8,
        segments: 4
    },
    {
        id: "68e8d76d6d602bdfe7d984df",
        fx: "x^3 - 6x^2 + 4x + 12",
        lowerBound: 2,
        upperBound: 8,
        segments: 4
    },
    {
        id: "68e8f3c2589afb57205815d4",
        fx: "x^2 - 9x + 20",
        lowerBound: 0,
        upperBound: 3,
        segments: 8
    },
    {
        id: "68e8f3ed589afb57205815d5",
        fx: "9x^7 + 2x^5 + 8x^3 - 12x - 1",
        lowerBound: -2,
        upperBound: 5,
        segments: 4
    },
    {
        id: "68e8f42d589afb57205815d6",
        fx: "-7x^3 + x^2 -33x + 20",
        lowerBound: 0,
        upperBound: 8,
        segments: 2
    },
]);

//@ 3. เพิ่มข้อมูลสำหรับ Differentiation
db.differentiationpresets.insertMany([
    {
        id: "68e920957c06facdc073b1f5",
        fx: "9x^7 + 2x^5 + 8x^3 - 12x - 1",
        x: 2.5,
        h: 0.2
    },
    {
        id: "68e9210d7c06facdc073b1f6",
        fx: "x^2 - 9x + 20",
        x: 0.5,
        h: 1
    },
    {
        id: "68e921247c06facdc073b1f7",
        fx: "x^3 - 6x^2 + 4x + 12",
        x: 10,
        h: 2
    },
    {
        id: "68e9213e7c06facdc073b1f8",
        fx: "-7x^3 + x^2 -33x + 20",
        x: -5,
        h: 1.5
    },
    {
        id: "68e921967c06facdc073b1f9",
        fx: "75x^9 + 20x^3 - 20",
        x: 4.22,
        h: 9.5
    },
    {
        id: "68e921b47c06facdc073b1fa",
        fx: "4x^5 - 3x^4 - 6x + 2",
        x: 20.5,
        h: 0.87
    },
    {
        id: "68e921d17c06facdc073b1fb",
        fx: "10x + 3",
        x: 10,
        h: 0.1
    }
]);

print("✅ Initial data inserted successfully via init.js");