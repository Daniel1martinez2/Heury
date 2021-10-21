import React, {Fragment, lazy, Suspense} from 'react'
import { Route, useParams } from 'react-router-dom';
import {ProjectParams} from '../common/types'; 
// import EmptyDocument from './Document/EmptyDocument/EmptyDocument'; 

const  DocumentArea = lazy(() => import('./Document/DocumentArea')); 
const Table = lazy(() => import('./Table/Table'));

export default function HeuristicChunk() {
  const params = useParams<ProjectParams>(); 
  const {projectId} = params; 
  return (
    <Fragment>
        <Suspense fallback={<h1>loading 🔥</h1>}>
          <Route path={`/project/${projectId}/table`}>
            <Table/>
          </Route>
        </Suspense>
      <Suspense fallback={<h1>loading 🔥</h1>}>
        <Route path={`/project/${projectId}/document`}>
          <DocumentArea/>
        </Route>
      </Suspense>
    </Fragment>
  )
}
