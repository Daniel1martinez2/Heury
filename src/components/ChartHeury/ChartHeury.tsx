import React from 'react'
import {Bar} from 'react-chartjs-2'; 
import {heuristics} from '../../library/common/commonData'; 
import {transformTypeToConstansCase} from '../../library/common/commonFunc'; 
import { ObservationType } from '../../library/common/types';

interface ChartHeuryInterface {
  data:  ObservationType[];
}

const ChartHeury: React.FC<ChartHeuryInterface> = ({data}) => {
  const dataArray = Array.from({length: heuristics.length}); 
  const chunkData = data.map(e => e.heuristics).map(heury => heury.map(a => a.split(' ').join('') )); 
  let mergedData: string[] = [];
  chunkData.forEach(e => {
    mergedData.push(...e)
  }); 
  console.log(mergedData);
  dataArray.forEach((e, index) => dataArray[index] = mergedData.filter(h => h === heuristics[index]).length); 
  console.log(dataArray);
  return (
    <div>
      <Bar
        data={{
          labels: heuristics.map(heury => transformTypeToConstansCase(heury)),
          datasets: [{
              label: '# of Heuristic',
              data: dataArray,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],

              borderWidth: 1
          }]
        }}
        height={400}
        width={600}
        options={{
          indexAxis: 'y',
          responsive: true,
          color: 'white',
          plugins:{
          },
          scales: {
            xAxes:{
              ticks:{
                color: '#7F828F',
                font: {
                  family: 'lato'
                }
              },
              grid:{
                color: '#434450'
              },
            },
            yAxes:{
              grid:{
                color: '#434450',
              },
              ticks:{
                color: '#7F828F',
                font: {
                  family: 'lato'
                }
              },
            },
              
          }
          
        }}
      />
    </div>
  )
}

export default ChartHeury
