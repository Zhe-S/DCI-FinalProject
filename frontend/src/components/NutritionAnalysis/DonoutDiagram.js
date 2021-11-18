
//{Object.values(data.hits[0].recipe.totalNutrients["FAT"])}
import React, {useEffect, useState} from 'react';
import { Doughnut } from 'react-chartjs-2';
import "./DonoutDiagram.css";
const DonoutDiagram=(props)=>{
  //console.log(props.data.CA.quantity)

  const [data, setData] = useState({})

  useEffect(() => {
    const newData = {
      labels: ['Calcium', 'Fat', 'Sugar', 'Cholesterol', 'ENERC_KCAL', 'Protein'],
      datasets: [
        {
          label: '# of Votes',
          data:[
          props.data.CA.quantity,
          props.data.FAT.quantity,
          props.data.SUGAR.quantity,
          props.data.CHOLE.quantity,
          props.data.ENERC_KCAL.quantity,
          props.data.PROCNT.quantity
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
    setData(newData)
  }, [props])
    


 return(
    <div>
      <div className='header'>
        <div className='links'>
          <Doughnut data={data} />
        </div>
      </div>
    </div>
  )}


export default DonoutDiagram;