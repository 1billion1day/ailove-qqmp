Page({
    data: {
        convertUrls: null
    },
    onLoad: function (options) {
        this.setData({
            convertUrls: JSON.parse(options.convertUrls)
        })
    },
    onShareAppMessage: function (res) {
        console.log(res)
        // return {
        //     title: '自定义转发标题',
        //     path: '/page/user?id=123'
        // }
    }
});