import React, { Component } from 'react'
import style from './index.css'


class MyOrder extends Component{
    constructor(props){
        super(props);

        document.title = "我的订单"
    }

    render(){
        return(
            <div className={style.wrapper}>
                <div className={style.order_item}>
                    <p className={style.item_title}><span className={style.name}>皮蛋瘦肉粥&nbsp;&nbsp;&nbsp;></span><span>未送达</span></p>
                    <p className={style.item_price_num}><span className={style.price}>￥10</span><span>共1件商品</span></p>
                </div>
                <div className={style.order_item}>
                    <p className={style.item_title}><span className={style.name}>皮蛋瘦肉粥&nbsp;&nbsp;&nbsp;></span><span>已完成</span></p>
                    <p className={style.item_price_num}><span className={style.price}>￥10</span><span>共1件商品</span></p>
                    <p className={style.item_bottom}>
                        <span className={style.btn}>再来一单</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default MyOrder
