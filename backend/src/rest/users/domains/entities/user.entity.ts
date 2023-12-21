import { Exclude, Expose } from 'class-transformer';
import { IsDate, IsEmail, IsInt, IsOptional, IsString, validateSync } from 'class-validator';

export interface IUser {
  id?: number;
  nickname: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
  country: string;
  city: string;
}

export type NewUserParams = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>;

export class User {
  @IsOptional()
  @IsInt()
  @Exclude()
  private _id?: number;

  @IsString()
  @Exclude()
  private _nickname: string;

  @IsEmail()
  @Exclude()
  private _email: string;

  @IsString()
  @Exclude()
  private _password: string;

  @IsOptional()
  @IsDate()
  @Exclude()
  private _createdAt?: Date;

  @IsOptional()
  @IsDate()
  @Exclude()
  private _updatedAt?: Date;

  @IsString()
  @Exclude()
  private _country: string;

  @IsString()
  @Exclude()
  private _city: string;

  constructor(user: IUser) {
    this._id = user.id;
    this._nickname = user.nickname;
    this._email = user.email;
    this._password = user.password;
    this._createdAt = user.createdAt || new Date();
    this._updatedAt = user.updatedAt || new Date();
    this._country = user.country;
    this._city = user.city;
  }

  public static new(user: NewUserParams): User {
    const entity = new User({ ...user, id: 1 });
    const errors = validateSync(entity);
    if (errors.length > 0) throw new Error('Validation failed!');

    return entity;
  }

  @Expose()
  get id(): number {
    if (!this._id) throw new Error('User identifier is not defined');
    return this._id;
  }

  @Expose()
  get nickname(): string {
    return this._nickname;
  }

  @Expose()
  get email(): string {
    return this._email;
  }

  get password(): string {
    return this._password;
  }

  @Expose()
  get createdAt(): Date {
    if (!this._createdAt) throw new Error('User creation date is not defined');
    return this._createdAt;
  }

  @Expose()
  get updatedAt(): Date {
    if (!this._updatedAt) throw new Error('User update date is not defined');
    return this._updatedAt;
  }

  @Expose()
  get country(): string {
    return this._country;
  }

  @Expose()
  get city(): string {
    return this._city;
  }
}
