<template>
  <q-page v-if="me">
    <div class="q-pa-lg">
      <div v-if="!me.account.id && me.accounts && !account.id">
        <h6 class="q-mt-none q-mb-sm">Select an account</h6>
        <q-table
          :data="me.accounts"
          :columns="columns"
          :visible-columns="visibleColumns"
          row-key="name"
          style="max-width: 650px"
        >
          <template #body-cell="props">
            <q-td :props="props">
              <span style="cursor: pointer" @click="selectAccount(props.row)">{{
                props.value
              }}</span>
            </q-td>
          </template></q-table
        >
      </div>

      <div v-if="account.id">
        {{ account.name }}
      </div>
    </div>
  </q-page>
</template>

<script>
import { accountQueries } from "src/graphql";

export default {
  name: "Index",
  data() {
    return {
      visibleColumns: ["name"],
      columns: [
        {
          name: "id",
          // required: true,
          label: "ID",
          align: "left",
          field: (row) => row.id,
        },
        {
          name: "name",
          // required: true,
          label: "Name",
          align: "left",
          field: (row) => row.name,
          sortable: true,
        },
      ],
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
  },
  methods: {
    async selectAccount(account) {
      try {
        this.$q.localStorage.set("account", account);
        window.location = "/";
      } catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
