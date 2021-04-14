let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!",
    }
  },
  // use lifecycle | all lifecyles are functions
  beforeCreate() { // no access to data bc Vue haven't created the proxy methods, instance will not be reactive
    console.log('beforeCreate() function called!', this.message);
  }, 
  created() {
    console.log('created() function called!', this.message);
  },
  beforeMount() {
    console.log('beforeMount() function called!', this.$el);
  },
  mounted() { // triggered only once the template is done compiling and inserted into the document
    console.log('mounted() function called!', this.$el);
  },
  beforeUpdate() {
    console.log('beforeUpdate() function called!');
  }, 
  updated() {
    console.log('updated() function called!');
  },
  beforeUnmount() { // for last min changes
    console.log('beforeUnmount() function called!');
  }, 
  unmounted() {
    console.log('unmounted() function called!');
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


/* Before the Vue life cycle may begin, the instance has to be created first; 
 *  Vue.createApp().mount() -> [lifecycle01: __beforeCreate__] -> 
 *  Initialize data and methods -> 
 *  Instance Created [lifecycle02: created] -> 
 *  Compile Template (el Property) -> [lifecycle03: beforeMount] ->
 *  Replace el property with compiled template -> 
 *  [lifecycle04: _Mounted_] ->
 *  Data Changes -> 
 *  [lifecycle05: beforeUpdate] -> 
 *  Apply changes to the template -> [lifecycle06: updated] 
 *  -> Mounted REPEAT |
 *  --> vm.unmount() -> [lifecycle07: beforeUnmounted] // destroying the instance; usually done if no longer want user to interact with the app; no going back
 *  --> Vue instance destroyed -> [lifecycle08: unmounted]
 *  
 *  05 and 06 lifecycles are used mainly for _debugging_. Watchers and methods usually covers change/update 99% of time. 
 *  07: will still have access to methods and data; 08: no longer have access to methods or data after the instance is destroyed. 
 *  
 *  Compiling is when Vue will scan for Directives, expressions, events and bindings inside the template
 * 
 */