import { Exclude, Expose } from 'class-transformer';

export interface IResponseEntity<T> {
  status: number;
  message: string;
  data: T;
}

export class ResponseEntity<T> {
  @Exclude() private readonly _status: number;
  @Exclude() private readonly _message: string;
  @Exclude() private readonly _data: T;

  constructor(response: IResponseEntity<T>) {
    this._status = response.status;
    this._message = response.message;
    this._data = response.data;
  }

  public static async new<T>(response: IResponseEntity<T>): Promise<ResponseEntity<T>> {
    const entity = new ResponseEntity(response);
    return entity;
  }

  @Expose()
  get status(): number {
    return this._status;
  }

  @Expose()
  get message(): string {
    return this._message;
  }

  @Expose()
  get data(): T {
    return this._data;
  }
}
