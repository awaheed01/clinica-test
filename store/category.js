export const state = () => ({
    categoryList: []
  })
  
  export const mutations = {
    addNewCategory(state, payload) {
      state.categoryList.splice(0, 0, payload);
    },
  
    removeCategory(state, payload) {
      state.categoryList.splice(payload.index, 1);
    },
    updateCategory(state, payload) {
      state.categoryList.splice(payload.index, 1, payload.data)
    },
    fetchCategory(state, categoryList) {
      state.categoryList = categoryList;
    }
  
  }
  
  
  export const actions = {
    async addCategory(context, item) {
      try {
        console.log(item);
        await this.$axios.$post(`categories`, item).then((res) => {
  
          if (res.code === 200) {
            context.commit('addNewCategory', res.data)
  
            context.commit('snackbar/setSnackBg', 'success', { root: true })
            context.commit('snackbar/setSnack', `${res.data.name} Added Succesfully`, { root: true })
  
          }
        });
  
  
      } catch (error) {
        if (error.response) {
          let errMsg = error.response.data.errors.name[0];
          context.commit('snackbar/setSnackBg', 'error', { root: true })
          context.commit('snackbar/setSnack', `${errMsg}`, { root: true })
        }
      }
    },
  
    async deleteCategory(context, item) {
      try {
        await this.$axios.$delete(`categories/${item.id}`)
          .then(res => {
  
            if (res.code === 200) {
  
              let deletedIndex = context.state.categoryList.findIndex(element => {
                return element.id == item.id;
              });
              context.commit('removeCategory', { index: deletedIndex, data: res.data })
  
              context.commit('snackbar/setSnackBg', 'success', { root: true })
              context.commit('snackbar/setSnack', `${res.data.name} Deleted Succesfully`, { root: true })
            }
          });
  
      } catch (error) {
  
      }
    },
  
    async editCategory(context, item) {
  
      try {
        await this.$axios.$put(`categories/${item.id}`, item)
          .then(res => {
  
            if (res.code === 200) {
  
              let editedIndex = context.state.categoryList.findIndex(element => {
                return element.id == item.id;
              });
              context.commit('updateCategory', { index: editedIndex, data: res.data })
  
              context.commit('snackbar/setSnackBg', 'success', { root: true })
              context.commit('snackbar/setSnack', `${res.data.name} Updated Succesfully`, { root: true })
            }
          });
  
      } catch (error) {
  
      }
  
    },
  
    async fetchCategory({ commit }) {
      await this.$axios.get('/categories')
        .then((res) => {
          if (res.status === 200) {
            commit('fetchCategory', res.data.data)
          }
        })
    }
  }
  
  export const getters = {
    getAllCategory: state => {
      return state.categoryList;
    }
  }
  