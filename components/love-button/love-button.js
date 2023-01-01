Component({
    properties: {
        openType: {
            type: String,
            value: ""
        },
    },
    data: {},
    methods: {
        getUserInfo: function (e) {
            this.triggerEvent('getUserInfo', e.detail);
        }
    },
    lifetimes: {
        created: function () {
            console.log('created');
            console.log(this.properties)
        }
    },
});
