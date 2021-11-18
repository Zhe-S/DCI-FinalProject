
import React, {useEffect, useState} from 'react';
import { Bar} from 'react-chartjs-2';

//VITD ,VITC VITB12 VITB6A

const BarChart=(props)=>{

    const [data, setData] = useState({})

    useEffect(() => {
      const datasets = {
        labels: ['Vitamin K', 'Vitamin A', 'Vitamin D', 'Vitamin B6', 'Vitamin B12', 'Vitamin C'],
        datasets: [
          {
            label: 'Vitamin µg',
            data: [props.data.VITK1.quantity,
            props.data.VITA_RAE.quantity,
            props.data.VITD,
            props.data.VITB6A.quantity,
            props.data.VITB12,
            props.data.VITC.quantity
                ],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
    setData(datasets)
  },[props])
  
  
   return(
    <>
      <div className='header'>
        <div className='links'>
          <Bar data={data} />
        </div>
      </div>
    </>)}
  
  
  export default BarChart;