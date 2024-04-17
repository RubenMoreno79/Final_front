import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

    const token = localStorage.getItem('token_crm');

    if (token) {
        const reqWithHeaders = req.clone({
            headers: req.headers.set('Authorization', token)
        })
        return next(reqWithHeaders);
    }

    return next(req);
};
console.log('hola')
//prueba hola