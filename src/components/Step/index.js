import React from 'react'
import cln from 'classnames'
import { isNullValue } from '../../tools/common'
import style from './index.css';

export default (props) => (
    <div className={cln(style.stepContainer,props.className)}>
        <div className={style.imgDiv}>
            <img src={props.src}
                 alt={"步骤"}
            />
            <span>{props.value}</span>
        </div>
        {!isNullValue(props.text) &&
        <div className={style.stepText}>
            {props.text}
        </div>
        }
    </div>
);