export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export interface AuthResponse {
  id: string;
  email: string;
  name: string;
}
