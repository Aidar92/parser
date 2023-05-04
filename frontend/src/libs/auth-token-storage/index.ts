const STORAGE_KEY = 'authToken';

const store = (token: string): void => {
  localStorage.setItem(STORAGE_KEY, token);
};

const get = (): string | null => {
  return localStorage.getItem(STORAGE_KEY);
};

const remove = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const authTokenStorage = { get, store, remove };
