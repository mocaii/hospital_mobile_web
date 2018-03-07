import React, { Component } from 'react'
import style from './index.css'

class OrderDetail extends Component{
    constructor(props){
        super(props);

        $("body").css("backgroundColor","#f5f5f5");
    }

    componentWillUnmount(){
        $("body").css("backgroundColor","#fff");
    }

    render(){
        return(
            <div>
                <div className={style.order_info}>
                    <p className={style.order_info_title}>订单明细</p>
                    <p className={style.order_item}><span>皮蛋瘦肉粥</span><span>*1</span><span>￥10</span></p>
                    <p className={style.order_item}><span>皮蛋瘦肉粥</span><span>*1</span><span>￥10</span></p>
                    <p className={style.sub_total_price}>小计<span>￥20</span></p>
                </div>

                <div className={style.order_info}>
                    <div className={style.other_info}>
                        <p className={style.order_info_title}>其他信息</p>
                        <p className={style.order_item}><span>订 单 号</span><span>123456789</span></p>
                        <p className={style.order_item}><span>下单时间</span><span>2018-3-7 10:58</span></p>
                        <p className={style.order_item}><span>收货信息</span><span>莫彩梅 18816780660</span></p>
                        <p className={style.order_item}><span></span><span>广东省人民医院A栋405</span></p>
                    </div>
                </div>

                <div className={style.bottom}>
                    <p className={style.btn}>再来一单</p>
                </div>
            </div>
        )
    }
}

export default OrderDetail