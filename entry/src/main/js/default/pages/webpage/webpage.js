export default {
    data: {
        webUrl: "https://www.ishugui.com/download"
    },
    onInit() {
    },
    reloadWeb(){
      this.$element('webId').reload();
    },
    pageStart: function(e) {
        console.info('web pageStart: ' + e.url)
    },

    pageFinish: function(e) {
        console.info('web pageFinish: ' + e.url)
    },

    pageError: function(e) {
        console.info('web pageError url: ' + e.url)
        console.info('web pageError errorCode: ' + e.errorCode)
        console.info('web pageError description: ' + e.description)
    }
}