import { googleLogout } from '@react-oauth/google';
import { JWTClient } from '../utils/jwt-client';
import { IAuthPayload, IAuthCredentialsPassword, IUser, api, IAuthCredentialsTeams } from '../utils/api';
import { initialState, useAppStore } from '../store';

// returned from google after user authenticates
interface IAuthPayloadGoogle {
  accessToken: string;
  tokenType?: string;
  expiresIn?: number;
  scope?: string;
  authUser?: string;
  prompt?: string;
}

// TODO: Fix the 'mix' of encapsulation here. this.apiService <-> apiService, etc.
class AuthService {
  private useAppStore: any;
  private defaultState: any;
  private jwtClient: any;

  constructor() {
    this.useAppStore = useAppStore;
    this.jwtClient = new JWTClient();
    this.defaultState = { ...initialState };
  }

  public async register(user: IUser) {
    return await api.users.create(user);
  }

  public async loginPassword(credentials: IAuthCredentialsPassword) {
    return await this.handleLogin(api.auth.password, credentials);
  }

  public async loginGoogle(googlePayload: IAuthPayloadGoogle) {
    return await this.handleLogin(api.auth.google, googlePayload);
  }

  public async loginTeams(teamsCredentials: IAuthCredentialsTeams) {
    return await this.handleLogin(api.auth.teams, teamsCredentials);
  }

  private async handleLogin(apiMethod: Function, 
                            payload: IAuthCredentialsPassword | IAuthPayloadGoogle | IAuthCredentialsTeams) {

    const responseData: IAuthPayload | null = await apiMethod(payload);

    if (responseData) {
      this.jwtClient.setToken(responseData.token);
      api.setHeaders({ Authorization: `Bearer ${responseData.token}` })
      useAppStore.setState({ user: responseData.user })
      window.localStorage.setItem('user', JSON.stringify(responseData.user));
    }
    
    return responseData;
  }

  public logout() {
    // Delete the local state
    this.useAppStore.setState(this.defaultState);
    // Completely clear local storage
    window.localStorage.clear();
    // clearing localStorage also removes the token. Left here for clarity
    this.jwtClient.removeToken();
    api.resetHeaders();
    googleLogout();
  }
}

export type {
  IAuthPayloadGoogle,
}

export {
  AuthService,
}
