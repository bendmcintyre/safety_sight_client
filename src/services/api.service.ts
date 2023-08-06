import axios from 'axios';

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

class ApiService {
  public objectId: string;
  public loading: boolean;
  public error: any;
  public readonly defaultHeaders: any = {
    'Content-type': 'application/json',
  }

  private http: any;
  private static instance: ApiService;

  constructor() {
    this.objectId = `object-${new Date().getTime()}`
    this.error = '';
    this.loading = false;
    this.http = axios.create({
      baseURL: BASE_URL,
      headers: this.defaultHeaders,
    });
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  public async getData(url = '') {
    this.loading = true;
    this.error = '';

    try {
      return await this.http.get(url);
    } catch (error:any) {
      this.error = error.message;
      return null;
    } finally {
      this.loading = false;
    }
  }

  public async postData(url = '', data = {}) {
    console.log('POSTDATA:', this.objectId);
    this.loading = true;
    this.error = '';
    console.log('LOADING IS TRUE:', this.objectId);

    try {
      console.log('SENDING REQUEST');
      const response = await this.http.post(url, data);
      return response
    } catch (error:any) {
      this.error = error.message;
      return null;
    } finally {
      this.loading = false;
      console.log('LOADING IS FALSE:', this.objectId);
    }
  }

  public setHeaders(headers: any) {
    this.http.defaults.headers = {
      ...this.http.defaults.headers,
      ...headers,
    };
  }

  public resetHeaders() {
    this.http.defaults.headers = {
      ...this.http.defaults.headers,
    }
  }
}

export {
  ApiService,
}