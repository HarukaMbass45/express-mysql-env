import { Sample } from '@/src/domain/entity/sample';
import { SampleRequest } from '@/src/interfaces/type/request';
import { ISampleUsecase } from '@/src/application/type/i-sample-usecase';

export class SampleController {
  public constructor (
    private readonly sampleUsecase: ISampleUsecase,
  ) {}

  async findAll (): Promise<Sample[]> {
    const result = await this.sampleUsecase.findAll();
    return result;
  }

  async findOne (id: number): Promise<Sample> {
    const result = await this.sampleUsecase.findOne(id);
    return result;
  }

  async create (sampleRequest: SampleRequest): Promise<Sample> {
    const result = await this.sampleUsecase.create(new Sample({ name: sampleRequest.name }));
    return result;
  }

  async update (id: number, sampleRequest: SampleRequest): Promise<Sample> {
    const result = await this.sampleUsecase.update(new Sample({ id: id, name: sampleRequest.name }));
    return result;
  }

  async delete (id: number): Promise<number> {
    const result = await this.sampleUsecase.delete(id);
    return result;
  }
}
