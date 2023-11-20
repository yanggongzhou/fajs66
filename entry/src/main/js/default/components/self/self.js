import Router from '@system.router'
export default {
    data: {
        taskList: [{
            title: 'web H5 渲染',
            uri: 'https://ishugui.com/download',
            date: '2021-12-31 10:00:00'
        }, {
            title: '看电影',
            date: '2021-12-31 20:00:00'
        }],
    },

    setfinish(e) {
        this.$element('testmarquee').start()
    },
    makestart(e) {
        this.$element('testmarquee').start()
    },
    makestop(e) {
        this.$element('testmarquee').stop()
    },

    webClick() {
        Router.push({
            uri: "pages/webpage/webpage"
        })
    },

    dialogClick() {
        this.$element('hintDialog').show()
    },
    sethintDialog(e) {
        this.$element('hintDialog').close()
    },
}