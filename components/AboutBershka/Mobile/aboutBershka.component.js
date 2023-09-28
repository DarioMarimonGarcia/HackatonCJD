export default {
    props: {
        index: {
            type: Number,
            required: true
        },
        info: {
            type: String,
            required: true
        }
    },
    setup(props) {
        const isMouseEnter = ref(false);

        function onShowMore () {
            this.isMouseEnter = !this.isMouseEnter
            this.$emit('sectionShow', this.isMouseEnter ? props.index : -1);
        };

        return {
          isMouseEnter,
          onShowMore
        }
    }
}
