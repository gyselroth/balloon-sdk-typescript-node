import { CoreV3Api } from '../src/api';
jest.mock('request');

describe('core api v2', () => {
  describe('users api', () => {
    it('Get all users', () => {
      var client = new CoreV3Api();
      var response = client.getCoreV3Users();
    });
  });
});
