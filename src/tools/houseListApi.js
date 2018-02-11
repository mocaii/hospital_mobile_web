// apiUrlobj 不同环境 api接口配置
// resourcesUrlPre 不同环境 资源文件前缀配置
var apiUrlobj = {};
if(process.env.NODE_ENV === 'production'){

    apiUrlobj ={

    }
}else if(process.env.NODE_ENV === 'staging'||process.env.NODE_ENV === 'test'){

    apiUrlobj ={

    }
}else if(process.env.NODE_ENV === 'development'){

    apiUrlobj ={

    }
}

export const  apiUrl = apiUrlobj ;