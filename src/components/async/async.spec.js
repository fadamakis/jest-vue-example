
describe("Item.vue", () => {

  test.skip('awaits promises', async () => {
    expect.assertions(1)
    let hasResolved = false
    Promise.resolve().then(() => {
      hasResolved = true
    })
    // await flushPromises() //npm install --save-dev flush-promises 
  
    expect(hasResolved).toBe(true)
  })
  
})
  
  
  
//   test('fetches data', async () => {
//     expect.assertions(1)
//     const data = await fetchListData()
//     expect(data).toBe('some data')
//   })
  
  