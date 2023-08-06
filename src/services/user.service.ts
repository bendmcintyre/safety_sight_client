import { api } from '../utils/api';

class UserService {
  async getUsers() {
    // Implement logic to fetch users via API
    return await api.users.list();
  }

  async getUser(id: number | string) {
    const userId = Number(id);
    // Implement logic to fetch user via API
    return await api.users.find(userId);
  }

  async createUser(user: any) { // or a more specific type if you have one
    // Implement logic to create new user via API
    return await api.users.create(user);
  }
}

export default new UserService();
