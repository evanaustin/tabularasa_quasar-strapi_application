import { queries } from 'src/graphql/Modules'
import { mutations } from 'src/graphql/Modules'

export const resolvers = {
  Mutation: {
    toggleModule: async (_, args, { client, cache }) => {
      await client.mutate({
        mutation: mutations.updateAccountModule,
        variables: {
          accountID: { id: args.accountID },
          modules: args.modules,
        },
      });

      const modules = cache.readQuery({
        query: queries.getModules
      }).modules;

      const data = cache.readQuery({
        query: queries.getAccountModules
      });

      let freshModules = [];

      args.modules.forEach(moduleID => {
        freshModules.push(modules.find((el) => el.id === moduleID));
      });

      data.account.modules = freshModules;

      cache.writeQuery({
        query: queries.getAccountModules,
        data,
      });

      return data.account.modules;
    },
  },

  Query: {
    //
  }
}
