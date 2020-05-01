export default {
    props: {
        hello: {
            type: String,
            default: {
                world: 'Hello World JS file!'
            }
        }
    },
    data: function () {
        return {
            msg: 'Welcome from data scope!'
        };
    }
}
