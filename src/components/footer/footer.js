import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import style from './footer.css'



class Footer extends Component{

    changeStatus = (text,e) =>{
        // this.props.changeFooter(text);
    }

    render(){
        let props = this.props;
        return(
            <footer className={style.footer}>
                <ul>
                    <li className={props.footer === 0 ? style.footer_item_home_selected : style.footer_item_home}><Link to="/"><i></i>首页</Link></li>
                    <li className={props.footer === 1 ? style.footer_item_concern_selected : style.footer_item_concern}><Link to="/message"><i></i>消息</Link><span className={style.red_dot}></span></li>
                    <li className={props.footer === 2 ? style.footer_item_user_selected :style.footer_item_user}><Link to="/user"><i></i>我的</Link></li>
                </ul>
            </footer>
        )
    }
    
}

export default Footer;