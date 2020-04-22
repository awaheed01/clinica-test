<template>
  <v-data-table
    :headers="headers"
    :items="getAllDoctors"
    :single-expand="true"
    show-expand
    item-key="_id"
    class="elevation-1"
  >
    <template v-slot:item.serial="{ item  }">{{(getAllDoctors.indexOf(item))+1}}</template>
    <!-- <template v-slot:item.data-table-expand>{{(getAllDoctors.indexOf(item))+1}}</template> -->
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Doctor List</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>

    <template v-slot:expanded-item="{ item }">
      <td :colspan="headers.length" class="pb-10 px-5">
        <v-row align="center">
          <v-col md="4">
            <v-card outlined class="pa-5 themeCard">
              <v-img
                src="https://picsum.photos/id/11/500/300"
                lazy-src="https://picsum.photos/id/11/10/6"
                aspect-ratio="1"
                class="grey lighten-2"
                max-width="200"
                max-height="200"
              ></v-img>
              <div class="my-2">
                <v-btn large color="primary" block>Chember List</v-btn>
              </div>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card class="pa-5 themeCard">
              <v-chip class="ma-5" color="primary">
                Registration Id : {{item.regId}}
              </v-chip>
              <br>
              <v-text-field
                label="Name"
                v-model="updatedName"
                :value="item.name" 
                @input="updateDoctor"
                outlined
              ></v-text-field>
              <v-text-field
                label="speciality"
                v-model="item.profile.speciality"
                outlined
              ></v-text-field>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card outlined class="pa-5 themeCard">
              <v-text-field
                label="Email"
                v-model="item.email"
                outlined
              ></v-text-field>
              <v-text-field
                label="Phone"
                v-model="item.phone"
                outlined
              ></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-card class="pa-5">
              <v-textarea
                outlined
                label="Bio"
                v-model="item.profile.bio"
              ></v-textarea>
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card class="pa-5">
               <v-textarea
                outlined
                label="Academics"
                v-model="item.profile.academic"
              ></v-textarea>
             
            </v-card>
          </v-col>
          <v-col md="4">
            <v-card class="pa-5">
              <v-textarea
                outlined
                label="Professional"
                v-model="item.profile.professional"
              ></v-textarea>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="4">
            <v-btn large color="primary" block @click="updateDoctor(item._id)">Save All</v-btn>
          </v-col>
        </v-row>
      </td>
    </template>
  </v-data-table>
</template>

<script>
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";

export default {
  data() {
    return {
      expanded: [],
      headers: [
        {
          text: "sl",
          align: "left",
          sortable: false,
          value: "serial"
        },
        { text: "Reg Id", value: "regId" },
        { text: "Name", value: "name" },
        { text: "Phone", value: "phone" },
        { text: "Email", value: "email" },

        { text: "More Info", value: "data-table-expand", width: "10%" }
      ],
      updatedName:null,


    };
  },
  created() {
    this.fetchDoctorListAction();
  },
   computed: {
    ...mapGetters({
      getAllDoctors:"doctor/getAllDoctors"
    })

  },

  methods: {
    updateDoctor(data){
    
      console.log(data + this.updatedName);
    },
    ...mapActions({
      fetchDoctorListAction: "doctor/fetchDoctorList"
    })
  }
};
</script>
<style lang="scss" scoped>
.themeCard {
  min-height: 22em;
  border-bottom: 5px solid#19bcfd !important;
}

.table {
  tr {
    padding: 1em;
  }
  td {
    border: none !important;
  }
}
</style>
