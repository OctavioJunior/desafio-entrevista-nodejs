export interface UserRegisterDTO {
  userName: string;
  password: string;
}

export interface UserUpdateDTO {
  userName?: string;
  password?: string;
}
