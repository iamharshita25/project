// controllers/predict.controller.js
import { spawn } from 'child_process';
import path from 'path';

export const predictPrice = (req, res) => {
    const { formData } = req.body; // Extract formData from the request body

    // Prepare the input data for the model
    const inputData = [
        // Map your formData properties to the model input structure
        formData.bedrooms,
        formData.bathrooms,
        formData.livingArea,
        formData.lotArea,
        formData.floors,
        formData.waterfront,
        formData.views,
        formData.condition,
        formData.grade,
        formData.excludingBasement,
        formData.basementArea,
        formData.builtYear,
        formData.renovationYear,
        formData.latitude,
        formData.longitude,
        formData.livingAreaAfterRenovation,
        formData.lotAreaAfterRenovation,
        formData.schoolsNearby,
        formData.airportDistance,
    ];

    // Spawn a Python process to run your prediction script
    const pythonProcess = spawn('python', [path.join(__dirname, '../scripts/predict.py'), ...inputData]);

    pythonProcess.stdout.on('data', (data) => {
        const predictedPrice = data.toString();
        res.json({ predictedPrice });
    });

    pythonProcess.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
        res.status(500).send('Error in prediction');
    });
};
