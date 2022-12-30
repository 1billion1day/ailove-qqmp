Component({
    properties: {
        openType: {
            type: String,
            value: ""
        }
    },
    data: {},
    methods: {},
    lifetimes: {
        created: function () {
            console.log('created');
            console.log(this.properties)
        }
    },
});
