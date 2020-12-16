<template>
  <div>
    <div class="q-pa-md">
      <div class="q-gutter-y-md column" style="max-width: 500px">
        <q-card>
          <q-card-section>
            <q-input v-model="email" label="Email"></q-input>

            <q-input
              v-model="password"
              label="Password"
              :type="showPassword ? 'text' : 'password'"
            >
              <template #append>
                <q-icon
                  :name="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
                  class="cursor-pointer"
                  @click="showPassword = !showPassword"
                ></q-icon>
              </template>
            </q-input>
          </q-card-section>
        </q-card>

        <q-btn color="primary" label="Log in" @click="logIn()"></q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  props: ["order"],
  data() {
    return {
      login: true,
      valid: false,
      showPassword: false,
      email: "",
      password: "",
      accountName: "",
      accountType: "",
      rules: {
        required: (v) => !!v || "This field is required",
        noSpaces: (v) => (v || "").indexOf(" ") < 0 || "No spaces are allowed",
      },
      emailRules: {
        valid: (v) => /.+@.+/.test(v) || "Email must be valid",
      },
      snackbar: { visible: false, message: "" },
    };
  },
  methods: {
    logIn() {
      console.log("logIn...");
      axios
        .post(
          "http://localhost:3000/auth/local",
          {
            identifier: this.email,
            password: this.password,
          },
          {
            headers: {
              "content-type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          try {
            this.$q.localStorage.set("me", res.data.user);
            window.location = "/";
          } catch (e) {
            console.error(e);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.v-btn {
  margin: 1rem 0;
}
</style>
