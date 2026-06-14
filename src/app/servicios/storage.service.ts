import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setLocal(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  getLocal(key: string): string | null {
    return localStorage.getItem(key);
  }

  removeLocal(key: string): void {
    localStorage.removeItem(key);
  }

  setSession(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getSession(key: string): string | null {
    return sessionStorage.getItem(key); 
  }

  removeSession(key: string): void {
    sessionStorage.removeItem(key);
  }
}
