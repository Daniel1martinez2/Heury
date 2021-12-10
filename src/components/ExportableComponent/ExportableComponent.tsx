import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import {useReactToPrint} from 'react-to-print'; 
import DocumentView from '../DocumentView/DocumentView';
//https://www.npmjs.com/package/react-to-print

// Using a functional component, you must wrap it in React.forwardRef, and then forward the ref to
// the node you want to be the root of the print (usually the outer most node in the ComponentToPrint)
// https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components

const pageStyle = `
  @page {
    size: A4;
  
  }

  @media all {
    .pagebreak {
      display: always;
    }
  }

  @media print {
    .pagebreak {
      page-break-before: always;
    }
  }
`;

const Example:React.FC<any> = React.forwardRef((props, ref:any) => {
  return (
    <div 
      ref={ref}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2em',
        padding: '1em 2em',
        width: '100vw',
        maxWidth: '875px'
      }}
    >
      {props.observations.map((observation:any, index:any) => (
        <>
          <div className="page-break" />
          <DocumentView key={observation.id} observationData={observation} index={index}/>
        </>
      ))}
    </div>
  );
})

const ExportableComponent:React.FC<any> = forwardRef(({observations, projectName}, ref) => {
    const componentRef = useRef<any>(null);
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
      pageStyle: pageStyle,
      documentTitle: projectName.split(' ').join('_')
    });
    useImperativeHandle(ref, () => ({

      getAlert() {
        // alert("getAlert from Child");
        if(handlePrint){
          handlePrint(); 
        }

      }
  
    }))
  
    return (
      <div>
        {/* <ReactToPrint
          pageStyle={pageStyle}
          trigger={() => <button style={{display: 'none'}}>Print this out!</button>}
          content={() => componentRef.current}
          removeAfterPrint={true}
          copyStyles={true}
          documentTitle="heury"
        /> */}
        {/* <button onClick={handlePrint}>Print this out!</button> */}
        <Example ref={componentRef} observations={observations} />
      </div>
    );
  }
)



export default ExportableComponent;
