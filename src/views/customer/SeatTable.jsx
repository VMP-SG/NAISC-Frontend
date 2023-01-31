import React, { useState } from 'react'
import Card from '../../components/Card'
import Dropdown from '../../components/Dropdown'
import StatusTag from './StatusTag'
import { ids } from '../../constants/id'

const options = ["Descending", "Ascending"];

const SeatTable = () => {
  const data = [
    {
      zone: 'A',
      tableCount: ids.find((id) => id.zone === 'A').tables.length,
      emptyTables:  ids.find((id) => id.zone === 'A').tables.length,
      peopleCount: 10
    },
    {
      zone: 'B',
      tableCount: ids.find((id) => id.zone === 'B').tables.length,
      emptyTables: Math.floor(ids.find((id) => id.zone === 'B').tables.length / 3),
      peopleCount: 15
    },
    {
      zone: 'C',
      tableCount: ids.find((id) => id.zone === 'C').tables.length,
      emptyTables: 0,
      peopleCount: 20
    }
  ]
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const sortedData = [...data].sort((a, b) => {
    if (a.emptyTables < b.emptyTables) {
      return selectedOption === 'Ascending' ? -1 : 1;
    } else if (a.emptyTables > b.emptyTables) {
      return selectedOption === 'Ascending' ? 1 : -1;
    } else return 0;
  });
  return (
    <Card className='h-[80vh]'>
      <div className="flex flex-row justify-between">
        <p className="font-bold text-2xl">Where to find seats</p>
        <Dropdown options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      </div>
      <table className='text-lg mt-6'>
        <thead>
          <tr>
            <th><p className='mb-3 text-gray'>#</p></th>
            <th><p className='mb-3 text-gray'>Zone</p></th>
            <th><p className='mb-3 text-gray'>Total Table Count</p></th>
            <th><p className='mb-3 text-gray'>Empty Tables</p></th>
            <th><p className='mb-3 text-gray'>Status</p></th>
            <th><p className='mb-3 text-gray'>People Count</p></th>
          </tr>
        </thead>
        <tbody>
          {
            sortedData.map((dataItem, i) => 
              <tr className='border-t-2 border-gray text-center' key={i}>
                <td><p className='py-3 text-gray'>{i+1}</p></td>
                <td><p className='py-3'>{dataItem.zone}</p></td>
                <td><p className='py-3 text-gray'>{dataItem.tableCount}</p></td>
                <td>
                  <div className='py-3 flex justify-center items-center gap-8'>
                    <div>
                      <p className='leading-5 text-right'>{dataItem.emptyTables}</p>
                      <p className='text-gray leading-5 text-right w-14'>{Math.round(dataItem.emptyTables / dataItem.tableCount * 1000) / 10}%</p>
                    </div>
                    <div className='w-[200px] h-[12px] rounded-full bg-gray bg-opacity-30'>
                      <div style={{ width: `${Math.floor(dataItem.emptyTables / dataItem.tableCount * 100)}%` }} className='bg-purple rounded-full h-full transition-all' />
                    </div>
                  </div>
                </td>
                <td>
                  <div className='py-3 flex items-center justify-center'>
                    <StatusTag ratio={dataItem.emptyTables / dataItem.tableCount} />
                  </div>
                </td>
                <td><p className='py-3 text-gray'>{dataItem.peopleCount}</p></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </Card>
  )
}

export default SeatTable
