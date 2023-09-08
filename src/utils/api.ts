// example usage: 
//   api.auth.google({ foo: 'asdf123', bar: '123qwerty' })
//   api.user.create({ foo: 'asdf123', bar: '123qwerty' })
//   api.user.find(123)
//   api.inspections.list()
import { ApiService } from '../services/api.service';

// ----------------------------------------------
// - Third-Party 
//


// sent to our server to create/authenticate user
interface IAuthCredentialsGoogle {
}

// ----------------------------------------------
// - Models
//
// TODO: Complete this for what's fully representative of a user
interface IUser {
  email: string;
  password?: string; // only for password auth during inital creation
  googleId?: string;
  teamsId?: string;
  orgId?: string;
}

interface IInspection {
}

// ----------------------------------------------
// - Auth
//
interface IAuthCredentialsPassword {
  email: string;
  password: string;
}

interface IAuthCredentialsTeams {
}

interface IAuthPayload {
  message: string;
  token: string;
  user: IUser;
}


const apiService = ApiService.getInstance();
//console.log('api.ts - objectId: ', apiService.objectId);

const authApi = {
  password: async (data: IAuthCredentialsPassword) => await apiService.postData('/auth/password', data),
  google: async (data: any): Promise<IAuthPayload | null> => {
    try {
      const response = await apiService.postData('/auth/google', data);
      console.log(response)

      const responseData: IAuthPayload = response.data;

      console.log(responseData)

      return responseData;
    }
    catch(error) {
      // Handle any error that might occur during the request
      // TODO: Actually handle the errors lol
      console.error('Error:', error);
      return null;
    }
  },
  teams: async (data: IAuthCredentialsTeams) => await apiService.postData('/auth/teams', data),
}

const usersApi = {
  list: async () => await apiService.getData('/users'),
  create: async (data: IUser) => await apiService.postData('/users', data),
  find: async (id: number) => await apiService.getData(`/users/${id}`),
}

const categoriesApi = {
  inspections: {
    list: async () => await apiService.getData('/categories/inspections'),
    create: async (data: any) => await apiService.postData('/categories/inspections', data),
  }
}

const inspectionsApi = {
  list: async () => await apiService.getData('/inspections'),
  create: async (data: IInspection) => await apiService.postData('/inspections', data),
}

const api = {
  setHeaders: (headers: any) => apiService.setHeaders(headers),
  resetHeaders: () => apiService.resetHeaders(),

  auth: authApi,
  users: usersApi,
  inspections: inspectionsApi,
  categories: categoriesApi,
}

export type {
  IAuthCredentialsPassword,
  IAuthCredentialsGoogle,
  IAuthCredentialsTeams,
  IAuthPayload,
  IUser,
  IInspection,
}

export {
  api,
};
