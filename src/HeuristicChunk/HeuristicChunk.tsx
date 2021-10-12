import React, {Fragment} from 'react'
import Table from './Table/Table'; 
import { Route } from 'react-router-dom';
import  DocumentArea from './Document/DocumentArea'; 
export default function HeuristicChunk() {
  return (
    <Fragment>
      <Route path="/table">
        <Table/>
      </Route>
      <Route path="/document">
        <DocumentArea/>
      </Route>
    </Fragment>
  )
}
