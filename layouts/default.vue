<template>
  <v-app>
    <nuxt />
    <AppSnackbar/>
  </v-app>
</template>

<script>
import AppSnackbar from '../components/AppSnackbar'
export default {
  components:{
    AppSnackbar
  },

  data () {
    return {
    }
  }
}
</script>
