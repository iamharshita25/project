import express from 'express';
import { spawn } from 'child_process';
import path from 'path';

const router = express.Router();
const __dirname = path.dirname(new URL(import.meta.url).pathname);

router.post('/', (req, res) => {
    const inputData = req.body; // Extract data from the request body

    // Construct the path to the Python script
    const scriptPath = 'D:\\palak\\Documents\\SEMESTER-7\\Home-harbor\\api\\scripts\\predict.py';

    // Log the constructed script path for debugging
    console.log('Script Path:', scriptPath);

    const pythonProcess = spawn('python', [scriptPath, JSON.stringify(inputData)]);

    pythonProcess.stdout.on('data', (data) => {
        const predictedPrice = data.toString(); // Handle the output from the Python script
        res.json({ predictedPrice });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error('Python error:', data.toString());
        res.status(500).json({ error: 'An error occurred' });
    });
});

export default router;
