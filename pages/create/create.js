Page({
    data: {
        tempFilePath: null,
        // tempFilePath: "https://iph.href.lu/140x140",
        state: 0,
        // state: 2,
        avatarUrl: null,
        urls: null,
        // urls: [
        //     "https://iph.href.lu/140x200",
        //     "https://iph.href.lu/140x140",
        //     "https://iph.href.lu/140x140",
        //     "https://iph.href.lu/140x140",
        // ],
    },
    onLoad: function (options) {
    },
    bindChooseImageTap: function () {
        let that = this;
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: result => {
                console.log(result)
                that.setData({
                    tempFilePath: result.tempFilePaths[0]
                })
            }
        })
    },
    bindBackToHome: function () {
        this.setData({
            tempFilePath: null,
            urls: null,
            state: 0,
            avatarUrl: null
        })
    },
    bindNextTap: function () {
        let that = this;
        this.setData({
            state: 1
        })
        qq.showLoading({title: "生成图片中"})
        const sessionKey = qq.getStorageSync('sessionKey')
        console.log(sessionKey)
        qq.uploadFile({
            url: 'https://chat.wu.ren/img/upload',
            header: {
                "OB-SESSION-KEY": sessionKey
            },
            filePath: that.data.tempFilePath,
            name: 'file',
            success: res => {
                console.log(res)
                const jdata = JSON.parse(res.data)
                console.log(jdata)
                if (jdata.message !== undefined) {
                    qq.showToast({title: jdata.message, icon: "none"})
                    return;
                }
                that.setData({
                    avatarUrl: jdata.url
                })
                console.log(that.data.avatarUrl)
                qq.request({
                    url: 'https://chat.wu.ren/img/convert',
                    method: "POST",
                    header: {
                        "OB-SESSION-KEY": sessionKey
                    },
                    data: {
                        url: that.data.avatarUrl,
                        amount: 1
                    },
                    success: function (res) {
                        console.log(res)
                        if (res.statusCode === 200) {
                            const urls = res.data.urls.map((url, index) => {
                                return 'https://f.wu.ren/' + url
                            })
                            console.log(urls)
                            that.setData({
                                urls: urls,
                                state: 2
                            })
                            qq.showToast({
                                title: "生成成功",
                                icon: "none"
                            })
                        } else {
                            qq.showToast({
                                title: "生成失败 " + res.data.message,
                                icon: "none"
                            })
                        }
                    },
                    fail: function (res) {
                        qq.showToast({
                            title: "生成失败 " + res.errMsg,
                            icon: "none"
                        })
                    },
                    complete: res => {
                        console.log(res)
                        qq.hideLoading();
                    }
                })
            },
            complete: res => {
                // qq.hideLoading();
                that.setData({
                    state: 0,
                })
            }
        });
    },
    bindDownloadTap: function (e) {
        let that = this;
        qq.showLoading({title: "下载中"})
        qq.downloadFile({
            url: e.currentTarget.dataset.url,
            success: function (res) {
                console.log(res)
                qq.saveImageToPhotosAlbum({
                    filePath: res.tempFilePath,
                    success: function (res) {
                        qq.showToast({title: "保存成功", icon: "none"})
                    },
                    fail: function (res) {
                        qq.showToast({title: "保存失败", icon: "none"})
                    }
                })
            },
            fail: function (res) {
                qq.showToast({title: "下载失败", icon: "none"})
            },
            complete: res => {
                qq.hideLoading();
            }
        })
    }
});