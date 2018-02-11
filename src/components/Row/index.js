import React from 'react'
import cln from 'classnames'
import { Link } from 'react-router-dom'
import style from './index.css';
import { isNullValue } from '../../tools/common'

export default (props) => {
    const type = props.type;
    if(type === "input" || type === "number" || type === "tel"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}>
                {!isNullValue(props.title) &&
                <div className={props.titleClassName}>{props.title}</div>
                }
                <input type={type}
                       className={cln(style.rentInput,{[style.withouttitle]:isNullValue(props.title)},props.valueClassName)}
                       placeholder={props.placeholder}
                       value={props.value||""}
                       onChange={(e)=>{
                           if(type==="number" || type === "tel"){
                               e.target.value.length <= props.maxLength && props.onChange(e.target.value);
                           }else {
                               props.onChange(e.target.value);
                           }

                       }}
                       maxLength={props.maxLength}
                />
            </li>
        );
    } else if(type === "select"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}
                onClick={props.onClick}
            >
                <div className={props.titleClassName}>{props.title}</div>
                <i className={props.valueClassName}>{props.value}</i>
                <span/>
            </li>
        );
    } else if(type === "radio"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}>
                <div className={props.titleClassName}>{props.title}</div>
                <i className={cln(style.is_check,{[style.check_on]:props.isCheck},props.valueClassName)}
                   onClick={props.handleClick}
                />
            </li>
        );
    } else if(type === "date"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}>
                <div className={props.titleClassName}>{props.title}</div>
                <i className={props.valueClassName}>{props.value}</i>
                <span/>
                <input type="date"
                       className={style.date}
                       onChange={(e)=>{
                           props.onChange(e.target.value);
                       }}
                />
            </li>
        );
    } else if(type === "title"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}>
                <div className={cln(style.fwBold,props.titleClassName)}>{props.title}</div>
            </li>
        );
    } else if(type === "info"){
        return(
            <li className={cln(style.li,style.infoLi,style.bdnone,props.className)}>
                <div className={cln(style.infoTitle,props.titleClassName)}>{props.title}</div>
                <input type={type}
                       className={cln(style.rentInput,style.infoTitle,style.infoContent,props.valueClassName)}
                       placeholder={props.placeholder}
                       value={props.value||""}
                       readOnly={props.readOnly || true}
                       onChange={(e)=>{props.onChange(e.target.value);}}
                />
            </li>
        );
    } else if(type === "link"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}>
                <div className={props.titleClassName}>{props.title}</div>
                <Link to={props.to}>
                    <i className={props.valueClassName}>{props.value}</i>
                    <span/>
                </Link>
            </li>
        );
    } else if(type === "textarea"){
        return(
            <li className={cln(style.li,{[style.bdnone]:props.isLast},props.className)}>
                {!isNullValue(props.title) &&
                <div className={props.titleClassName}>{props.title}</div>
                }
                <textarea className={cln(style.rentInput,{[style.withouttitle]:isNullValue(props.title)},props.valueClassName)}
                          placeholder={props.placeholder}
                          value={props.value||""}
                          onChange={(e)=>{props.onChange(e.target.value);}}
                          maxLength={props.maxLength}
                />
            </li>
        );
    }
};