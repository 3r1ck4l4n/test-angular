export class UserModel{
  constructor(
    public userName: string,
    public numberPhone: number,
    public email: string,
    public password: string,
    public fullName:string
  ) {
  }
}
