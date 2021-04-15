// we can create a template inside of the instance instead of in the document

let vm = Vue.createApp({
    data() {
        return {
            message: "Hello world!",
        }
    },
    // may want to use the template property if HTML is stored inside a different file
    template: `{{ message }}`
    // NOT Recommended for 2 main reasons: 
    /* 
    *   1. Most editors won't be able to pickup the HTML syntax in a JS file
    *   2. Can't do mutiline template easily; String literals are not compatible with old browsers
    * 
    * 
    *  2 Versions of Vue
    *  1. One version WITH the compiler
    *  2. One version WITHOUT the compiler
    * 
    */
})

vm.mount('#app');

// manually created
let vm2 = Vue.createApp({
    data() {
        return {
            message: "Hello world!",
        }
    },
    // manual render function
    render() {
        // hyper-script | creating html in JS
        return Vue.h(
            'h1',
            this.message
        )
    }
}
).mount("#app2");
