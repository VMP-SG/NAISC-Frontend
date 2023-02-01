import React, { useState, useEffect, useRef } from 'react'
import Dropdown from '../../components/Dropdown'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import LogoHome from '../../assets/LogoHome.png';
import { UserIcon as UserIconOutline } from '@heroicons/react/24/outline';
import { UserIcon } from "@heroicons/react/24/solid";
import MapOverlay from "../../assets/MapOverlay.png";
import { HeatMapGrid } from "react-grid-heatmap";
import { dataPoints, coordinates, isWithinZoneBoundaries } from '../../constants/heatmap';
import { getGraphData } from '../../constants/data';
import { Line } from 'react-chartjs-2';

const heatmapOptions = ['Overall', 'Zone A', 'Zone B', 'Zone C', 'Zone D', 'Zone E'];
const zoneCountOptions = heatmapOptions.slice(1);
const COUNT_PER_ICON = 10;
const chartOptions = {
  response: true,
  plugins: {
    legend: {
      display: false
    }
  }
}

const HomePage = ({ open, onOpenSidebar, onCloseSidebar }) => {
  const [data, setData] = useState({A: 0, B: 0, C: 0, D: 0, E: 0});
  const [heatmapData, setHeatmapData] = useState(dataPoints);
  const [heatmapSelectedOption, setHeatmapSelectedOption] = useState(heatmapOptions[0]);
  const [zoneCountSelectedOption, setZoneCountSelectedOption] = useState(zoneCountOptions[0]);
  const [cellHeight, setCellHeight] = useState(0);
  const ref = useRef(null);
  
  const totalCount = Object.values(data).reduce((a, b) => a + b);
  const zonalCount = data[zoneCountSelectedOption.split(" ")[1]];
  const [labels, graphData] = getGraphData();

  const totalIcons = [];
  for (let i = 0; i < 30; i++) {
    if (i < totalCount / COUNT_PER_ICON) {
      totalIcons.push(<UserIcon className='w-4' key={i} />)
    } else {
      totalIcons.push(<UserIconOutline className='w-4' key={i} />)
    }
  }

  const zonalIcons = Array.from({ length: zonalCount / COUNT_PER_ICON }, (_, i) => <UserIcon fill='#6F6AF8' className='w-4' key={i} />).concat(totalIcons.slice(zonalCount / COUNT_PER_ICON))

  useEffect(() => {
    const zoneCountSse = new EventSource(import.meta.env.VITE_BACKEND_URL + "/count/zones");
    const tableCountSse = new EventSource(import.meta.env.VITE_BACKEND_URL + "/count/tables");

    zoneCountSse.onmessage = (e) => {
      setData(JSON.parse(e.data));
    }

    tableCountSse.onmessage = (e) => {
      const rawTableCountData = JSON.parse(e.data);
      const newHeatmapData = dataPoints;
      for (const tableId in rawTableCountData) {
        const tableCoordinates = coordinates[tableId];
        const tableCellCount = Math.ceil(rawTableCountData[tableId] / tableCoordinates.length);
        for (const tableCoordinate of tableCoordinates) {
          const [y, x] = tableCoordinate;
          newHeatmapData[y][x] = tableCellCount;
        }
      }
      console.log(newHeatmapData);
      setHeatmapData(newHeatmapData);
    }

    zoneCountSse.onerror = () => {
      console.log("Zone Count SSE Error");
      zoneCountSse.close();
    }

    tableCountSse.onerror = () => {
      console.log("Table Count SSE Error");
      tableCountSse.close();
    }

    return () => {
      zoneCountSse.close();
      tableCountSse.close();
    };
  },[]);

  useEffect(() => {
    if (ref.current) {
      setCellHeight(ref.current.clientHeight / 13);
    }
  },[ref])

  return (
    <>
      <Sidebar open={open} onOpen={onOpenSidebar} onClose={onCloseSidebar} />
      <div className='flex flex-col w-screen pl-40 pr-10 py-12'>
        <img src={LogoHome} className='h-[45px] w-[310px] mb-7'/>
        <Card className='w-full h-[70vh]'>
          <div className="flex flex-row justify-between z-20">
            <h2 className="font-bold text-2xl">Heatmap</h2>
            <Dropdown options={heatmapOptions} selectedOption={heatmapSelectedOption} setSelectedOption={setHeatmapSelectedOption} mode='primary' />
          </div>
          <div className='w-full h-full mt-6 relative' ref={ref}>
            <div className='w-full h-full z-10 absolute'>
              <HeatMapGrid 
                data={heatmapData}
                cellHeight={cellHeight}
                cellStyle={(y, x, ratio) => {
                  return ({
                    background: `${heatmapSelectedOption === "Overall" || isWithinZoneBoundaries(x, y, heatmapSelectedOption.split(" ")[1]) ? `rgb(111, 106, 248, ${ratio}` : `rgb(210, 210, 210, ${ratio}`}`,
                    borderWidth: 0
                  })
                }}
                square
              />              
            </div>
            <div className='absolute z-0 inset-0 h-full w-full flex gap-12 font-bold'>
              <img src={MapOverlay} className='h-full object-cover'/>
              <div className='h-full w-full flex flex-col gap-8'>
                <h2 className='text-2xl'>Legend</h2>
                <div className='flex gap-8 items-center'>
                  <div className='w-[50px] h-[50px] bg-[#1D6929]' />
                  <p className='text-xl'>Staircase</p>
                </div>
                <div className='flex gap-8 items-center'>
                  <div className='w-[50px] h-[50px] bg-[#7A4736]' />
                  <p className='text-xl'>Switch Room</p>
                </div>
                <div className='flex gap-8 items-center'>
                  <div className='w-[50px] h-[50px] bg-[#913065]' />
                  <p className='text-xl'>Office</p>
                </div>
                <div className='flex gap-8 items-center'>
                  <div className='w-[50px] h-[50px] bg-[#1780B8]' />
                  <p className='text-xl'>Dishwashing Area</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
        <div className='flex mt-10 gap-10'>
          <div className='flex flex-col justify-between'>
            <Card>
              <h2 className="font-bold text-2xl whitespace-nowrap">People Count</h2>
              <div className='grid grid-cols-10 gap-[6px] mt-4'>
                {totalIcons}
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <h1 className='text-4xl font-bold'>~{totalCount}</h1>
                <p className='text-2xl leading-7'>In <br />Total</p>
              </div>
            </Card>
            <Card>
              <div className='flex justify-between items-center'>
                <h2 className="font-bold text-2xl whitespace-nowrap">Zonal Count</h2>
                <Dropdown options={zoneCountOptions} selectedOption={zoneCountSelectedOption} setSelectedOption={setZoneCountSelectedOption} />
              </div>
              <div className='grid grid-cols-10 gap-[6px] mt-4'>
                {zonalIcons}
              </div>
              <div className='mt-6 flex justify-between items-center'>
                <h1 className='text-5xl font-bold'>{zonalCount}</h1>
                <p className='text-2xl leading-7'>In <br />Total</p>
              </div>
            </Card>
          </div>
          <Card className='w-full h-full'>
            <h2 className='font-bold text-2xl'>People Count over the Past Day</h2>
            <div className='flex mt-6 overflow-hidden h-full'>
              <Line data={{ labels, datasets: [{ data: graphData, borderColor: '#6F6AF8', backgroundColor: '#6F6AF870', tension: 0.3 }]}} options={chartOptions} />
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default HomePage
