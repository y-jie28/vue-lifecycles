let vm = Vue.createApp({
  })
  
  // name of component, 
  // mount cannot be used with component
  // properties defined in a component are unique
  vm.component('hello', {
    template: `<h1>{{ message }}</h1>`,
    data() {
        return {
            message: "Hello World!"
        }
    }
  })

  vm.mount('#app');
  
 