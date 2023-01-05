Page({
    data: {
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
        selectedTab: 'my'
    },
    onLoad: function (options) {
    },
    onTapTab: function (e) {
        console.log(e)
        console.log(e.currentTarget.dataset.name)
        this.setData({
            selectedTab: e.currentTarget.dataset.name
        })
        if(e.currentTarget.dataset.name === 'my') {
            this.setData({
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
            })
        }else{
            this.setData({
                imgUrls: [
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                    {id: 0, url: 'https://iph.href.lu/200x200'},
                ],
            })
        }
    }
})
