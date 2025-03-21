import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import CsvUploader from './components/CsvUploader';
import ChartView from './components/ChartView';

function App() {
    const [csvData, setCsvData] = useState<any[]>([]);

    return (
        <Container sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                What-If Forecast Dashboard
            </Typography>

            <CsvUploader onDataParsed={setCsvData} />

            {csvData.length > 0 && (
                <ChartView data={csvData} />
            )}
        </Container>
    );
}

export default App;