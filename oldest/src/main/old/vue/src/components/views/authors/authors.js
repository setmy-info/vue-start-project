import topComponent from '@/components/recursive/topComponent';

export default {
    name: 'authors',    //authorsService is autoinjected. Translations object too.
    components: {
        topComponent
    },
    created: function () {
        this.init();
    },
    methods: {
        init: function () {
            this.getAuthors();
        },
        getAuthors: function () {
            this.authors = this.authorsService.getAuthors();
        }
    }
}
