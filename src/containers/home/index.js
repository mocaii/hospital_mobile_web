import React, { Component } from 'react'
import style from './index.css'


class Home extends Component{

    componentDidMount(){
        document.title = "点餐"
    }

    render(){
        return(
            <div>
                <div>
                    <ul className={style.list}>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>哈哈哈哈哈哈</li>
                        <li>哈哈哈</li>
                        <li>lalala</li>
                    </ul>
                </div>
                <div className={style.content}>
                    <p className={style.title}>哈哈哈</p>
                    <div className={style.content_item}>
                        <img className={style.item_img} src="/static/resource/home/item.jpg" alt=""/>
                        <div className={style.item_right}>
                            <p className={style.item_title}>哈哈哈哈哈哈哈</p>
                            <p className={style.sub_title}>月销10份  好评率90%</p>
                            <p className={style.item_price}>￥10</p>
                        </div>
                        <div className={style.operate}>
                           <img src="/static/resource/home/desc.png" alt=""/>
                            <span>1</span>
                            <img  src="/static/resource/home/plus.png" alt=""/>
                        </div>
                        <span className={style.clearfix}></span>
                    </div>
                    <div className={style.content_item}>
                        <img className={style.item_img} src="/static/resource/home/item.jpg" alt=""/>
                        <div className={style.item_right}>
                            <p className={style.item_title}>哈哈哈哈哈哈哈</p>
                            <p className={style.sub_title}>月销10份  好评率90%</p>
                            <p className={style.item_price}>￥10</p>
                        </div>
                        <div className={style.operate}>
                            <img src="/static/resource/home/desc.png" alt=""/>
                            <span>1</span>
                            <img src="/static/resource/home/plus.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.bottom}>
                    <div className={style.cart}>
                        <img src="/static/resource/home/cart.png" alt=""/>
                        <i>1</i>
                    </div>
                    <span className={style.total_price}>共￥10</span>
                    <p className={style.btn}>选好了</p>
                </div>
            </div>
        )
    }
}
export default Home
