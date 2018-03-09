import React, { Component } from 'react'
import style from './index.css'
import { dispatch_func } from '../../modules/home'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Home extends Component{
    constructor(props){
        super(props);

        let navList = [
            {
                "name" : "哈哈哈",
                "id" : 1
            },
            {
                "name" : "哈哈哈",
                "id" : 2
            },
            {
                "name" : "哈哈哈",
                "id" : 3
            },
            {
                "name" : "哈哈哈",
                "id" : 4
            },
            {
                "name" : "哈哈哈",
                "id" : 5
            }
        ]
        this.props.getNavList(navList);

        let dishesList = [
            {
                "title" : "红烧排骨",
                "id" : 1,
                "monthSales" : 10,
                "price" : 10,
                "image" : "/static/resource/home/item.jpg"
            },
            {
                "title" : "皮蛋瘦肉粥",
                "id" : 1,
                "monthSales" : 10,
                "price" : 10,
                "image" : "/static/resource/home/item.jpg"
            },
            {
                "title" : "蒸水蛋",
                "id" : 1,
                "monthSales" : 10,
                "price" : 10,
                "image" : "/static/resource/home/item.jpg"
            }
        ]
        this.props.getDishesList(dishesList)

        // let option = {};
        // this.handleAjax('/',option,(result) => {
        //     this.props.getNavList(result);
        // },"get")
    }

    componentDidMount(){
        document.title = "点餐"
    }

    //菜单切换
    changeDishesList(id){
        console.log(id);
        let dishesList = [
            {
                "title" : "皮蛋瘦肉粥",
                "id" : 1,
                "monthSales" : 10,
                "price" : 10,
                "image" : "/static/resource/home/item.jpg"
            },
            {
                "title" : "蒸水蛋",
                "id" : 1,
                "monthSales" : 10,
                "price" : 10,
                "image" : "/static/resource/home/item.jpg"
            }
        ];
        this.props.getDishesList(dishesList);

        // let option = {
        //     id : id
        // }
        // this.handleAjax("/",option,(result) => {
        //     this.props.getDishesList(result);
        // },"get")
    }

    handleAjax(url, options, successHandle, requestType){
        requestType = requestType || "get";
        $.ajax({
            type:requestType,
            url: url,
            dataType:'json',
            data:options,
            cache: false,
            error: (result)=>{
                successHandle(result);
            }
        });
    }

    render(){
        let props = this.props
        return(
            <div>
                <div>
                    <ul className={style.list}>
                        {props.navList.map((item,index) =>{
                            return(
                                <li id={item.id} key={index} onClick={() => {this.changeDishesList(item.id)} }>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
                <div className={style.content}>
                    <p className={style.title}>{}</p>
                    {props.dishesList.map((item,index) => {
                        return(
                            <div className={style.content_item} id={item.id} key={index}>
                                <img className={style.item_img} src={item.image} alt=""/>
                                <div className={style.item_right}>
                                    <p className={style.item_title}>{item.title}</p>
                                    <p className={style.sub_title}>月销{item.monthSales}份</p>
                                    <p className={style.item_price}>￥{item.price}</p>
                                </div>
                                <div className={style.operate}>
                                    <img src="/static/resource/home/desc.png" alt=""/>
                                    <span>1</span>
                                    <img  src="/static/resource/home/plus.png" alt=""/>
                                </div>
                                <span className={style.clearfix}></span>
                            </div>
                        )
                    })}

                </div>
                <div className={style.bottom}>
                    <div className={style.cart}>
                        <img src="/static/resource/home/cart.png" alt=""/>
                        <i>1</i>
                    </div>
                    <span className={style.total_price}>共￥10</span>
                    <Link className={style.btn} to="/orderInfo">选好了</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => (state.home);

const mapDispatchToProps = dispatch => bindActionCreators(dispatch_func, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Home)

