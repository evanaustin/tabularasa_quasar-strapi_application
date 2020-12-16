import { isAuthenticated } from 'src/boot/auth';
import { LocalStorage } from 'quasar';
import { accountQueries} from 'src/graphql';

export async function apolloClientBeforeCreate({ apolloClientConfigObj/* , app, router, store, ssrContext, urlPath, redirect */ }) {
  if (!isAuthenticated()) return false;

  let me = LocalStorage.getItem('me');
  me.accounts.map(account => account.__typename = 'Account');

  let account = LocalStorage.getItem('account');

  if (account == 'null' || !account) {
    account = {
      id: null,
      name: null,
    }
  }

  apolloClientConfigObj.cache.writeData({
    data: {
      me: {
        ...me,
        __typename: 'Users',
        role: {
          ...me.role,
          __typename: 'Role',
        },
        account: {
          ...account,
          modules: [],
          __typename: 'Account',
        },
      },
      account: {
        ...account,
        __typename: 'Account',
      },
    }
  });

  console.info('%capolloClientBeforeCreate finished', 'color:green');
}

export async function apolloClientAfterCreate({ apolloClient, app, router, store, ssrContext, urlPath, redirect }) {
  if (!isAuthenticated()) {
    // apolloClient.clearStore(); // uncomment this line to wipe the cache 
    return false;
  }

  const me = await apolloClient.cache.readQuery({
    query: accountQueries.getMe,
  }).me;

  await apolloClient.query({
    query: accountQueries.pullFullAccount,
    variables: {
      id: me.account.id
    }
  });

  console.info('%capolloClientAfterCreate finished', 'color:green');
}
