export const state = () => ({
    data: []
  })
  
  export const mutations = {
    fetchPendingList(state, data) {
      state.data = data;
    }
  
  }
  
  
  export const actions = {
   async fetchData({ commit }) {
      this.$axios.setHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTEyMjc3MTIsImRhdGEiOnsiX2lkIjoiNWM0NzRmMGE1M2ZkYzgxOGQwYjM0NDEwIiwiZW1haWwiOiJuaWxveS5hbmRyb2lkQGdtYWlsLmNvbSIsIm5hbWUiOiJOYWJpZCBTYWxlaGluIE5pbG95Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTU3OTY5MTcxMn0.LnhGVpcwA4HZDlJzA_cf2du7yUwDlsXBTaKarX2ESDs')
      await this.$axios.get('admin/doctor/pending')
        .then((res) => {
          if (res.status === 200) {
            commit('fetchPendingList', res.data.data)
          }
        })
    },

    async approveDoctor(context, id) {
        console.log("state" + id);
        try {
          this.$axios.setHeader('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MTEyMjc3MTIsImRhdGEiOnsiX2lkIjoiNWM0NzRmMGE1M2ZkYzgxOGQwYjM0NDEwIiwiZW1haWwiOiJuaWxveS5hbmRyb2lkQGdtYWlsLmNvbSIsIm5hbWUiOiJOYWJpZCBTYWxlaGluIE5pbG95Iiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTU3OTY5MTcxMn0.LnhGVpcwA4HZDlJzA_cf2du7yUwDlsXBTaKarX2ESDs')
          await this.$axios.post(`admin/doctor/approve/${id}`)
            .then(res => {
              if(res.data.success==true){
                context.dispatch('snackbar/successMessage',res.data.message, { root: true });
                context.dispatch('fetchData');
                
              }
              
              
            });
    
        } catch (error) {
    
        }
    
      },
  }
  
  
  export const getters = {
    getData: state => {
      return state.data;
    }
  }
  