//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: qq.canIUse('button.open-type.getUserInfo'),
        avatarUrl: null,
        styleList: [
            {id: 0, url: "/statics/style1.jpg", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=1", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=2", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=3", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=4", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=5", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=6", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=7", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=8", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=9", name: "动漫风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "动漫风"},
        ],
        onSelected: function (e){
            console.log(e);
        },
    },
    //事件处理函数
    bindViewTap: function () {
        qq.navigateTo({
            url: '../logs/logs'
        })
    },
    bindChooseImageTap: function () {
        console.log("123")
        const that = this
        console.log(this)
        qq.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            success: result => {
                console.log(result)
                qq.showLoading({title: "上传图片中"})
                setTimeout(() => {
                    // TODO
                    qq.hideLoading()
                    that.setData({
                        avatarUrl: result.tempFilePaths[0]
                    })
                }, 2000)
            },
            fail: res => {
                console.log(res)
                // qq.showToast({title: res.errMsg, icon: "none"})
            },
            complete: res => {
                console.log(res)
            }
        })
    },
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            qq.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    }
})
