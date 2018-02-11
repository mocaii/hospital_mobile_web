/**
 * Created by xwche on 2017/4/13.
 */
export const isNullValue = (input) => {
   if(input===undefined||input===null||input===''||input.trim()===''){
       return true;
   }
    return false ;
};

export const getQueryParam = (key) => {
    let reg = new RegExp("(^|&)"+key+"=([^&]*)(&|$)");
    let result = window.location.search.substr(1).match(reg);
    return result?decodeURIComponent(result[2]):null;
};

//获取当前日期
export const getNowFormatDate = () =>{
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}



export const getArrText = (value,obj) => {
    if(typeof obj === "undefined"){
        return "";
    }

    let newArr = obj.filter((obj)=>{
        return obj.value === value;
    });
    return newArr.length > 0 ? newArr[0].text : "";
};

export const handleAjax = (url, options, successHandle, requestType, contentType) => {
    requestType = requestType || "get";
    contentType = contentType || "application/x-www-form-urlencoded";
    $.ajax({
        type:requestType,
        url: url,
        dataType:'json',
        data:options,
        contentType: contentType,
        cache: false,
        success: (result)=>{
            successHandle(result);
        }
    });
};

export const public_url = process.env.PUBLIC_URL;

export const returnVal = (devValue, value) => {
    if (process.env.NODE_ENV === 'development') {
        return devValue;
    }
    else {
        return value;
    }
};
