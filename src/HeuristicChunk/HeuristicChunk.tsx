import React, {Fragment} from 'react'
import Table from './Table/Table'; 
import { Route } from 'react-router-dom';
import  DocumentArea from './Document/DocumentArea'; 
import EmptyDocument from './Document/EmptyDocument/EmptyDocument'; 

export default function HeuristicChunk() {
  return (
    <Fragment>
      <Route path="/" exact>
        <EmptyDocument/>
      </Route>
      <Route path="/table">
        <Table/>
      </Route>
      <Route path="/document">
        <DocumentArea/>
      </Route>
    </Fragment>
  )
}
