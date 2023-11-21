export default {
    data: {
        videoList: [
            {
                "id": "550914633",
                "name": "第一集",
                "mp4": "https://db.bbwhcmjx.cn/mp40704qimiao1.mp4",
                "cover": "https://nvideo.dramaboxdb.com/33/9x6/96x6/966x0/96600100014/550914633_1/550914633.mp4.jpg",
            },
            {
                "id": "550914634",
                "name": "第二集",
                mp4: "https://db.bbwhcmjx.cn/mp4Lxijiangyue1.mp4",
                "cover": "https://nvideo.dramaboxdb.com/43/9x6/96x6/966x0/96600100014/550914634_1/550914634.mp4.jpg",
            },
            {
                "id": "550914635",
                "name": "第三集",
                "mp4": "https://db.bbwhcmjx.cn/mp40704lianai1.mp4",
                "cover": "https://nvideo.dramaboxdb.com/53/9x6/96x6/966x0/96600100014/550914635_1/550914635.mp4.jpg",
            },
            {
                "id": "550914636",
                "name": "第四集",
                "mp4":  "https://db.bbwhcmjx.cn/mp40704aishang1.mp4",
                "cover": "https://nvideo.dramaboxdb.com/63/9x6/96x6/966x0/96600100014/550914636_1/550914636.mp4.jpg",
            },
            {
                "id": "550914637",
                "name": "第五集",
                "mp4": "https://db.bbwhcmjx.cn/mp41128kuaguo1.mp4",
                "cover": "https://nvideo.dramaboxdb.com/73/9x6/96x6/966x0/96600100014/550914637_1/550914637.mp4.jpg",
            }
        ],

        tabIndex: 1,
        tabBars: ["剧场", "在看", "追剧", "我的"]
    },
    onInit() {

    },
    tabChange(index){
        this.tabIndex = index;
    }
}



