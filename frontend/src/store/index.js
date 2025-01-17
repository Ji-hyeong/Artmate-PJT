import Vue from 'vue';
import Vuex from 'vuex';
// import jwt_decode from "jwt-decode";
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    isLogin: false,
    user: {
      userId : '',
      userPw : '',
      userName : '',
      feedName : '',
      introduction : '',
      userImg : '',
      accessKey : '',
      myTag: [],
    },
    message : '',
    stompClient: '',
    isNewAlarm: false,
    locationInfo:{},
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getMessage(state){
      return state.message;
    },
    getStompClient(state) {
      return state.stompClient;
    },
    getNewAlarm(state) {
      return state.isNewAlarm;
    },
    getCurrentLocation(state){
      return state.locationInfo;
    }
  },
  mutations: {
    setUserInfo(state, user) {
      state.user = user;
      // state.message = payload['message'];
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      state.user=null;
    },
    setStompClient(state, stompClient) {
      state.stompClient = stompClient;
    },
    setNewAlarmTrue(state) {
      state.isNewAlarm = true;
    },
    setNewAlarmFalse(state) {
      state.isNewAlarm = false;
    },
    setCurrentLocation(state,info){
      state.locationInfo=info;
    },
  },
  actions: {
    // async GET_MEMBER_INFO({ commit }, token) {
    //   let decode = jwt_decode(token);
    //   await findById(
    //     decode.userid,
    //     (response) => {
    //       if (response.data.message === "success") {
    //         commit("setUserInfo", response.data.userInfo);
    //         // router.push("/");
    //         // router.go(router.currentRoute);
    //       } else {
    //         console.log("유저 정보 없음!!");
    //       }
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // },
    LOGOUT({commit}) {
      commit('logout');
      localStorage.removeItem("access-token");
    },
  },
  modules: {
  }
})
