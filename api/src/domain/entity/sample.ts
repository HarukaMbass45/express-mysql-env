export class Sample {
  private _id?: number;
  private _name: string;

  public constructor (_name: string) {
    this._name = _name;
  }

  get name (): string {
    return this._name;
  }

  set setName (name: string) {
    this._name = name;
  }
}
