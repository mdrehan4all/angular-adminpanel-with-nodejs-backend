import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let router = new Router();
  let token = localStorage.getItem("token")??'';
  if(token == ''){
    router.navigate(['login']);
    return false;
  }
  return true;
};
