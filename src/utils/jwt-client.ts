import jwt_decode from 'jwt-decode';

interface IDecodedToken {
  expires: number;
  id: number;
  email: string;
}

export class JWTClient {
  private tokenName: string;

  constructor(tokenName: string = 'jwt_token') {
    this.tokenName = tokenName;
  }

  public setToken(token: string): void {
    const decodedToken:IDecodedToken = jwt_decode(token);
    const expirationDate = new Date(decodedToken.expires).getTime();

    // Store the token in the local storage
    localStorage.setItem(this.tokenName, JSON.stringify({
      token,
      expirationDate,
    }));
  }

  public getToken(): string | null {
    const tokenObject = JSON.parse(localStorage.getItem(this.tokenName) || '{}');

    // If the token exists, return it
    if (tokenObject.token) { 
      return tokenObject.token;
    }

    return null;
  }

  public removeToken(): void {
    localStorage.removeItem(this.tokenName);
  }

  public decodeToken(): IDecodedToken | null {
    const token = this.getToken();

    if (token) {
      return jwt_decode(token);
    }

    return null;
  }
}
