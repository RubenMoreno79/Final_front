import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { JwtPayloadCustom } from "../../services/usuarios.service";
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";

export const roleGuard: CanActivateFn = (route, state) => {


    const router = inject(Router);

    const decode: JwtPayloadCustom = jwtDecode(localStorage.getItem('token_crm')!);

    if (decode.user_role === 'profesor') {
        return true;
    }
    Swal.fire('No puedes acceder', 'Esta funcionalidad está limitada solo para usuarios administradores', 'warning');

    router.navigateByUrl('/home')

    return false

}