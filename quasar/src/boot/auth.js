import axios from 'axios';
import { LocalStorage, SessionStorage } from 'quasar';

console.log('booting auth...');

export const isAuthenticated = (cookie = 'token') => {
  const d = new Date();
  d.setTime(d.getTime() + (1000));
  let expires = d.toUTCString();

  document.cookie = cookie + '=temp_value;path=/;SameSite=Lax;expires=' + expires;
  let isAuthenticated = document.cookie.indexOf(cookie + '=') == -1;

  if (!isAuthenticated) {
    expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = cookie + '=temp_value;path=/;SameSite=Lax;expires=' + expires;
  }

  return isAuthenticated;
}

if (isAuthenticated()) {
  console.info('%cUser authenticated', 'color: green')
  if (window.location.href.includes('login')) window.location = '/';
} else {
  console.info('%cUser not authenticated', 'color: red');

  axios
    .post(
      "http://localhost:3000/users-permissions/logout",
      {},
      {
        headers: {
          "content-type": "application/json",
        },
        withCredentials: true,
      }
    )
    .then(() => {
      LocalStorage.set("me", null)
      LocalStorage.set("account", null)
    });

  if (!(window.location.href.includes('login'))) window.location = '/login';
}
