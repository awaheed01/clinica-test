<template>
  <section>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      :clipped="clipped"
      app
    >
      <div class="top">
        <div class="logoDiv">
          <img class="logo" :src="require(`@/assets/images/logo.png`)" alt="">
        </div>
      </div>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon  @click.stop="mini = !mini"  />

      <v-toolbar-title v-text="title" />
      <v-spacer />
     
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>

      <div class="dashboardContent">
       <nuxt-child/>
      </div>

    </v-content>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </section>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'airplay',
          title: 'Dahboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-apps',
          title: 'Doctor',
          to: '/dashboard/doctor'
        },
        {
          icon: 'mdi-cash-usd',
          title: 'Payment',
          to: '/dashboard/payment'
        },
      
      

      ],
      mini: false,
      right: true,
      rightDrawer: false,
      title: 'Cliniva'
    }
  },
  created(){
    // this.$vuetify.theme.light.primary = '#4caf50'
  },
  methods:{
    async logout(){
      // await this.$auth.logout();
      this.$router.push('/');
       if (process.browser) {
          localStorage.clear(); 
      }
      this.$store.dispatch('snackbar/successMessage', 'Logged Out Succesfully')
      console.log("ok");
    }
  }
}
</script>
<style lang="scss" scoped>

 .logoDiv{
   text-align: center;

  .logo{
    height: 5em;
  }
 }
 .dashboardContent{
   padding: 1em!important;
 }

</style>
