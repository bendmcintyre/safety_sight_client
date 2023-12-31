import { useEffect } from 'react';
import { JWTClient } from '../utils/jwt-client';
import UserService from '../services/user.service';
import { useAppStore } from '../store';


function useUserLoader() {
  const jwtClient = new JWTClient(); // Custom hook to handle JWT

  useEffect(() => {
    const fetchUser = () => {
      try {
        // Do we have a user in localStorage?
        // Otherwise, we'll need to ask the API for the user data
        const storedUser = window.localStorage.getItem('user');
        if (storedUser) {
          return storedUser;
        }

        const decodedToken = jwtClient.decodeToken();
        if (decodedToken) {
          // Token exists, fetch user data using the API client
          return UserService.getUser(decodedToken.id);
        }

        return null;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    // Force the promise to result + parse the JSON
    const user = new Function('return ' + fetchUser())();
    if (user) {
      useAppStore.setState({ user });
    }
  }, []); // Only run the effect once on page load

  // return additional data or states related to user loading if needed
}

export {
  useUserLoader,
}