import * as NavigationService from "./navigation.service";
import { AuthService } from '../auth'

function HttpErrorsService(response) {
  console.log('error -> ', response.status);

  switch (response.status) {
    case 401:
      AuthService.logout();
      break;   

    default:
      if (response.status >= 500) {
        NavigationService.goToLogin();
      }
  }
}

export default HttpErrorsService;