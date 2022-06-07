import { Injectable } from '@nestjs/common';
import { Message } from '@multi-teste/api-interfaces';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {

  constructor(
    private http: HttpService
  ) {}


  getData(): Message {
    return { message: 'Welcome to api!' };
  }

  getAuthentication(): Observable<AxiosResponse<any, any>> {
    return this.http.post('https://service-sandbox.universalpay.com.br/connect/token', 
    {
      client_id : 'payment.service',
      scope : 'payments', 
      username : 'pay-service@crf.rj.gov.br',
      password : 'yJS?QC0do!M-@JMJ',
      grant_type : 'password',
    }, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      responseType: 'json'
    })
  }
}


