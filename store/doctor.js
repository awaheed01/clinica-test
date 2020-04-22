export const state = () => ({
    doctorList: []
  })
  
  export const mutations = {

    fetchDoctorList(state, doctorList) {
      state.doctorList = doctorList;
    }
  
  }
  
  
  export const actions = {
    
    async fetchDoctorList({ commit }) {
     
      try{
        if (process.browser) {
            const token= localStorage.getItem('auth._token.local').split(" ");
            this.$axios.setHeader('Authorization', token[1]);
            await this.$axios.get('/admin/doctor/4')
            .then((res) => {
              if (res.status === 200) {
                commit('fetchDoctorList', res.data)
              }
            })
          }
      
        
       
      }catch(e){
        console.log(e);
      }
    },
    async updateDoctor(context, item) {

      try {
        await this.$axios.$put(`/admin/doctor/update/${item.id}`, item)
          .then(res => {
  
            if (res.code === 200) {
  
            }
          });
  
      } catch (error) {
  
      }
  
    },
  
  }
  
  export const getters = {
    
    getAllDoctors: state => {
      return state.doctorList.data;
    }

  }
  