
//通过后台加载
const menu = [
    {
        id: "1",
        label: "首页",
        path: "/",
        name:'home',
        isShow:false
    },
    {
        id: "2",
        label: "选项",
        path: "",
        type: "parent",
        name:'option',
        children: [
            {
                id: "3",
                label: "选项1",
                path: "/option1",
                name:'option1',
            },
            {
                id: "4",
                label: "选项2",
                name:'option2',
                path: "/option2",
            },
        ]
    }
]
export default menu.filter(item => item.isShow != false)