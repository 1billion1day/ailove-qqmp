Component({
    properties: {
        url: String,
        name: String,
        selected: Boolean,
        size: {
            type: "default" | "small",
            value: "default"
        },
        withClose: {
            type: Boolean,
            value: false
        }

    },
    data: {},
    methods: {}
});
