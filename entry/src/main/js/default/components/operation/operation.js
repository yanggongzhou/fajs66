export default {
    data: {
        isEnjoy: false,
        catalogVisible: false,
    },

    drama() {
        this.isEnjoy = !this.isEnjoy;
    },
    catalog() {
        this.catalogVisible = true;
    },
    closeModal(){
        this.catalogVisible = false;
    }
}