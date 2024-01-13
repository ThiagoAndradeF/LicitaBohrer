import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QrCodeService {


  constructor(private httpClient : HttpClient) { }
  private baseUrlIten = 'http://localhost:5000';

  public addOrderToStory(): Observable<any>{
    return this.httpClient.get(`${this.baseUrlIten}/api/hashes/${this.baseUrlIten}`);
  }
}
