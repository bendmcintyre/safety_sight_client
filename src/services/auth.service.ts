import { api } from '../utils/api';

interface Credentials {
  username: string;
  password: string;
}

class AuthService {
  login(credentials: Credentials) {
    return api.post('/auth/login', credentials);
  }

  register(user: Credentials) {
    return api.post('/auth/register', user);
  }
}

export default new AuthService();

