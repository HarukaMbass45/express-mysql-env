export type SampleEntityPayload = {
  id?: number;
  name: string;
}

export class Sample {
  private readonly _id: number|null;
  private _name: string;

  public constructor (payload: SampleEntityPayload) {
    this._id = payload.id||null;
    this._name = payload.name;
  }

  get name (): string {
    return this._name;
  }

  set setName (name: string) {
    this._name = name;
  }
}
