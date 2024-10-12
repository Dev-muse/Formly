import { User } from './types';
import { fetchUser, updateUser, createUser } from './service/api';
import { NavigateFunction } from 'react-router-dom';

export const loadUser = async (
  id: number,
  setUser: React.Dispatch<React.SetStateAction<Partial<User>>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  navigate: NavigateFunction
) => {
  setLoading(true);
  try {
    const userData = await fetchUser(id);
    setUser(userData);
    setError(null);
  } catch (err) {
    setError('Failed to load user');
    navigate('/');
  } finally {
    setLoading(false);
  }
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUser: React.Dispatch<React.SetStateAction<Partial<User>>>
) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({ ...prevUser, [name]: value }));
};

export const handleAddressChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setUser: React.Dispatch<React.SetStateAction<Partial<User>>>
) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({
    ...prevUser,
    address: {
      ...prevUser.address,
      [name]: value,
    },
  }));
};

export const handleSubmit = async (
  e: React.FormEvent,
  user: Partial<User>,
  userId: string | undefined,
  setSubmitted: React.Dispatch<React.SetStateAction<boolean>>,
  setLoading: React.Dispatch<React.SetStateAction<boolean>>,
  setError: React.Dispatch<React.SetStateAction<string | null>>,
  navigate: NavigateFunction,
  validateForm: () => boolean
) => {
  e.preventDefault();
  setSubmitted(true);

  if (validateForm()) {
    setLoading(true);
    try {
      if (userId && userId !== 'new') {
        await updateUser(parseInt(userId, 10), user);
        alert('User updated successfully');
      } else {
        await createUser(user);
        alert('User created successfully');
      }
      setError(null);
      navigate('/');
    } catch (err) {
      setError('Failed to save user');
    } finally {
      setLoading(false);
    }
  }
};

export const validateForm = (user: Partial<User>) => {
  if (
    !user.firstName ||
    !user.lastName ||
    !user.email ||
    !user.phone ||
    !user.username ||
    !user.age ||
    !user.height ||
    !user.weight ||
    !user.birthDate ||
    !user.gender ||
    !user.bloodGroup ||
    !user.address?.address ||
    !user.address?.city ||
    !user.address?.state
  ) {
    return false;
  }

  if (user.age < 18 || user.age > 120) return false;
  if (user.height < 100 || user.height > 250) return false;
  if (user.weight < 30 || user.weight > 300) return false;

  return true;
};
