import React,{Component} from 'react'
import cln from 'classnames'
import style from './index.css';

class CenterModal extends Component {
    constructor(props) {
        super(props);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleCancel(){
        this.props.handleCancel();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.isShow){
            $("body").css({"overflow-y":"hidden"});
        }
        else {
            $("body").css({"overflow-y":"auto"});
        }
    }
    render() {
        const props = this.props;
        return (
            <div className={style.fixedLayer} style={{display: props.isShow ? "block" : "none"}}>
                <div className={cln(style.center_layer)}>
                    <div className={cln(style.confirm_content,{ [style.active]: props.isShow })}>
                        <div className={style.confirm_title}>
                            {props.title}
                        </div>
                        <div className={style.confirm_msg}>
                            {props.content.map((itme, index) => {
                                if(index === 0){
                                    return (
                                        <span key={index}
                                              className={style.spanText}
                                        >
                                            {itme}
                                        </span>
                                    )
                                }else {
                                    return (
                                        <span key={index}
                                              className={style.spanText}
                                              style={{marginTop:"0.5rem"}}>
                                            {itme}
                                        </span>
                                    )
                                }
                            })}

                        </div>
                        <p className={style.confirm_button} onClick={this.handleCancel}>
                            {props.returnUrl !== ""
                                ? (
                                    <a href={props.returnUrl}>
                                        <i className={style.confirm_button_confirm}>我知道了</i>
                                    </a>
                                ) : (
                                    <i className={style.confirm_button_confirm}>我知道了</i>
                                )
                            }
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CenterModal;