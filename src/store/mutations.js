import * as Contants from './mutationType'

export default {
  [Contants.SHOWLOADING](state){
    state.showLoading = true
  },
  [Contants.HIDELOADING](state){
    state.showLoading = false
  },
  [Contants.GET_MODEL_LIST] (state, {Modelname, Modellist}) {
    state.Modelname = Modelname
    state.Modellist = Modellist
  },
  [Contants.GET_SEARCH_LIST] (state, searchList) {
    state.searchList = searchList
  },
  [Contants.GET_CARTYPE_LIST] (state, { carTypeList }) {
    state.carTypeList = carTypeList
  },
  [Contants.GET_CHECK_ITEM] (state, {pushCar}) {
    state.pushCar = pushCar
  },
  [Contants.GET_RECOMMOND_CAR] (state, {recommondCar}) {
    state.recommondCar = recommondCar
  },
  [Contants.GET_RECOMMON_STYLE] (state, {recommondStyle}) {
    state.recommondStyle = recommondStyle
  },
  [Contants.GET_CONTRASTCARMODEL] (state, contrastCarData) {
    state.contrastCarData = contrastCarData
  },
  [Contants.CHANGE_PUSHCAR] (state, pushCar) {
    state.pushCar = pushCar
  }
}
