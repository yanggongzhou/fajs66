
import Router from '@system.router'
export default {
    data: {
    },
    onInit() {

    },
    tabChange(e){
        console.info("Tab index: " + e.index)
    },
    goSecond() {
        Router.push({
            uri: "pages/second/second"
        })
    }
}



