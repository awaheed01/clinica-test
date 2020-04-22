<template>
  <section>
    <p class="display-1 primary pa-3 white--text">Doctor's Pending List</p>
    <v-row>
      <v-col md="4" v-for="(item, index) in getData" :key="index">
        <v-card class="pa-5" outlined>
          <div class=" d-flex justify-space-between align-center">
            <p class="body-1">
              <span
                ><span class="caption">Speciality :</span>
                {{ item.profile.speciality }}</span
              >
              <br />
              <span>
                <span class="caption">Reg ID :</span> {{ item.regId }}</span
              >
            </p>
          </div>
          <p class="title">
            {{ item.name }}
            <v-chip small class="ma-1" color="red" text-color="white"
              >Pending</v-chip
            >
          </p>
          <p class="overline"></p>
          <p class="body-1">{{ item.phone }}</p>
          <p class="body-1">{{ item.email }}</p>
          <p class="body-1">{{ item.profile.bio }}</p>

          <v-card-actions>
            <!-- <v-row justify="center">
              <v-dialog v-model="approvedialog" persistent max-width="350">
                <template v-slot:activator="{ on }">
                  <v-btn block large color="primary" dark v-on="on" >Approve</v-btn>
                </template>
                <v-card>
                  <v-card-title class="headline">Doctor Info</v-card-title>
                  <v-card-text>
                    <v-checkbox v-model="checkbox" :label="`Communicated`"></v-checkbox>
                    <v-textarea solo label="Remarks"></v-textarea>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="green darken-1" text @click="approvedialog = false">Cancel</v-btn>
                    <v-btn color="green darken-1" text >Approve Now</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
  
            </v-row> -->
            <v-btn block large color="primary" dark @click="approveDoctor(item._id)" >Approve</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      approvedialog: false,
      checkbox: false,

      pendingList: [
        // {
        //   profile: {
        //     expertise: ["Consultant", "Surgeon"],
        //     photo: null,
        //     bio:
        //       "Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text Dummy Text",
        //     speciality: "Opthalmology"
        //   },
        //   isBlocked: false,
        //   _id: "5c367f2ace52200c51289194",
        //   name: "Prof. Motahar Hossain Jewel",
        //   regId: "6011",
        //   phone: "01819279828",
        //   email: "j@gmail.com"
        // },
        {
          profile: {
            bio: "Bio",
            professional: "",
            academic: "",
            expertise: [],
            speciality: "Internal Medicine"
          },
          isBlocked: false,
          _id: "5e8f12a20e72e80b1762e0b8",
          name: "Dr Sany Alam",
          regId: "111111",
          phone: "01685066284",
          email: "shovon284@gmail.com"
        }
      ]
    };
  },

  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      getData: "pendinglist/getData"
    })
  },
  methods: {
    ...mapActions({
      fetchData: "pendinglist/fetchData",
      approveDoctor:"pendinglist/approveDoctor"
    }),
    approve(id) {
      this.approvedialog = false;
      console.log(id);
    }
  }
};
</script>
