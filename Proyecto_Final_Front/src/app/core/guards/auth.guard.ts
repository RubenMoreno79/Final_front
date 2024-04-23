import { inject } from "@angular/core"
import { CanActivateFn, Router } from "@angular/router"
import Swal from "sweetalert2";




export const authGuard: CanActivateFn = (route, state) => {

    const router = inject(Router)


    if (localStorage.getItem('token_crm')) {
        return true;
    }

    Swal.fire('Prohibido el paso', 'Para poder acceder debes estar registrado', 'warning')
    router.navigateByUrl('/login');
    return false
}