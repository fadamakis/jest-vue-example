export default const logHelloOnCreateMixin = {
    created ()
        console.log('hello')
    }
}
  


// Global
Vue.mixin(logHelloOnCreateMixin)



// Local
const TestComponent = {
  mixins: [logHelloOnCreateMixin]
}



