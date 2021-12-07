import React, { useRef } from 'react';
import ReactToPrint from 'react-to-print';
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
      display: none;
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
    // <div ref={ref}>
    //   {[1,2,3,4].map(elem => <h1>aaa</h1>)}
    // </div>
    <div 
      ref={ref}
      style={{
        padding: '1em 2em',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4em', 
      }}
    >
      {props.observations.map((observation:any, index:any) => <DocumentView key={observation.id} observationData={observation} index={index}/>)}
    </div>
  );
})

const ExportableComponent:React.FC<any> = ({observations}) => {
  const componentRef = useRef<any>(null);
  return (
    <div>
      <ReactToPrint
        pageStyle={pageStyle}
        trigger={() => <button>Print this out!</button>}
        content={() => componentRef.current}
      />
      <Example ref={componentRef} observations={observations} />
      {/* {observations.map((observation:any, index:any) => <DocumentView ref={componentRef} key={observation.id} observationData={observation} index={index}/>)} */}
    </div>
  );
};



export default ExportableComponent;
