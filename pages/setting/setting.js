//获取应用实例
const app = getApp()
Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: qq.canIUse('button.open-type.getUserInfo'),
        headerLeftIcon: '/statics/icons/user.png',
        headerCenterText: '登录/注册',
        imgUrls: [
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
        ],
    },
    onLoad: function (options) {
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
        this.getMyPics();
    },
    getUserInfo: function (e) {
        console.log(e)
        app.globalData.userInfo = e.detail.userInfo
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        })
    },
    getMyPics: function () {
        const sessionKey = qq.getStorageSync('sessionKey')
        qq.request({
            url: 'https://chat.wu.ren/img/gallery',
            method: "GET",
            header: {
                "OB-SESSION-KEY": sessionKey
            },
            success: res => {
                console.log(res)
                const jdata = res.data
                if (jdata.message !== undefined) {
                    qq.showToast({title: jdata.message, icon: "none"})
                    return;
                }
                this.setData({
                    imgUrls: res.data.urls.map((url, index) => {
                        return {
                            id: index,
                            url: 'https://f.wu.ren/' + url
                        }
                    })
                })
            }
        });
    }
});