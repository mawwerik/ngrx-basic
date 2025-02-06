export interface AuthState {
  user: { id: number; name: string; email: string } | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

export const initialAuthState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};
