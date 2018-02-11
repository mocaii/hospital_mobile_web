import React,{ Component } from 'react'
import cln from 'classnames'
import MegaPixImage from '../../tools/megapixImage'
import dataURLtoBlob from 'blueimp-canvas-to-blob'
import { isNullValue } from '../../tools/common'
import style from './index.css';

export default class Upload extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount(){
    }
    handleUploadBlob(blob){
        const props = this.props;
        let xhr = new XMLHttpRequest();
        let pecent = 0;
        let formdata = this.getFormData();
        formdata.append('blob', blob);
        xhr.open('post', props.action);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                props.success(JSON.parse(xhr.responseText));
            }
        };
        //数据发送进度
        xhr.upload.addEventListener('progress', (e)=>{
            if (e.lengthComputable) {
                const percentComplete = ~ ~(100 * e.loaded / e.total);
                props.progerss(percentComplete);
            }
        }, false);
        xhr.send(formdata);
    }
    //获取formdata
    getFormData() {
        let isNeedShim = ~navigator.userAgent.indexOf('Android')
            && ~navigator.vendor.indexOf('Google')
            && ! ~navigator.userAgent.indexOf('Chrome')
            && navigator.userAgent.match(/AppleWebKit\/(\d+)/).pop() <= 534;
        return isNeedShim ? new this.formDataShim() : new FormData()
    }
    //formdata 补丁, 给不支持formdata上传blob的android机打补丁
    formDataShim() {
        let o = this,
            parts = [],
            boundary = new Array(21).join('-') + (+new Date() * (1e16 * Math.random())).toString(36),
            oldSend = XMLHttpRequest.prototype.send;
        this.append = function (name, value, filename) {
            parts.push('--' + boundary + '\r\nContent-Disposition: form-data; name="' + name + '"');
            if (value instanceof Blob) {
                parts.push('; filename="' + (filename || 'blob') + '"\r\nContent-Type: ' + value.type + '\r\n\r\n');
                parts.push(value);
            }
            else {
                parts.push('\r\n\r\n' + value);
            }
            parts.push('\r\n');
        };
        // Override XHR send()
        XMLHttpRequest.prototype.send = function (val) {
            let fr,
                data,
                oXHR = this;
            if (val === o) {
                // Append the final boundary string
                parts.push('--' + boundary + '--\r\n');
                // Create the blob
                data = dataURLtoBlob(parts);
                // Set up and read the blob into an array to be sent
                fr = new FileReader();
                fr.onload = function () {
                    oldSend.call(oXHR, fr.result);
                };
                fr.onerror = function (err) {
                    throw err;
                };
                fr.readAsArrayBuffer(data);
                this.setRequestHeader('Content-Type', 'multipart/form-data; boundary=' + boundary);
                XMLHttpRequest.prototype.send = oldSend;
            }
            else {
                oldSend.call(this, val);
            }
        };
    }
    handleUploadImg(file){
        const props = this.props;
        let mpImg = new MegaPixImage(file);
        let resImg = new Image();
        let blob = "";
        if (resImg.complete && resImg.src !== "") {
            blob = dataURLtoBlob(resImg.src);
            this.handleUploadBlob(blob);
        } else {
            resImg.onload = ()=>{
                blob = dataURLtoBlob(resImg.src);
                this.handleUploadBlob(blob);
            };
        }
        mpImg.render(resImg, props.option);
    }
    render(){
        const props = this.props;
        return(
            <div className={cln(style.imgUpload,props.className)}>
                {isNullValue(props.src) ? (
                    <div className={cln(style.imgNone, props.subClassName)}
                         onClick={() => {
                             (typeof props.isUpload === "undefined" || props.isUpload) && this.file.click();
                         }}
                    >
                        +
                    </div>
                ) : (
                    <img className={cln(style.imgNone, props.subClassName)}
                         style={{width:"100%",height:"auto"}}
                         src={props.src}
                         alt={""}
                         onClick={() => {
                             (typeof props.isUpload === "undefined" || props.isUpload) && this.file.click();
                         }}
                    />
                )
                }
                <input type={"file"}
                       accept={"image/*"}
                       multiple={true}
                       style={{display:"none"}}
                       ref={(input) => { this.file = input; }}
                       onChange={(e)=>{
                           let files = e.target.files;

                           //如果要限制上传的数量则在onchange限制
                           if(typeof props.onChange === "function"){
                               if(!props.onChange(files)){
                                   return false;
                               }
                           }

                           if (!files.length) return;
                           for (let i = 0; i < files.length; i++) {
                               if (!/\/(?:jpeg|png|gif)/i.test(files[i].type)) {
                                   let type = files[i].type.substring(files[i].type.indexOf('/') + 1);
                                   props.error("暂不支持" + type + "格式的图片");
                                   return;
                               }

                               this.handleUploadImg(files[i]);
                           }
                       }}
                />
            </div>
        )
    }
}