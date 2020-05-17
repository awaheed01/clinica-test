<template>
  <v-data-table
    :headers="headers"
    :items="getData"
    :items-per-page="5"
    class="elevation-1"
  >
    <template v-slot:item.action="{ item }">
      <v-icon class="mr-2" @click="approvePayment(item)"
        >mdi-check-circle</v-icon
      >
      <v-icon class="mr-2" @click="cancelPayment(item)"
        >mdi-close-circle</v-icon
      >
    </template>
  </v-data-table>
</template>

<script>

import { mapMutations, mapActions, mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      headers: [
        {
          text: "Patient",
          align: "start",
          sortable: false,
          value: "patientName"
        },
        { text: "Gateway", value: "payment.gateway" },
        { text: "Amount", value: "payment.amount" },
        { text: "From", value: "payment.sentFrom" },
        { text: "Paid AT", value: "createdAt" },
        { text: "Date", value: "date" },
        { text: "Phone", value: "phone" },
        { text: "Action", value: "action", width: "10%" }
      ]
      
    };
  },
  created() {
    this.fetchData();
  },
  computed: {
    ...mapGetters({
      getData: "payment/getData"
    })
  },
  methods: {
    ...mapActions({
      fetchData: "payment/fetchData",
      approvePayment: "payment/approvePayment",
      cancelPayment: "payment/cancelPayment"
    }),
    // approvePayment(item) {
    //   console.log(item._id);
    // },
    // cancelPayment(item) {
    //   console.log(item);
    // }
  }
};
</script>
