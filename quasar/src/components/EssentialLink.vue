<template>
  <q-item
    v-if="(isAuthenticated() && private) || (!isAuthenticated() && !private)"
    clickable
    tag="a"
    :to="link"
  >
    <q-item-section v-if="icon" avatar>
      <q-icon :name="`fas fa-${icon}`" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>
        {{ caption }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { isAuthenticated } from "src/boot/auth";

export default {
  name: "EssentialLink",
  props: {
    title: {
      type: String,
      required: true,
    },
    caption: {
      type: String,
      default: "",
    },
    link: {
      type: String,
      default: "#",
    },
    icon: {
      type: String,
      default: "",
    },
    private: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    isAuthenticated,
  },
};
</script>
