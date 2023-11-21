const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(express.json());
app.use(cors()); // Enable CORS for all routes

// Define the path to your JSON file
const jsonFilePath = 'C:/Personal/astro/astro-demo/src/mock-data/data.json';

app.post('/api/register', (req, res) => {
    const newAccount = req.body;

    // Read the existing JSON file
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    // Push the new account object into the ACCOUNT array
    jsonData.ACCOUNT.push(newAccount);

    // Write the updated JSON back to the file
    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

    res.json({ message: 'Account registered successfully' });
});

// New endpoint to update vipId by user id
app.put('/api/updateUserVipId/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const newVipId = req.body.vipId;

    // Read the existing JSON file
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    // Find the user by id and update their vipId
    const userIndex = jsonData.ACCOUNT.findIndex(user => user.id === userId);
    if (userIndex !== -1) {
        jsonData.ACCOUNT[userIndex].vipId = newVipId;

        // Write the updated JSON back to the file
        fs.writeFileSync(jsonFilePath, JSON.stringify(jsonData, null, 2));

        res.json({ message: 'User vipId updated successfully' });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
