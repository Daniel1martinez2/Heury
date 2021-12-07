import React from 'react'; 
import {ObservationType} from '../../library/common/types'; 
import DocumentNoInteractive from './DocumentNoInteractive';
import {setSeverityColor} from '../../library/common/commonFunc'; 
import {View, Text, Document, Page, Image} from '@react-pdf/renderer'; 

interface DocuListProps {
  observations: ObservationType[]
}
const DocuList: React.FC<DocuListProps> = ({observations}) => {
  // const {notes, heuristics, severity, evidence, recommendations} = observations[0]; 
  return (
    <Document>
      <Page size="A4" style={{backgroundColor: '#1F1D2C'}}>

        {/* {[1,2,3].map(e => <Text>a</Text>)} */}
        
        <View style={{
          padding: '30px',
        }}>
          {observations.map((observation, index) => <DocumentNoInteractive key={observation.id} observationData={observation} index={index}/>)}
        </View>
        {/* {observations.map((observation, index) => <DocumentNoInteractive key={observation.id} observationData={observation} index={index}/>)} */}
        
      </Page>
    </Document>
  )
}

export default DocuList
