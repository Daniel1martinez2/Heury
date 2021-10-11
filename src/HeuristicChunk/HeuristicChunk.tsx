import React, {Fragment} from 'react'
import Table from './Table/Table'; 
import { Route } from 'react-router-dom';
export default function HeuristicChunk() {
  return (
    <Fragment>
      <Route path="/table">
        <Table/>
      </Route>
    </Fragment>
  )
}
