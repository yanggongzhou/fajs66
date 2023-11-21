import Prompt from '@system.prompt';

export default {
    props: {
        poster: String,
        src: String,
        current: Number,
        active: Boolean,
    },
    data: {
        muted: false,
        autoplay: false,
        controlShow: false,
        loop: false,
        publicPlayIcon: '/common/images/ic_public_play.png',
        duration: 0,
        currTime: 0,
        isPlay: false,
        isLoading: true,
        loadingData: {
            startColor: "#ffc0cb",
            endColor: "#00bfff",
        },
    },

    onInit() {
        this.$watch('active', 'onWatchActive');
    },
    onWatchActive(newV, oldV) {
        if (this.$element('videoId' + this.current)) {
            if (!newV) {
                if (this.isPlay) {
                    this.$element('videoId' + this.current).pause();
                }
            } else {
                if (!this.isPlay) {
                    this.$element('videoId' + this.current).start();
                }
            }
        }
    },
    /**
     * Video preparation completed.
     *
     * @param event return value after the video preparation is complete.
     */
    prepared({ duration }) {
        this.isLoading = false;
        this.duration = duration;
    },
    /**
     * The video starts to play.
     */
    start() {
        this.isLoading = false;
        this.isPlay = true;
    },

    seeking({ currenttime }){
        this.isLoading = true;
    },
    seeked({ currenttime }) {
        this.isLoading = false;
    },
    /**
     * Pause the video.
     */
    pause() {
        this.isPlay = false;
    },
    /**
     * The video playback is complete.
     */
    finish() {
    },
    /**
     * The playback progress changes.
     *
     * @param event Value returned when the playback progress changes.
     */
    timeUpdate({currenttime}) {
        this.currTime = currenttime;
    },
    /**
     * Video Pause or Playback.
     */
    startOrPause() {
        if (this.isLoading) {
            Prompt.showToast({
                message: '视频加载中，请稍后'
            })
            return
        }
        if (this.isPlay) {
            this.$element('videoId' + this.current).pause();
        } else {
            this.$element('videoId' + this.current).start();
        }
    },
    /**
     * Drag the progress bar.
     *
     * @param event Return value of dragging the slider.
     */
    progressChange(e) {
        this.currTime = Math.round(this.duration * e.detail.progress);
        this.$element('videoId' + this.current).setCurrentTime({
            currenttime: this.currTime,
        });
        if (!this.isPlay) {
            this.$element('videoId' + this.current).start();
        }
    },
};
