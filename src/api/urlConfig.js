const config = {
    'production':{
        baseUrl:'pro.api.com',
        authBaseUrl:'auth.pro.api.com'
    },
    'developmtent':{
        baseUrl:'dev.api.com',
        authBaseUrl:'auth.dev.api.com'
    },
    'test':{
        baseUrl:'test.api.com',
        authBaseUrl:'auth.test.api.com'
    }
    ,'uat':{
        baseUrl:'uat.api.com',
        authBaseUrl:'auth.uat.api.com'
    }
}
export default config[process.env.NODE_ENV]