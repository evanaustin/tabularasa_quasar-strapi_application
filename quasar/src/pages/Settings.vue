<template>
  <q-page>
    <div class="q-pa-lg column">
      <h6>Account Settings</h6>

      <q-toggle
        v-for="(module, ix) in enabledModules"
        v-model="modules[ix].activated"
        :label="module.name"
        :key="`module-${ix}`"
        size="lg"
        @input="updateModule(module, ix)"
      ></q-toggle>
    </div>
  </q-page>
</template>

<script>
import {
  accountQueries,
  moduleQueries,
  moduleMutations,
} from "src/graphql";

export default {
  name: "Settings",
  data() {
    return {
      modules: [],
    };
  },
  apollo: {
    me: {
      query: accountQueries.getMe,
    },
    account: {
      query: accountQueries.getAccount,
      update: (res) => res.account,
    },
    modules() {
      return {
        query: moduleQueries.pullModules,
        update: (data) => {
          return data.modules.map((module) => {
            module.activated = !!this.account.modules.some(
              (el) => el.name === module.name
            );
            return module;
          });
        },
      };
    },
  },
  computed: {
    enabledModules() {
      return this.modules
        .filter((module) => {
          return module.enabled;
        });
    },
    activatedModules() {
      return this.modules
        .filter((module) => {
          return module.activated;
        })
        .reduce((a, b) => a.concat([b.id]), []);
    },
  },
  methods: {
    updateModule(module, ix) {
      this.$apollo
        .mutate({
          mutation: moduleMutations.toggleModule,
          variables: {
            accountID: this.account.id,
            modules: this.activatedModules,
          },
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
