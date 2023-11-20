import { homeList } from '../../assets/mock';
import Fetch from '@system.fetch';
import Router from '@system.router';

export default {
    data: {
        title: "zzz",
        list: [],
        homeData: [],
        loadingData: {
            startColor: "#ffc0cb",
            endColor: "#00bfff",
        },
    },
    onInit() {
        this.list = homeList.list;
        this.getData();
    },
    getData() {
        const that = this;
        Fetch.fetch({
            method: "POST",
            url: "https://yfbwww.webfic.com/webfic/home/index",
            header: {
                "Content-Type": "application/json",
                "pline": "DRAMABOX",
                "language": "en"
            },
            success: function (response) {
                if (response.code == 200) {
                    that.homeData = (JSON.parse(response.data).data || []).filter(item => item.style == 'SMALL_CARD_LIST')
                    that.title = "请求成功"
                }
            },
            fail: function () {
                that.title = "请求失败"
            }
        });
    },
    jumpVideo(item) {
        Router.push({
            uri: "pages/second/second"
        })
    },

    scrollbottom () {
        console.info('--------------------底部-----------------------')
        // Prompt.showToast({ message: "底部" })
    }
}



