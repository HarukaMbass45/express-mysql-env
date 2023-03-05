export class User {
  private _email: string;

  public constructor (
    protected _lastName: string,
    protected _firstName: string,
    protected _id?: number,
  ) {}

  get id (): number | undefined {
    return this.id;
  }

  get lastName (): string {
    return this._lastName;
  }

  get firstName (): string {
    return this._firstName;
  }

  get email (): string {
    return this._email;
  }

  get fullName (): string {
    return `${this.lastName} ${this.firstName}`;
  }

  set setId (id: number) {
    this._id = id;
  }

  set setLastName (lastName: string) {
    this._lastName = lastName;
  }

  set setFirstName (firstName: string) {
    this._firstName = firstName;
  }

  set setEmail (email: string) {
    this._email = email;
  }
}
