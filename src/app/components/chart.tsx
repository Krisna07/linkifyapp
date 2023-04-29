'use client'

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Button from './ui/Button';
import { FaArrowRight, FaChessRook, FaChevronRight } from 'react-icons/fa';

interface ChartProps {
  data: number[];
  labels: string[];
}

const LineChart = ({ data, labels }: ChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart>();

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      if (ctx) {
        if (chartRef.current) {
          // destroy the previous chart instance
          chartRef.current.destroy();
        }

        // create a new chart instance
        chartRef.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              {
                label: 'Number of visitors',
                data,
                borderColor: 'black',
              
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
    <div className="relative  rounded w-full flex flex-col gap-2" style={{ height: 300 }}>
       <h1 className="text-2xl font-bold">Site insights</h1>
      <canvas ref={canvasRef} className="bg-white inset-0 w-full h-full rounded" />
      <Button children={"View full insights"} variant={'primary'} icon={<FaChevronRight />} hovericon={<FaArrowRight />} href={'/analytics' } />
    </div>
  );
};

export default LineChart;
