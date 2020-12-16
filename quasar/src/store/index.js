import Vue from 'vue';
import Vuex from 'vuex';

/*
 * This tabula rasa project does not rely on Vuex; instead,
 * it uses the cache built into Apollo (our GraphQL client).
 * 
 * Best practice is to maintain only a single source of truth,
 * so I recommend using the built-in Apollo cache instead of
 * Vuex.
 * 
 * Nonetheless, some use cases may benefit from an alternate
 * or secondary cache - for which Vuex would be suitable.
 */

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const state = {
    // 
  };

  const mutations = {
    // 
  };

  const Store = new Vuex.Store({
    state,
    mutations,

    modules: {
      // 
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV,
  });

  return Store;
}
