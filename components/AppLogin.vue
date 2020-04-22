<template>
  <section>
    <div class="container loginContainer">
      <v-card class="mx-auto loginDiv" min-width="800">
        <v-row>
          <v-col md="6" class="logoDiv">
            <img class="logo" :src="require(`@/assets/images/logo.png`)" alt />
          </v-col>
          <v-col md="6">
            <p class="sectionTitle">Login Here</p>
            <form>
              <v-text-field
                v-model="username"
                label="Username/Email"
                required
                @input="$v.name.$touch()"
                @blur="$v.name.$touch()"
              ></v-text-field>
              <v-text-field
                v-model="password"
                :error-messages="passwordErrors"
                label="Password"
                required
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
              ></v-text-field>

              <v-btn class="my-4" @click="submit">submit</v-btn>
            </form>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </section>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import ENVIRONMENT from "~/assets/js/env";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    password: { required }
  },

  data: () => ({
    username: "mac@gmail.com",
    password: "123456",
    name: ""
  }),

  computed: {
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Name must be at most 10 characters long");
      !this.$v.name.required && errors.push("Name is required.");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.required && errors.push("Password is required");
      return errors;
    }
  },

  methods: {
    async submit() {
      const data = {
        email: this.username,
        password: this.password
      };
      // console.log(data);
      this.$auth.loginWith("local", {
        data: data
      }).then(()=>{

        this.$store.dispatch('snackbar/successMessage', 'Logged In Succesfully')
        console.log("ok");

      })
    },
    // storeToken(token) {
    //   if (process.browser) {
    //     localStorage.setItem("authToken", token);
    //   }
    // },
    clear() {
      this.$v.$reset();
      this.name = "";
      this.email = "";
      this.select = null;
      this.checkbox = false;
    }
  }
};
</script>
<style lang="scss" scoped>
.loginContainer {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginDiv {
    padding: 2em;
  }
}
.sectionTitle {
  font-size: 2em;
  color: #0c4c94;
}
.logoDiv {
  display: flex;
  justify-content: center;
  align-items: center;

  .logo {
    height: 8em;
  }
}
</style>

