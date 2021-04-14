let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  }
})

vm.mount('#app');

// the mount method doesn't have to be chained after creating an app, it can be called at any time
/* setTimeout(() => {
  vm.mount('#app');
}, 3000) */

/* might want to not mount the application if don't want the user to interact with the application right away 
e.g. wait for some module to load first 

in most cases though, we would want to call mount right away, it's just good to know we have an alternative
*/