export const state = () => ({
    data: []
  })
  
  export const mutations = {
    fetchPendingPaymentList(state, data) {
      state.data = data;
    }
  
  }
  
  
  export const actions = {
   async fetchData({ commit }) {

     
      let jwttoken = this.$auth.getToken('local').split(" ")[1];
      this.$axios.setHeader('Authorization', jwttoken);
      await this.$axios.get('transaction/pending')
        .then((res) => {
          if (res.status === 200) {
              console.log("payment");
            commit('fetchPendingPaymentList', res.data.data)
          }
        })
    },

    async approvePayment(context, item) {
        // console.log("state" + id);
        try {
          let jwttoken = this.$auth.getToken('local').split(" ")[1];
          this.$axios.setHeader('Authorization', jwttoken);
          await this.$axios.get(`transaction/approve/${item._id}/1`)
            .then(res => {
              if(res.data.success==true){
                context.dispatch('snackbar/successMessage',res.data.message, { root: true });
                context.dispatch('fetchData');
                
              }
              
              
            });
    
        } catch (error) {
    
        }
    
    },
    async cancelPayment(context, item) {
        // console.log("state Cancel" + id);
        try {
          let jwttoken = this.$auth.getToken('local').split(" ")[1];
          this.$axios.setHeader('Authorization', jwttoken);
          await this.$axios.get(`transaction/approve/${item._id}/0`)
            .then(res => {
              if(res.data.success==true){
                context.dispatch('snackbar/errorMessage',res.data.message, { root: true });
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
  