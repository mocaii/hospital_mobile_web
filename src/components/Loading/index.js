import React from 'react'
import cln from 'classnames'
import style from './index.css';

const Loading = (props)=>{
    return (
        <div className={style.fixedLayer} style={{display: props.isShow ? "block" : "none"}}>
            <div className={cln(style.center_layer)}>
                <div className={style.loadEffect}>
                    <span/><span/><span/><span/><span/><span/><span/><span/>
                </div>
            </div>
        </div>
    );
};

export default Loading;