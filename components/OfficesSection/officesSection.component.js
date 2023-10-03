import officesJSON from '../../assets/locale/countries/offices_es_ES.json'

export default {
    data() {
        return {
            offices: officesJSON.alphabetOrder
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
