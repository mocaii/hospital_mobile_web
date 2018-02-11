import React from 'react';
import { Route } from 'react-router-dom'
import AsyncComponent from '../../components/AsyncComponent';

const Home = AsyncComponent(() => import('../home'));
export default () => (
    <div>
        <Route exact path="/" component={Home}/>
    </div>
);
