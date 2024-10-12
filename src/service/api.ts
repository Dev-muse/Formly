import axios from 'axios';
import { User } from '../types';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchUser = async (userId: number): Promise<User> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
};

export const updateUser = async (
  userId: number,
  userData: Partial<User>
): Promise<User> => {
  try {
    const response = await axios.put(
      `${API_BASE_URL}/users/${userId}`,
      userData
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

export const createUser = async (userData: Partial<User>): Promise<User> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/add`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create user');
  }
};
