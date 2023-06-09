import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from './shared/authorization.service';


export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthorizationService);
  const router = inject(Router);


  if(authService.controllaPassword()){
    return true;
  }else{
    return router.navigate(['/login']);
  }
};
