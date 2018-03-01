import React, { Component } from 'react'
import style from './index.css'

class OrderInfo extends Component{
    constructor(props){
        super(props);
        $("body").css("backgroundColor","#f5f5f5");
        document.title = "确认订单"
    }

    componentWillUnmount(){
        $("body").css("backgroundColor","#fff");
    }

    render(){
        return(
            <div>
                <div className={style.contact_info}>
                    <p>
                        <span>联系人</span>
                        <input type="text" value="mocaimei"/>
                    </p>
                    <p>
                        <span>病房号</span>
                        <div className={style.select_box}>
                            <select name="" id="">
                                <option value="A栋">A栋</option>
                                <option value="B栋">B栋</option>
                                <option value="C栋">C栋</option>
                            </select>
                            <select name="" id="">
                                <option value="1层">1层</option>
                                <option value="2层">2层</option>
                                <option value="3层">3层</option>
                            </select>
                            <select name="" id="">
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                            </select>
                        </div>
                    </p>
                    <p>
                        <span>手机号码</span>
                        <input type="text" value="18816780660"/>
                    </p>
                </div>

                <div className={style.order_info}>
                    <p className={style.order_info_title}>订单明细</p>
                    <p className={style.order_item}><span>皮蛋瘦肉粥</span><span>*1</span><span>￥10</span></p>
                    <p className={style.order_item}><span>皮蛋瘦肉粥</span><span>*1</span><span>￥10</span></p>
                    <p className={style.sub_total_price}>小计<span>￥20</span></p>
                </div>

                <div className={style.bottom}>
                    <p className={style.btn}>提交订单</p>
                </div>
            </div>
        )
    }
}

export default OrderInfo
