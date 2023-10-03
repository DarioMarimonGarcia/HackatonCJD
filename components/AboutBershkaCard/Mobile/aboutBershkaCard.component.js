export default {
    props: {
        sectionKey: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        slogan: {
            type: String,
            required: false,
            default: null
        },
        mainInfo: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: false,
            default: null
        },
        title: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const isMouseEnter = ref(false);

        function onShowMore () {
            this.isMouseEnter = !this.isMouseEnter
            if (this.isMouseEnter) {
                this.$emit('sectionShow', this.sectionKey);
            }
        };

        function onReset () {
            this.isMouseEnter = false;
        }

        return {
          isMouseEnter,
          onShowMore,
          onReset
        }
    }
}
