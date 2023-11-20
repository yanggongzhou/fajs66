export default {
    data: {
        videoList: [{
                        url: '/common1/video_1.mp4'
                    }, {
                        url: '/common1/video_2.mp4'
                    }, {
                        url: '/common1/video_3.mp4'
                    }, , {
                        url: '/common1/video_4.mp4'
                    }],
        commentList: [{
                          name: "我",
                          comment: "挑战DIY HarmonyOS视频播放器。",
                          image: '/common1/images/p1.jpg'
                      },
                      {
                          name: "林俊杰",
                          comment: "HDC2021，我来了！",
                          image: '/common1/images/p2.jpg'
                      },
                      {
                          name: "刘德华",
                          comment: "HarmonyOS，加油，go go go！",
                          image: '/common1/images/p3.jpg'
                      },
                      {
                          name: "易烊千玺",
                          comment: "支持支持！！！",
                          image: '/common1/images/p4.jpg'
                      },
                      {
                          name: "王俊凯",
                          comment: "严重支持一波~~",
                          image: '/common1/images/p5.jpg'
                      },
                      {
                          name: "吴京",
                          comment: "一起冲，我看这架势，继续冲！",
                          image: '/common1/images/p6.jpg'
                      },
                      {
                          name: "周杰伦",
                          comment: "期待在HDC2021看到鸿蒙的新版本！",
                          image: '/common1/images/p7.jpg'
                      },
                      {
                          name: "五月天",
                          comment: "昨天晚上升级了鸿蒙系统，非常好用。",
                          image: '/common1/images/p8.jpg'
                      }

        ],
        playIndex: 0,
        showCommentFlag: false,
        commentInfo: '',
        isPlay: true,
    },
    start() {
        this.isPlay = true;
    },
    pause() {
        this.isPlay = false;
    },
    changeVideo(obj) {
        this.playIndex = obj
        this.showCommentFlag = false
    },
    showComment() {
        this.showCommentFlag = true
    },
    changeStartOrPause() {

        if (this.isPlay) {
            this.$element('videoId' + this.playIndex).pause();
        } else {
            this.$element('videoId' + this.playIndex).play();
        }
        this.isPlay = !this.isPlay;
        this.showCommentFlag = false;
    },
    sendConmment() {
        this.commentList.push({
            name: '我',
            comment: this.commentInfo,
            image: '/common1/images/p1.jpg'
        })
        this.commentInfo = ''
    },
    commentInfoChange(e) {
        this.commentInfo = e.value
    },
    distributeVideo: async function () {
        let actionData = {};
        let target = {
            bundleName: "com.huawei.jackydemo",
            abilityName: "com.huawei.jackydemo.MainAbility",
            data: actionData
        };

        let result = await FeatureAbility.startAbility(target);
    }
}