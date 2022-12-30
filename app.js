//app.js
App({
    onLaunch: function () {
        // 展示本地存储能力
        const logs = qq.getStorageSync('logs') || [];
        logs.unshift(Date.now())
        qq.setStorageSync('logs', logs)

        // 登录
        const that = this;
        const sessionKey = qq.getStorageSync('sessionKey')
        console.log(sessionKey);
        if (!sessionKey) {
            this.login();
        } else {
            qq.checkSession({
                success: function () {
                    console.log("session_key 未过期，并且在本生命周期一直有效");
                },
                fail: function () {
                    // session_key 已经失效，需要重新执行登录流程
                    that.login()
                }
            })
        }
        // 获取用户信息
        qq.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    qq.getUserInfo({
                        success: res => {
                            // 可以将 res 发送给后台解码出 unionId
                            this.globalData.userInfo = res.userInfo

                            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                            // 所以此处加入 callback 以防止这种情况
                            if (this.userInfoReadyCallback) {
                                this.userInfoReadyCallback(res)
                            }
                        }
                    })
                }
            }
        })
    },
    login: function () {
        qq.login({
            success: res => {
                // 发送 res.code 到后台换取 openId, sessionKey, unionId
                console.log(res)
                qq.request({
                    url: 'https://chat.wu.ren/qq/ma/1112267860/login',
                    data: {
                        code: res.code
                    },
                    success: res => {
                        console.log(res)
                        qq.setStorageSync('sessionKey', res.data.sessionKey)
                    }
                })
            }
        })

    },
    globalData: {
        userInfo: null,
    }
})
