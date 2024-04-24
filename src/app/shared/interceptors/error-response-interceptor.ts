import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const ErrorResponseInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => next(req).pipe(catchError((error) => handleErrorResponse(error)));

function handleErrorResponse(
  error: HttpErrorResponse
): ReturnType<typeof throwError> {
  const errorResponse = `Ocurrio un error - Status: ${error.status}, Message: ${error.message}`;

  return throwError(() => errorResponse);
}
