import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, of } from 'rxjs';
import { Translation } from './models'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private readonly http: HttpClient) { }

  loadTranslations(): Subscription {
    return this.http.get('assets/translations.txt', {responseType: 'text'})
      .subscribe((data) => {
        return data
    })
  }
}
