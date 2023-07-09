import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState, useEffect } from "react";
import service from "../service";
import React, { Component } from 'react';
import PieChart from "./pieChart";
Chart.register(CategoryScale);

function Graph({ id }) {
    const [clicks, setClicks] = useState([]);
    const [chartData, setChartData] = useState({
        labels: [],
        datasets: [],
    });

    async function getLinkData() {
        const clicks = await service.getData(id);
        if (clicks !== undefined) {
            setClicks(clicks);
            setChartData({
                labels: clicks.map((data) => data.name),
                datasets: [
                    {
                        label: "Links Gained ",
                        data: clicks.map((data) => data.value),
                        backgroundColor: [
                            "#0980a1",
                            "#2e7d32",
                            "#ff6384",
                            "&quot;#ecf0f1",
                            
                        ],
                        borderColor: "black",
                        borderWidth: 1,
                    },
                ],
            });
        }
    }

    useEffect(() => {
        getLinkData();
    }, []);

    return (
        <PieChart chartData={chartData} />
    );
}

export default Graph;
