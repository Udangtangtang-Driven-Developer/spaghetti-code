import { Response } from "@/types/api";
import { User } from "../models/user.model";

// 추상화 - 뷰에서는 추상화된 이 함수만 사용하면 된다. 내부에서 어떤 동작하는지(mock os real data)인지는 알 필요가 없음
// 다시 말해서 api 관련 내부 로직이 뷰에 포함되어 있으면 안된다! (미션 조건)
export interface UsersApi {
  signup(req: Omit<User, "id">): Promise<Response<{ accessToken: string }>>;
}
