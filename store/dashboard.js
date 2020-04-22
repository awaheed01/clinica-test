export const state = () => ({
    data: []
  })
  
  export const mutations = {
    fetchDashboardInfo(state, data) {
      state.data = data;
    }
  
  }
  
  
  export const actions = {
   async fetchData({ commit }) {
      this.$axios.setHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTEyMjc3MTIsImRhdGEiOnsiX2lkIjoiNWM0NzRmMGE1M2ZkYzgxOGQwYjM0NDEwIiwiZW1haWwiOiJuaWxveS5hbmRyb2lkQGdtYWlsLmNvbSIsIm5hbWUiOiJOYWJpZCBTYWxlaGluIE5pbG95Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTU3OTY5MTcxMn0.LnhGVpcwA4HZDlJzA_cf2du7yUwDlsXBTaKarX2ESDs')
      await this.$axios.get('/admin/dashboard/overview')
        .then((res) => {
          if (res.status === 200) {
            commit('fetchDashboardInfo', res.data.data)
          }
        // console.log(res);
        })
    }
  }
  
  export const getters = {
    getData: state => {
      return state.data;
    }
  }
  