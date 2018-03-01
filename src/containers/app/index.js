import React from 'react';
import { Route } from 'react-router-dom'
import AsyncComponent from '../../components/AsyncComponent';

const Home = AsyncComponent(() => import('../home'));
const OrderInfo = AsyncComponent(() => import('../orderInfo'));
const MyOrder = AsyncComponent(() => import('../myOrder'));

export default () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/orderInfo" component={OrderInfo}/>
        <Route exact path="/myOrder" component={MyOrder}/>
    </div>
);
