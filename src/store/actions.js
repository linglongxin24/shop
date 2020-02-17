import {RECEIVE_ADDRESS, RECEIVE_FOOD_TYPES, RECEIVE_SHOP_LIST} from './mutations_types'
import {reqAddress, reqFoodTypes, reqShopList} from '../api'
export default {
  async getAddress ({commit, state}) {
    const latitude = state.latitude
    const longitude = state.longitude
    const result = await reqAddress(latitude, longitude)
    if (result.code === 0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, {address})
    }
  },
  async getFoodTypes ({commit}) {
    const result = await reqFoodTypes()
    if (result.code === 0) {
      const foodTypes = result.data
      commit(RECEIVE_FOOD_TYPES, {foodTypes})
    }
  },
  async getShopList ({commit, state}) {
    const latitude = state.latitude
    const longitude = state.longitude
    const result = await reqShopList(latitude, longitude)
    if (result.code === 0) {
      const shopList = result.data
      commit(RECEIVE_SHOP_LIST, {shopList})
    }
  }
}
