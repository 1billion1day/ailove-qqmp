Page({
    data: {
        convertUrls: [
            // 'http://f.wu.ren/attach/2023_1_6_1661300101.jpg',
            // 'http://f.wu.ren/attach/2023_1_6_2133190872.jpg',
        ]
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