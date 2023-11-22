import Prompt from '@system.prompt';

export default {
    props: {
        videoList: Array,
        startY: 0,
    },
    data: {
        currentIndex: 0,
    },

    swiperChange({ index }) {
        this.currentIndex = index;
    },

    onInit() {

    },
    touchStart({ touches }) {
        this.startY = touches[0].globalY || 0;
    },

    touchEnd({ changedTouches  }) {
        if (!changedTouches || !this.startY) return;
        const touchPointY = changedTouches[0].globalY || 0;
        const distance = touchPointY - this.startY;
        if (distance >= 180) {
            if (this.currentIndex === 0) {
                Prompt.showToast({
                    message: "已是第一集",
                    duration: 500
                })
            }
        } else if (distance <= -180) {
            if (this.currentIndex === this.videoList.length - 1) {
                Prompt.showToast({
                    message: "已是最后一集",
                    duration: 500
                })
            }
        }
        this.startY = 0;
    }
}