import React from 'react'
import cln from 'classnames'
import { isNullValue, public_url } from '../../tools/common'
import style from './index.css';

export default (props) => (
    <div className={cln(style.rel,style.title,props.className)}>
        <img src={public_url + '/static/resource/common/goBack.png'}
             alt={"返回"}
             className={cln(style.abs,style.left)}
             onClick={props.onClick}
        />
        <div className={cln(style.abs,style.center)}>{props.title}</div>
        {!isNullValue(props.rightValue) &&
        <div className={cln(style.abs,style.right)}>{props.rightValue}</div>
        }
    </div>
);