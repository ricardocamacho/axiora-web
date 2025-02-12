import type { AuthUser } from './types';

export const getCurrentUserFromLs = (): AuthUser | null => {
  let user = null;
  try {
    user =
      localStorage.getItem('axiora_current_user') != null
        ? JSON.parse(localStorage.getItem('axiora_current_user') as string)
        : null;
  } catch (error) {
    console.log('getCurrentUser -> error', error);
    user = null;
  }
  return user;
};

export const setCurrentUserToLs = (user: AuthUser | null) => {
  try {
    if (user) {
      localStorage.setItem('axiora_current_user', JSON.stringify(user));
    } else {
      localStorage.removeItem('axiora_current_user');
    }
  } catch (error) {
    console.log('setCurrentUser -> error', error);
  }
};
