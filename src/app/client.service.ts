import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private baseUrl = 'http://localhost:8090/api/client/info';

  constructor(private http: HttpClient) { }

  getClientInfo(tipoDocumento: string, numeroDocumento: string): Observable<any> {
    const params = new HttpParams()
      .set('tipoDocumento', tipoDocumento)
      .set('numeroDocumento', numeroDocumento);

    return this.http.get(this.baseUrl, { params });
  }
}
