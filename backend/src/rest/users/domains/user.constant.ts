export class UserConstant {
  public static PASSWORD_REGIX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}:">?<,.;'`~]).*$/;
  public static PASSWORD_MIN_LENGTH = 8;
  public static PASSWORD_MAX_LENGTH = 32;
  public static NICKNAME_MIN_LENGTH = 0;
  public static NICKNAME_MAX_LENGTH = 255;
  public static FIRST_NAME_MIN_LENGTH = 1;
  public static FIRST_NAME_MAX_LENGTH = 255;
  public static LAST_NAME_MIN_LENGTH = 1;
  public static LAST_NAME_MAX_LENGTH = 255;
  public static COUNTRY_MIN_LENGTH = 0;
  public static COUNTRY_MAX_LENGTH = 255;
  public static CITY_MIN_LENGTH = 0;
  public static CITY_MAX_LENGTH = 255;
}
