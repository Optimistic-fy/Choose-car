import * as Contants from './mutationType'
import axios from 'axios'

export default {
  showloader: ({ commit }) => {
    commit(Contants.SHOWLOADING)
  },
  hideloader: ({ commit }) => {
    commit(Contants.HIDELOADING)
  },
  async getTypeInfo ({commit, state}) {
    // 发送ajax请求
    let result = await axios.get('/api/city.json')
    result = result.data

    // 提交一个mutation
    if (result.code === 0) {
      const data = result.data[0]
      let carTypeList = data.allMainBrand

      commit(Contants.GET_CARTYPE_LIST, {carTypeList})
    } else {
      console.log('服务器错误！')
    }
  },
  async getModelList ({commit, state}, clickName) {
    if (clickName !== undefined) {
      // 发送ajax请求
      let result = await axios.get('/api/Model.json')
      result = result.data

      // 提交一个mutation
      if (result.code === 0) {
        const data = result.data
        let Modelname, Modellist

        data.forEach((item) => {
          if (clickName.indexOf(item.name) > -1) {
            Modelname = item.name
            Modellist = item.dataList

            commit(Contants.GET_MODEL_LIST, {Modelname, Modellist})
          }
        })
      } else {
        console.log('服务器错误！')
      }
    }
  },
  async getSearchList ({commit, state}, keyword) {
    // 发送ajax请求
    let result = await axios.get('/api/searchModelByKeyword.json')
    result = result.data

    // 提交一个mutation
    if (result.code === 0) {
      const data = result.data
      let searchList = []
      let resultList = []
      data.forEach((item) => {
        resultList.push(item.searchModels)
      })
      for (let k of resultList) {
        k.forEach(value => {
          if (value.modelName.indexOf(keyword) !== -1) {
            searchList.push(value)
          }
        })
      }
      commit(Contants.GET_SEARCH_LIST, searchList)
    } else {
      console.log('服务器错误！')
    }
  },
  async getCheckCar ({commit, state}, checkCarName) {
    if (checkCarName !== undefined) {
      // 发送ajax请求
      let result = await axios.get('/api/searchModelByKeyword.json')
      result = result.data

      // 提交一个mutation
      if (result.code === 0) {
        const data = result.data
        let pushCar = state.pushCar

        data.forEach((obj) => {
          obj.searchModels.forEach((item) => {
            if (checkCarName === item.modelName) {
              if (pushCar.length >= 2) {
                if (state.firstIndex === true && state.secondIndex === '') {
                  let second = pushCar.slice(pushCar.length - 1, pushCar.length)[0]
                  pushCar = []
                  pushCar.push(item)
                  pushCar.push(second)
                  state.firstIndex = ''
                } else if (state.firstIndex === '' && state.secondIndex === false) {
                  let first = pushCar.slice(pushCar.length - 2, pushCar.length - 1)[0]
                  pushCar = []
                  pushCar.push(first)
                  pushCar.push(item)
                  state.secondIndex = ''
                } else if (state.firstIndex === true && state.secondIndex === false) {
                  let newpushCar = pushCar.slice(pushCar.length - 1, pushCar.length)[0]
                  pushCar = []
                  pushCar.push(newpushCar)
                  state.chooseCar = false
                  state.firstIndex = ''
                  state.secondIndex = ''
                }
              } else {
                pushCar.push(item)
              }
              commit(Contants.GET_CHECK_ITEM, {pushCar})
            }
          })
        })
      } else {
        console.log('服务器错误！')
      }
    }
  },
  async getRecommondCar ({commit, state}) {
    // 发送ajax请求
    let result = await axios.get('/api/recommendmodel.json')
    result = result.data

    // 提交一个mutation
    if (result.code === 0) {
      const data = result.data
      let recommondCar

      recommondCar = data.recommendModel
      commit(Contants.GET_RECOMMOND_CAR, {recommondCar})
    } else {
      console.log('服务器错误！')
    }
  },
  async getContrastCarModel ({commit, state}) {
    // 发送ajax请求
    let result = await axios.get('/api/contrastCarModel.json')
    result = result.data

    // 提交一个mutation
    if (result.code === 0) {
      const data = result.data
      let contrastCarData = data[0].contrastResult
      commit(Contants.GET_CONTRASTCARMODEL, contrastCarData)
    } else {
      console.log('服务器错误！')
    }
  },
  async getRecommondStyle ({commit, state}) {
    // 发送ajax请求
    let result = await axios.get('/api/recommendstyle.json')
    result = result.data

    // 提交一个mutation
    if (result.code === 0) {
      const data = result.data
      let recommondStyle

      recommondStyle = data.recommendStyle
      // console.log(recommondStyle)
      commit(Contants.GET_RECOMMON_STYLE, {recommondStyle})
    } else {
      console.log('服务器错误！')
    }
  },
  changePushCar ({commit, state}, pushCar) {
    commit(Contants.CHANGE_PUSHCAR, pushCar)
  }

}
