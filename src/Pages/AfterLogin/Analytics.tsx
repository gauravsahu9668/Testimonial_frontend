import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../server/axiosConnect";
import { useLocation } from "react-router-dom";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const location = useLocation();
  const id = location.pathname;
  const spaceId = id.split("/")[2];
  const [countlinedata, setcountlinedata] = useState<any>(null);
  const [bardata, setbardata] = useState<any>(null);
  const [bartext,setbartext]=useState<any>(null)
  const [barvideo,setbarvideo]=useState<any>(null);
  const [loader,setloader]=useState(false);
  const getalldata = async () => {
    setloader(true)
    try {
      const res = await axios.post(`${BACKEND_URL}/analytics/getspacedata`, {
        spaceId: Number(spaceId),
      });
      if (res && res.data && res.data.data) {
        const countvalues = Object.values(res.data.data.count);
        const textstar=Object.values(res.data.data.textonrating);
        const videostar=Object.values(res.data.data.videoonrating);
        setcountlinedata({
          labels: ["Text Reviews", "Video Reviews"],
          datasets: [
            {
              label: "Number of Reviews",
              data: countvalues,
              backgroundColor: ["#1d4ed8", "#d97706"],
              borderColor: "#000",
              borderWidth: 1,
            },
          ],
        });
        setbardata({
          labels: ["Text", "Videos"],
          datasets: [
            {
              label: "Number of Reviews",
              data: countvalues,
              borderColor: "#2563eb",
              tension: 0.2,
              pointBackgroundColor: "#f59e0b",
              pointHoverBackgroundColor: "#34d399",
            },
          ],
        });
        setbartext({
            labels: [1,2,3,4,5],
            datasets: [
              {
                label: "Number of Reviews",
                data: textstar,
                backgroundColor: ["#1d4ed8", "#d97706"],
                borderColor: "#000",
                borderWidth: 1,
              },
            ],
          })
        setbarvideo({
            labels: [1,2,3,4,5],
            datasets: [
              {
                label: "Number of Reviews",
                data: videostar,
                backgroundColor: ["#1d4ed8", "#d97706"],
                borderColor: "#000",
                borderWidth: 1,
              },
            ],
          })
      }
      setloader(false);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useEffect(() => {
    getalldata();
  }, []);

  return (
    loader ? 
    <div className="w-full min-h-[100vh] flex items-center justify-center bg-[#F9FAFB]">
    <div className="h-12 w-12 border-4 border-t-[#2563EB] border-[#E5E7EB] rounded-full animate-spin"></div>
      </div>
    :
    <div className="w-full max-h-[800px]  text-gray-200 py-10">
  <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-3xl font-semibold text-center mb-8 text-blue-800">Analytics Dashboard</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
      {/* Bar Chart */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg w-[400px] mx-auto">
        <h2 className="text-lg font-semibold text-yellow-400 mb-4">Review Breakdown Bar</h2>
        {countlinedata?.labels?.length > 0 && (
          <div className="h-[300px]">
            <Bar
              data={countlinedata}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    labels: { color: "#FFF" },
                  },
                },
                scales: {
                  x: {
                    grid: { color: "#444" },
                    ticks: { color: "#FFF" },
                  },
                  y: {
                    grid: { color: "#444" },
                    beginAtZero: true,
                    ticks: { color: "#FFF" },
                  },
                },
              }}
            />
          </div>
        )}
      </div>

      {/* Line Chart */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg w-[400px] mx-auto">
        <h2 className="text-lg font-semibold text-green-400 mb-4">Reviews Breakdown with Line</h2>
        {bardata?.labels?.length > 0 && (
          <div className="h-[300px]">
            <Line
              data={bardata}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    labels: { color: "#FFF" },
                  },
                },
                scales: {
                  x: {
                    grid: { color: "#444" },
                    ticks: { color: "#FFF" },
                  },
                  y: {
                    grid: { color: "#444" },
                    beginAtZero: true,
                    ticks: { color: "#FFF" },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
    </div>
    <div className="grid mt-3 grid-cols-1 sm:grid-cols-2 gap-6 justify-center">
      {/* Bar Chart */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg w-[400px] mx-auto">
        <h2 className="text-lg font-semibold text-yellow-400 mb-4">Text Reviews with Rating</h2>
        {bartext?.labels?.length > 0 && (
          <div className="h-[300px]">
            <Bar
              data={bartext}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: true,
                    labels: { color: "#FFF" },
                  },
                },
                scales: {
                  x: {
                    grid: { color: "#444" },
                    ticks: { color: "#FFF" },
                  },
                  y: {
                    grid: { color: "#444" },
                    beginAtZero: true,
                    ticks: { color: "#FFF" },
                  },
                },
              }}
            />
          </div>
        )}
      </div>
      {/* Line Chart */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg p-6 shadow-lg w-[400px] mx-auto">
        <h2 className="text-lg font-semibold text-yellow-400 mb-4">Video Reviews with Rating</h2>
        {barvideo?.labels?.length > 0 && (
          <div className="h-[300px]">
          <Bar
            data={barvideo}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  labels: { color: "#FFF" },
                },
              },
              scales: {
                x: {
                  grid: { color: "#444" },
                  ticks: { color: "#FFF" },
                  title: {
                    display: true, // Enable the title display for x-axis
                    text: "Rating", // Add your label for the x-axis
                    color: "#FFF", // Color for the label
                    font: {
                      size: 14, // Customize font size
                      weight: "bold", // Customize font weight
                    },
                  },
                },
                y: {
                  grid: { color: "#444" },
                  beginAtZero: true,
                  ticks: { color: "#FFF" },
                },
              },
            }}
          />
        </div>
        
        )}
      </div>
    </div>
  </div>
</div>

  );
};

export default Analytics;

