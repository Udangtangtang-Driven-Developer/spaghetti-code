# USERS_INTERFACE

## Sign In

### 기본 정보

<table>
  <tr>
    <th>메서드</th>
    <th>URL</th>
    <th>인증 방식</th>
  </tr>
  <tr>
    <td>
    POST
    </td>
    <td>
    v1/users/sign_in
    </td>
    <td>
    액세스 토큰
    </td>
  </tr>
  </table>

### 요청

<table>
  <tr>
    <th>이름</th>
    <th>타입</th>
    <th>필수</th>
  </tr>
  <tr>
    <td>
    email
    </td>
    <td>
   string
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    nickname
    </td>
    <td>
   string
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    password
    </td>
    <td>
   string
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    passwordConfirm
    </td>
    <td>
   string
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    country
    </td>
    <td>
   string
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    city
    </td>
    <td>
   string
    </td>
    <td>
    O
    </td>
  </tr>
</table>

### 응답

<table>
  <tr>
    <th>이름</th>
    <th>타입</th>
    <th>필수</th>
  </tr>
  <tr>
    <td>
    code
    </td>
    <td>number
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    message
    </td>
    <td>string
    </td>
    <td>
    O
    </td>
  </tr>
  <tr>
    <td>
    data
    </td>
    <td>
      <code>{accessToken : "string"}</code>
    </td>
    <td>
    O
    </td>
  </tr>
</table>
