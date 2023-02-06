import React, { useEffect, useState } from 'react'
import Card from '../../components/Card'
import { Bar } from 'react-chartjs-2';
import { stalls } from '../../constants/stall';
import { backend_url } from '../../constants/network';

const chartOptions = {
  responsive: true,
  indexAxis: 'y',
  scales: {
    y: {
      title: {
        display: true,
        text: 'Stall'
      }
    },
    x: {
      title: {
        display: true,
        text: 'People Count'
      },
      ticks: {
        stepSize: 1
      }
    }
  },
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  plugins: {
    legend: {
      display: false
    }
  },
}

const PopularStallCard = ({ mode }) => {
  const [labels, setLabels] = useState(Object.values(stalls));
  const [values, setValues] = useState([0, 0, 0]);
  const data = {
    labels,
    datasets: [
      {
        label: "Popular Stalls",
        backgroundColor: "#6F6AF880",
        borderColor: "#6F6AF8",
        data: values
      }
    ]
  }

  useEffect(() => {
    const sse = new EventSource(backend_url + "/api/count/queues");
    sse.onmessage = (e) => {
      const data = Object.entries(JSON.parse(e.data)).sort(([,a], [,b]) => mode === 'Descending' ? b - a : a - b);
      const fetchedLabels = [];
      const fetchedValues = [];
      for (const [label, value] of data) {
        fetchedLabels.push(stalls[label]);
        fetchedValues.push(value);
      }
      setLabels(fetchedLabels);
      setValues(fetchedValues);
    }

    sse.onerror = () => {
      console.log("Error");
      sse.close();
    }

    return () => sse.close();
  },[mode])

  return (
    <Card className='h-[80vh]'>
      <p className="font-bold text-2xl">{mode === 'Descending' ? "Most popular stalls" : "Stalls with the Shortest Queue"}</p>
      <div className='flex mt-6 overflow-hidden'>
        <Bar data={data} options={chartOptions} />
      </div>
    </Card>
  )
}

export default PopularStallCard
