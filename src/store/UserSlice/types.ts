export interface User {
  id: string;
  email: string;
  name: string;
}

export interface UserState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export interface UpdateUserData {
  name?: string;
  email?: string;
}
