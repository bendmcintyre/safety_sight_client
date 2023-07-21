import api from '../utils/api';

class UserService {
  getUsers() {
    // Implement logic to fetch users via API
    return api.get('/users');
  }

    createUser(user: any) { // or a more specific type if you have one
    // Implement logic to create new user via API
    return api.post('/users', user);
  }

}

export default new UserService();
