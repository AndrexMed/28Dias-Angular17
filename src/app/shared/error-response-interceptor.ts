import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor: HttpInterceptorFn = (req, next) =>
  next(req).pipe(catchError((error) => handleErrorResponse(error)));

function handleErrorResponse(error: HttpErrorResponse) {
  const errorResponse = `Ocurrio un error - Status: ${error.status}, Message: ${error.message}`;

  return throwError(() => errorResponse);
}
