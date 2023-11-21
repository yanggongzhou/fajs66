import Router from '@system.router'
export default {
    data: {

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