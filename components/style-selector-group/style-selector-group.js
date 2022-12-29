Component({
    properties: {styleList: Array},
    data: {
        previewList: [],
        placeholderList: [1, 1, 1, 1],
        previewSelected: []
    },
    methods: {
        onTapStyle: function (e) {
            const idx = e.currentTarget.dataset.id
            if (this.data.previewSelected[idx] === false) {
                if (this.data.previewList.length >= 4) {
                    qq.showToast({title: "最多选择4个风格", icon: "none"})
                    return;
                }
                this.setData({
                    previewList: this.data.previewList.concat({
                        id: e.currentTarget.dataset.id,
                        name: e.currentTarget.dataset.item.name,
                        url: e.currentTarget.dataset.item.url
                    }),
                    placeholderList: this.data.placeholderList.slice(1),
                    previewSelected: this.data.previewSelected.map((item, index) => {
                        if (index === idx) {
                            return true
                        }
                        return item
                    }),
                })
            } else {
                this.setData({
                    previewList: this.data.previewList.filter(item => item.id !== idx),
                    placeholderList: this.data.placeholderList.concat(1),
                    previewSelected: this.data.previewSelected.map((item, index) => {
                        if (index === idx) {
                            return false
                        }
                        return item
                    }),
                })
            }
        },
        onTapSelected: function (e) {
            console.log(e.currentTarget.dataset.id)
            this.setData({
                previewList: this.data.previewList.filter(item => item.id !== e.currentTarget.dataset.id),
                placeholderList: this.data.placeholderList.concat(1),
                previewSelected: this.data.previewSelected.map((item, index) => {
                    if (index === e.currentTarget.dataset.id) {
                        return false
                    }
                    return item
                }),
            })
        }
    },
    lifetimes: {
        attached: function () {
            const previewSelected = this.data.styleList.map((item, index) => {
                return false
            })
            console.log(previewSelected)
            this.setData({
                previewSelected: previewSelected
            })
        }
    }

});
