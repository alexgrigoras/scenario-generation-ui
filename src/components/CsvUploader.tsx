import Papa from 'papaparse';
import { Button, Typography } from '@mui/material';
import React from "react";

type Props = {
    onDataParsed: (data: any[]) => void;
};

const CsvUploader: React.FC<Props> = ({ onDataParsed }) => {
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                onDataParsed(results.data);
            },
        });
    };

    return (
        <div>
            <Typography variant="h6">Upload CSV</Typography>
            <input
                type="file"
                accept=".csv"
                id="csv-upload"
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
            <label htmlFor="csv-upload">
                <Button variant="contained" component="span">Select CSV</Button>
            </label>
        </div>
    );
};

export default CsvUploader;