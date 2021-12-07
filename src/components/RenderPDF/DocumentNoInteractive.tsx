import React from 'react';
// import styles from '../DocumentView/DocumentView.module.css'; 
import {ObservationType} from '../../library/common/types'; 
import { normalizeText } from '../../library/common/commonFunc';
import {setSeverityColor} from '../../library/common/commonFunc'; 
import {Document, Page, View, Text, Image} from '@react-pdf/renderer'; 
interface DocumentViewInterface {
  observationData: ObservationType;
  index: number
}

const DocumentNoInteractive: React.FC<DocumentViewInterface>= ({observationData, index}) => {
  const {notes, heuristics, severity, evidence, recommendations} = observationData; 
  
  return (  
    <View style={{
      display: 'flex',
      flexDirection: 'column',
      // gap: '1em ',
      width: '100%', 
      maxWidth: '875px',
    }}>
      {/* Title */}
      <View style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '16px',
        color: '#FAFAFE',
      }}>
        <Text style={{
          fontWeight: 900
        }}>{index+1}</Text>
        <Text 
          style={{
            backgroundColor: setSeverityColor(severity),
            color: severity === '2 Middle'? '#1F1D2C' : '#FAFAFE',
            padding:'.2em .8em', 
            borderRadius:'1000px', 
            fontWeight: 900,
            fontSize: '12px',
          }}
        >
          {severity}
        </Text>
      </View>
      {/* Content */}
      <View style={{
        color: '#FAFAFE',
        display: 'flex',
        flexDirection: 'column',
        // gap: '1em',
        // margin: '100px'
      }}>

        {/* Evidence */}
        <View style={{
          backgroundColor: '#262837',
          padding: '1.5em',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          // gap: '.5em', 
        }}>
          <Text style={{
            color: '#7F8191',
            fontSize: '16px'
          }}>Evidence</Text>
          <View style={{
            width: '100%',
            borderRadius: '8px', 
            maxHeight: '500px', 
            position: 'relative',
          }}>
            <Image
              src={evidence || "https://raw.githubusercontent.com/gregnb/react-to-print/HEAD/logo.png" } 
              style={{
                width:' 100%',
                height:' 100%',
                objectFit: 'cover',
                objectPosition: '0 0',
                borderRadius: '8px', 
              }}
             />
          </View>
        </View>



        <View style={{
          display: 'flex',
          // gap: '1em',
        }}>
          <View style={{
            display: 'flex',
            flexDirection: 'column',
            // gap: '1em', 
            width: '450px',
          }}>
            <View style={{
              backgroundColor: '#262837',
              padding: '1.5em',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              // gap: '.5em', 
            }}>
              <Text style={{
                fontSize: '16px',
                color: '#7F8191',
              }}>Notes</Text>
              <Text 
                style={{
                  fontSize: '12px',
                }}
                >{notes}
              </Text>
            </View>
            <View style={{
              backgroundColor: '#262837',
              padding: '1.5em',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              // gap: '.5em', 
            }}>
              <Text style={{
                fontSize: '16px',
                color: '#7F8191',
              }}>Heuristics</Text>
              {/* <ul style={{
                paddingLeft:' 1em',
                display: 'flex',
                flexDirection: 'column',
                // gap: '.3em',
              }}>
              {heuristics.map(elem => <li key={nanoid()} >{normalizeText(elem)}</li>)}
              </ul> */}
            </View>
          </View>
          <View style={{
              backgroundColor: '#262837',
              padding: '1.5em',
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              // gap: '.5em', 
              flexGrow: 1,
              maxWidth: '545px',
            }}
          >
            <Text style={{
              fontSize: '16px',
              color: '#7F8191',
            }}>Recommendation</Text>
            <Text style={{
              fontSize: '12px',
            }}>{recommendations}</Text>
          </View>
        </View>
      
      </View>

    </View> 
  )
}
export default DocumentNoInteractive; 