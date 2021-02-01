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
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getMessage(state){
      return state.message;
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