import { Response } from "@/types/api";
import { defaultAxios } from "./config";
import { User } from "./users/models/user.model";
import { UsersApi } from "./users/interfaces";

// body + query 포함하도록 request 용어 사용
// 명세서 보고 먼저 api 작성하고 그 다음에 뷰단 작성하기

// const signIn = async (
//   body: Omit<User, "id">
// ): Promise<Response<{ accessToken: string }>> => {
//   const response = await defaultAxios.post<Response<{ accessToken: string }>>(
//     "/v1/users/sign-in",
//     body
//   );

//   //   return response.data;
//   return {
//     code: 200,
//     message: "ok",
//     data: {
//       accessToken: "token",
//     },
//   };
// };
// 구현체
class MockUserApi implements UsersApi {
  async signup(
    req: Omit<User, "id">
  ): Promise<Response<{ accessToken: string }>> {
    return {
      // 뷰에서 사용하지 않는 건 보내지 마라..제발.. code, message 모두 필요 없어!
      code: 200,
      message: "ok",
      data: {
        accessToken: "token",
      },
    };
  }
}

//  오브젝트도 가능 클래스 아니어도 됨, 추상화 개념!! solid 원칙은 oop 클래스가 아니어도 무조건 지켜져야한다.
class UserApi implements UsersApi {
  private BASE_PATH = "v1/users";
  async signup(
    body: Omit<User, "id">
  ): Promise<Response<{ accessToken: string }>> {
    const response = await defaultAxios.post<Response<{ accessToken: string }>>(
      `${this.BASE_PATH}/sign-in`,
      body
    );

    return response.data;
  }
}

// 뷰에서는 타입을 하나만 알도록...
// 환경에 따라 내부에서 갈라치고, 뷰에서는 하나의 형태만 사용하도록 (내부 갈라치기 몰라도 됨) -> 솔리드 원칙
// 뷰는 원하는 데이터만 주면됨...내부에서 알아서 처리해줘..뷰에서 알바가 아냐................................
// 뷰는 렌더링 역할만..어떻게 오는지는 알려주지마..(필요한 데이터만 주기)
export const userApi: UsersApi =
  process.env.NODE_ENV === "production" ? new UserApi() : new MockUserApi();

//   Maybe -> 값 여부 체크
// 리액트 쿼리 값 여부 체크, 값 없으면 null 반환 - 뷰에서 에러 코드 체크하지말기..api 에 대한 try catch 문을 뷰 단까지 넘기지 마라..
// try catch를 싫어하는 이유는 indent가 더 들어가기 때문에..

// TODO: msw 적용하기
