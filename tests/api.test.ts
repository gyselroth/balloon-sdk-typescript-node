import { CoreV2Api } from '../src/api';
jest.mock('request');

describe('core api v2', () => {
  describe('users api', () => {
    it('Get all users', () => {
      var client = new CoreV2Api();
      var response = client.getUsers();
    });
  });
});
