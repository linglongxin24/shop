import {RECEIVE_ADDRESS, RECEIVE_FOOD_TYPES, RECEIVE_SHOP_LIST, RECEIVE_USER_INFO} from './mutations_types'

export default {
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_FOOD_TYPES] (state, {foodTypes}) {
    state.foodTypes = foodTypes
  },
  [RECEIVE_SHOP_LIST] (state, {shopList}) {
    state.shopList = shopList
  },
  [RECEIVE_USER_INFO] (state, {userInfo}) {
    state.userInfo = userInfo
  }
}
