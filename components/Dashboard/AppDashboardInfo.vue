<template>
  <v-row>
    <v-col md="4">
      <v-card class="pa-5 text-center secondary">
        <p class="display-3 font-weight-bold">{{ getData.docSignup}}</p>
        <p class="headline">Doctors</p>
        <p class="caption">Signup Today</p>
      </v-card>
    </v-col>
    <v-col md="4">
      <v-card class="pa-5 text-center secondary">
        <p class="display-3 font-weight-bold">{{ getData.patSignup}}</p>
        <p class="headline">Patients</p>
        <p class="caption">Signup Today</p>
      </v-card>
    </v-col>
    <v-col md="4">
      <v-card class="pa-5 text-center secondary">
        <p class="display-3 font-weight-bold">{{ getData.appointmentTaken}}</p>
        <p class="headline">Appoinment</p>
        <p class="caption">taken Today</p>
      </v-card>
    </v-col>
  </v-row>
  
</template>


<script>

import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
export default {

  created() {
    this.fetchData();
  },

  computed:{
    ...mapGetters({
      getData: "dashboard/getData"
    })
  },
  methods: {
    ...mapActions({
      fetchData: "dashboard/fetchData",
    }),
  }
  
}
</script>
<style lang="scss" scoped>
.v-card {
  color: white;
  margin: auto;
}
</style>
