test('logHelloOnCreateMixin logs hello', () => {
    jest.spyOn(console, 'log')
    const Component = {
        render() { },
        mixins: [logHelloOnCreateMixin]
    }
    shallowMount(Component)
    expect(console.log).toHaveBeenCalledWith('hello')
})

