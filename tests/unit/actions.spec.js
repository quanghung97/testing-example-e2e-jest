import { actions } from '../../src/store'

jest.mock('axios', () => {
  return {
    get: () => ({
      data: { userId: 100 }
    })
  }
})

describe('getPost', () => {
  it('makes a request and commits the response', async () => {
    const store = { commit: jest.fn() }

    await actions.getPost(store)

    expect(store.commit).toHaveBeenCalledWith('SET_POST', { userId: 100 })
  })

  it('makes a commits the response addItems', async () => {
    const store = { commit: jest.fn() }

    await actions.fetchItems(store)

    expect(store.commit).toHaveBeenCalledWith('addItems', [{ 'id': 1, 'name': 'Milk', 'status': 0 }, { 'id': 2, 'name': 'Bread', 'status': 0 }])
  })
})
