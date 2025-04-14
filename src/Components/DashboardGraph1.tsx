
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['text', 'video'],
  datasets: [
    {
      data: [60, 25],
      backgroundColor: ['#3b82f6', '#06b6d4'],
      borderWidth: 0,
      cutout: '70%',
    },
  ],
};

const DashboardGraph1 = () => {
  return (
    <div className="bg-[#111113] text-white w-[300px] rounded-2xl p-4 shadow-lg shadow-emerald-500/10">
      <div className="mb-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Total Reviews</h2>
        </div>
        <div className="flex gap-3 text-xs text-gray-400 mt-3">
          <span className="px-2 py-1 bg-[#1f2937] rounded-md">Text</span>
          <span className="px-2 py-1 bg-[#1f2937] rounded-md">Video</span>
        </div>
      </div>

      <div className="relative w-full max-w-[250px] mx-auto">
        <Doughnut data={data} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-xl font-bold">10</div>
        </div>
      </div>

      <div className=" flex items-center justify-between mt-4 w-full space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#3b82f6]"></span>
            <span>Text</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#06b6d4]"></span>
            <span>Videos</span>
          </div>
      </div>
    </div>
  );
};

export default DashboardGraph1;

