// User 인터페이스 선언하고, 필요한 곳에서 원하는 값만 추출해서 사용하면 공용으로 타입관리 가능함
export interface User {
  id: string;
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  country: string;
  city: string;
}
