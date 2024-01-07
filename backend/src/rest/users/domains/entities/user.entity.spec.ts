import { User } from './user.entity';

describe('User', () => {
  describe('fullName', () => {
    it('should return the full name of the user', () => {
      // Given
      const user = User.new({
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@test.com',
        city: '',
        country: '',
        nickname: '',
        password: '',
        passwordConfirm: '',
      });

      // When
      const received = user.fullName;

      // Then
      expect(received).toBe('John Doe');
    });
  });
});
