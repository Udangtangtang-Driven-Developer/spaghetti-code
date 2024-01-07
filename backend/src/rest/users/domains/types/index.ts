export interface IUser {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
  nickname: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  country: string;
  city: string;
}

export type NewUserParams = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>;
