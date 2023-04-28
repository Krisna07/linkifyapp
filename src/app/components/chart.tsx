'use client'

import { useEffect, useRef } from 'react';
import Chart from 'chart.js';

interface ChartProps {
  data: number[];
  labels: string[];
}

const LineChart = ({ data, labels }: ChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        new Chart(ctx, {
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Number of visitors',
                data,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data, labels]);

  return (
    <div className="relative" style={{ height: 500 }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default LineChart;
