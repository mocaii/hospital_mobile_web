import React,{Component} from 'react'
import cln from 'classnames'
import style from './index.css';

class BottomModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleCancel(){
        this.props.handleCancel();
    }
    handleItemClick(value,text){
        this.props.handleItemClick(value,text);
    }
    render() {
        const props = this.props;
        return (
            <div className={style.fixedLayer} style={{display: props.isShow ? "block" : "none"}}>
                <div className={cln(style.bottom_layer,{ [style.active]: props.isShow })}>
                    <div className={style.title}>
                        <span className={style.cancle} onClick={this.handleCancel}>
                            取消
                        </span>
                        <p>{props.title}</p>
                    </div>
                    <div className={style.option_wrap}>
                        <ul>
                            {props.data.map((item,index)=>{
                                return (
                                    <li key={index}
                                        data-data={item.value}
                                        onClick={()=>{this.handleItemClick(item.value)}}
                                    >
                                        {item.text}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default BottomModal;