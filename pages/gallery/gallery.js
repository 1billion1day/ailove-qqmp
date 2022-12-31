Page({
    data: {
        imgUrls: [
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/310x140'},
            {id: 0, url: 'https://iph.href.lu/410x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x410'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
            {id: 0, url: 'https://iph.href.lu/140x140'},
        ]
    },
    onLoad: function (options) {
        for (const imgUrlsKey in this.data.imgUrls) {
            const imgUrls = this.data.imgUrls[imgUrlsKey];
            qq.imageSizes({
                src: imgUrls.url,
            })
        }

    }
})
