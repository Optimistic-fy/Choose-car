var state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) : {
    showLoading: false,
    carTypeList:{},
    Modellist: [],
    Modelname:'',
    searchList:[],
    checkCarName:'',
    pushCar:[],
    firstIndex:'',
    secondIndex:'',
    recommondCar:{},
    chooseCar: false,
    deleteCheck: false,
    recommondStyle:{},
    contrastCarData:[],
    mainBrandID:'',
    modelId1:'',
    modelId2:'',
    keywords:''
}
export default state