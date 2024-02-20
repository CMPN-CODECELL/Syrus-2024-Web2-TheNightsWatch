import googleId from '../../env.js'
import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Markdown from 'react-markdown';

const YourComponent = () => {
    const [sex, setSex] = useState('');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [goal, setGoal] = useState('');
    const [days, setDays] = useState('');
    const [googleid, setGoogle] = useState(googleId);
    const [apiResponse, setApiResponse] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            sex,
            age,
            weight,
            goal,
            days,
        };

        try {
            const response = await fetch('http://localhost:5000/gemini/getWeeklyWorkoutPlan', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const json = await response.json();
            let output = await json.response;
            output = (String)(output);
            console.log(output);
            setApiResponse(output);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', maxWidth: '800px', margin: 'auto' }}>
                <div style={{ width: '45%' }}>
                    <form onSubmit={handleSubmit}>
                        <FormControl fullWidth margin="normal">
                            <InputLabel id="sex-label">Sex</InputLabel>
                            <Select
                                labelId="sex-label"
                                value={sex}
                                onChange={(e) => setSex(e.target.value)}
                            >
                                <MenuItem value="male">Male</MenuItem>
                                <MenuItem value="female">Female</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            label="Age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Weight"
                            type="number"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <FormControl fullWidth margin="normal">
                            <InputLabel id="goal-label">Goal</InputLabel>
                            <Select
                                labelId="goal-label"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                            >
                                <MenuItem value="weight-loss">Weight Loss</MenuItem>
                                <MenuItem value="fat-loss">Fat Loss</MenuItem>
                                <MenuItem value="muscle-gain">Muscle Gain</MenuItem>
                                <MenuItem value="weight-gain">Weight Gain</MenuItem>
                            </Select>
                        </FormControl>

                        <TextField
                            label="Number of Workout Days"
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <TextField
                            label="Number of Workout Days"
                            type="number"
                            value={days}
                            onChange={(e) => setDays(e.target.value)}
                            fullWidth
                            margin="normal"
                        />

                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Submit
                        </Button>
                    </form>
                </div>

                <div style= {{ width: '45%' }}>
                    <Markdown>{apiResponse}</Markdown>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default YourComponent;
