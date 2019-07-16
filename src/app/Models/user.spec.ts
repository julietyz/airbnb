import { User } from './user';


describe('User', () => {
  it('should create an instance', () => {
    expect(new User(Number, String, String, Number, String, String)).toBeTruthy();
  });
});
