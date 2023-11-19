// reponse 타입은 공용으로 사용되므로, data는 제네릭 타입 가지도록 설정
export type Response<T> = {
  code: number;
  message: string;
  data: T;
};
