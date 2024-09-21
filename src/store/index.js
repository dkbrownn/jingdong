import { createStore } from 'vuex'
export const setLocalSotrage = (state) => {
  const { cartList } = state
  const cartListString = JSON.stringify(cartList)
  localStorage.cartList = cartListString
}
const getLocalStorage = () => {
  return localStorage.cartList ? JSON.parse(localStorage.cartList) : {}
}
export default createStore({
  state: {
    // cartList: { shopId: { shopName: '', productList: { id1:{} .... } } }
    cartList: getLocalStorage(),
    // orderList:  [ {shopName: '',pay: 'true', CartList: {} } ]
    orderList: []
  },
  mutations: {
    addOrderList (state, payOrder) {
      const { shopName, pay, CartList } = payOrder
      state.orderList.push({ shopName, pay, CartList })
    /*       console.log(state.orderList) */
    },
    changeItemFromCart (state, payload) {
      let shopID = state.cartList[payload.id]
      if (!shopID) { shopID = { shopName: '', productList: {} } }
      let product = shopID.productList[payload.productId]
      if (!product) {
        product = payload.product
        product.count = 0
      }
      product.count += payload.num
      product.count <= 0 ? product.count = 0 : product.check = true
      if (product.count && product.check === true) {
        shopID.productList[payload.productId] = product
        state.cartList[payload.id] = shopID
        setLocalSotrage(state)
      }
      // eslint-disable-next-line no-unused-expressions
      /* shopID.productList[payload.productId] = product
      state.cartList[payload.id] = shopID
      setLocalSotrage(state) */
    },
    changeCheckFromCart (state, payload) {
      const { shopId, productId } = payload
      const product = state.cartList[shopId]?.productList[productId]
      product.check = !product.check
      setLocalSotrage(state)
    },
    changeShopName (state, payload) {
      const shopID = state.cartList[payload.id] || { shopName: '', productList: {} }
      shopID.shopName = payload.shopName
      state.cartList[payload.id] = shopID
      setLocalSotrage(state)
    }
  },
  actions: {
  },
  modules: {
  }
})
