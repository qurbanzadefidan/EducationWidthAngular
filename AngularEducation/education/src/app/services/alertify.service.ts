import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
declare let alertify: any;
// @ts-ignore
@Injectable({
  providedIn: 'root'
})
// @ts-ignore
export class AlertifyService {

  constructor( private http:HttpClient) {}

  success(message: string) {
    alertify.success(message);
  }

  warning(message: string) {
    alertify.warning(message);
  }

  error(message: string) {
    alertify.error(message);

  }

}
