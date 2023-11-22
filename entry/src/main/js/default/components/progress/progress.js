export default {
    props: {
        duration: Number,
        currTime: Number,
    },

    data: {
        isTouch: false,
        progressValue: 0,
        nowTime: '00:00',
        durationTime: '00:00',
    },

    onInit() {
        this.durationTime = this.secondToTime(this.duration);
        this.$watch("currTime", this.watchProgress);
        this.$watch("duration", this.watchDuration);
    },

    watchDuration (newValue, oldValue) {
        this.durationTime = this.secondToTime(newValue);
    },

    watchProgress (newValue, oldValue) {
        if (!this.isTouch) {
            // @ts-ignore
            this.progressValue = newValue / this.duration;
            this.nowTime = this.secondToTime(newValue);
        }
    },

    onStart() {
        this.isTouch = true;
    },

    touchMove({ changedTouches }) {
        if (!changedTouches) return;
        this.isTouch = true;
        const touchPointX = changedTouches[0].globalX;
        if (touchPointX <= 24) {
            this.progressValue = 0;
        } else if (750 - touchPointX <= 24) {
            this.progressValue = 1;
        } else {
            const percent = touchPointX / 702
            this.progressValue = percent && percent > 1 ? 1 : percent;
        }

        // @ts-ignore
        this.nowTime = this.secondToTime(Math.round(this.progressValue * this.duration));
    },
    onEnd({ touches }) {
        this.isTouch = false;
        this.$emit('progressChange', {
            progress: this.progressValue
        });
    },


    /**
     * Time conversion.
     *
     * @param duration Time required for conversion - seconds.
     * @returns Formatted character string.
     */
    secondToTime(duration) {
        let hourUnit = 60 * 60;
        let hour = Math.floor(duration / hourUnit);
        let minute = Math.floor((duration - hour * hourUnit) / 60);
        let second = duration - hour * hourUnit - minute * 60;
        if (hour > 0) {
            return `${this.padding(hour.toString())}${':'}
            ${this.padding(minute.toString())}${':'}${this.padding(second.toString())}`;
        } else {
            return `${this.padding(minute.toString())}${':'}${this.padding(second.toString())}`;
        }
        return "00:00";
    },
    /**
     * Fill position.
     *
     * @param num Data to be filled.
     * @returns Data after filling.
     */
    padding(num) {
        for (var len = (num.toString()).length; len < 2; len = num.length) {
            num = `0${num}`;
        }
        return num;
    }
}