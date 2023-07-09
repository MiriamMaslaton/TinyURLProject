import React from "react";
import { Pie } from "react-chartjs-2";
import '../css/userUrls.css'
function PieChart({ chartData }) {
  return (
    <>
      <h2 style={{ textAlign: "center" ,color:"#0980a1"}}>Follow My URL</h2>
      <Pie
      id="pie"
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "What is the most popular source of information where my URL was published?",
            },
          },
        }}></Pie>
    </>
  );
}
export default PieChart;