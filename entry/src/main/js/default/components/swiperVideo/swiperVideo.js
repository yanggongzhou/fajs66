export default {
    props: {
        videoList: Array,
    },
    data: {
        currentIndex: 0,
    },

    swiperChange({ index }) {
        this.currentIndex = index;
    },

    onInit() {

    },
}