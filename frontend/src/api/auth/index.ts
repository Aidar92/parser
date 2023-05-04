import { ky } from '../kyInstance';

const URL = '/api/auth';

export namespace Auth {
  export type Model = {
    email: string;
    password: string;
  };

  class Controller {
    readonly url: string;

    constructor(url: string) {
      this.url = url;
    }

    login(userDto: Model) {
      return ky.post(`${this.url}/login`, { json: userDto }).json();
    }

    signUp(userDto: Model) {
      return ky.post(`${this.url}/signup`, { json: userDto }).json();
    }
  }

  export const controller = new Controller(URL);
}
