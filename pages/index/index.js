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
            {id: 0, url: "/statics/chaomengfeng.jpg", name: "超萌风"},
            {id: 1, url: "/statics/xiangchengfeng.jpg", name: "香橙风"},
            {id: 2, url: "/statics/naitangfeng.jpg", name: "奶糖风"},
            {id: 3, url: "/statics/keaifeng.jpg", name: "可爱风"},
            {id: 4, url: "/statics/tianxinfeng.jpg", name: "甜心风"},
            {id: 5, url: "/statics/naiyufeng.jpg", name: "奶浴风"},
            {id: 6, url: "/statics/naiyanfeng.jpg", name: "奶盐风"},
            {id: 7, url: "/statics/jingmofeng.jpg", name: "晶墨风"},
            {id: 8, url: "https://iph.href.lu/140x140?text=8", name: "卡通风"},
            {id: 9, url: "https://iph.href.lu/140x140?text=9", name: "铅笔风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "彩铅风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "彩糖油画风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "油画风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "薰衣草风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "呐喊风"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "奇异油画"},
            {id: 0, url: "https://iph.href.lu/140x140?text=10", name: "哥特油画"},
        ],
        styleSelected: null,
    }, onSelectedEvent: function (e) {
        const selectedList = e.detail.selectedList;
        console.log(e.detail.selectedList);
        this.setData({
            styleSelected: selectedList
        })
    }, onTapGenerator: function () {
        console.log(this.data.styleSelected);
        console.log(this.data.avatarUrl)
        if (this.data.avatarUrl === null) {
            qq.showToast({title: "请上传头像", icon: "none"})
            return;
        }
        if (this.data.styleSelected === null || this.data.styleSelected.length == 0) {
            qq.showToast({title: "请选择生成风格", icon: "none"})
            return;
        }

        const that = this;
        qq.showLoading({title: "生成图片中"})
        setTimeout(function () {
            qq.hideLoading();
            qq.showToast({
                title: "生成成功 \n" + that.data.styleSelected.map((value) => value.name),
                icon: "none"
            })
        }, 1000)
    }, //事件处理函数
    bindViewTap: function () {
        qq.navigateTo({
            url: '../logs/logs'
        })
    }, bindChooseImageTap: function () {
        console.log("123")
        const that = this
        console.log(this)
        qq.chooseImage({
            count: 1, sizeType: ['original', 'compressed'], success: result => {
                console.log(result)
                qq.showLoading({title: "上传图片中"})
                setTimeout(() => {
                    // TODO
                    qq.hideLoading()
                    that.setData({
                        avatarUrl: result.tempFilePaths[0]
                    })
                }, 1000)
            }, fail: res => {
                console.log(res)
                // qq.showToast({title: res.errMsg, icon: "none"})
            }, complete: res => {
                console.log(res)
            }
        })
    }, onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo, hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo, hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            qq.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo, hasUserInfo: true
                    })
                }
            })
        }
    }, getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo, hasUserInfo: true
        })
    }
})
