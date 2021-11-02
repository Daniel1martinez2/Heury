import React from 'react'
import {Bar} from 'react-chartjs-2'; 
import {heuristics} from '../../library/common/commonData'; 
import {transformTypeToConstansCase} from '../../library/common/commonFunc'; 
import { ObservationType } from '../../library/common/types';

interface ChartHeuryInterface {
  data:  ObservationType[];
}

const ChartHeury: React.FC<ChartHeuryInterface> = ({data}) => {
  // improve 
  const dataArray = Array.from({length: heuristics.length}); 
  const chunkData = data.map(e => e.heuristics).map(heury => heury.map(a => a.split(' ').join('') )); 
  let mergedData: string[] = [];
  chunkData.forEach(e => {
    mergedData.push(...e)
  }); 
  console.log(mergedData);
  dataArray.forEach((e, index) => dataArray[index] = mergedData.filter(h => h === heuristics[index]).length); 
  console.log(dataArray);

  const barColors: string[] = [
    '0, 201, 167',
    '255, 140, 0',
    '255, 0, 128',
    '142, 45, 226',
    '247, 227, 51',
    '41, 72, 255',
    '252, 103, 250',
    '254, 180, 123',
    '248, 80, 50',
    '168, 224, 99'
  ];

  const setColor = (type: 'back' | 'border') => {
    return barColors.map(color => type === 'back'? `rgba(${color}, 0.2)`: `rgba(${color}, 1)`)
  }

  return (
    <div>
      <Bar
        data={{
          labels: heuristics.map(heury => transformTypeToConstansCase(heury)),
          datasets: [{
              label: '# of Heuristic',
              data: dataArray,
              backgroundColor: setColor('back'),
              borderColor: setColor('border'),

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