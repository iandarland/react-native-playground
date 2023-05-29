// use this to decode a token and get the user's information out of it
import decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';


// create a new class to instantiate for a user
class AuthService {
  // get user data
  getProfile() {
    return decode(this.getToken());
  }

  // check if user's logged in
  loggedIn() {
    // Checks if there is a saved token and it's still valid
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token); // handwaiving here
  }

  // check if token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }

  async getToken() {
    // Retrieves the user token from localStorage
    const token = await AsyncStorage.getItem('id_token');
    return token
  }

  async login(idToken, navigation) {
    // Saves user token to localStorage
    await AsyncStorage.setItem('id_token', idToken);
    navigation.navigate('My Account');
    navigation.popToTop()
  }

  async logout() {
    // Clear user token and profile data from localStorage
    await AsyncStorage.removeItem('id_token');
    
    // this will reload the page and reset the state of the application
    window.location.assign('/');
  }
}

export default new AuthService();