import { ISampleUsecase } from '@/src/application/type/i-sample-usecase';
import { Sample } from '@/src/domain/entity/sample';
import { ISampleRepository } from '@/src/interfaces/type/repository/i-sample-repository';

export class SampleUsecase implements ISampleUsecase {
  public constructor (private readonly sampleRepository: ISampleRepository) {}

  async findAll (): Promise<Sample[]> {
    const result = await this.sampleRepository.findAll();
    return result;
  }

  async create (sample: Sample): Promise<Sample> {
    const result = await this.sampleRepository.create(sample);
    return result;
  }

  async update (sample: Sample): Promise<Sample> {
    const result = await this.sampleRepository.update(sample);
    return result;
  }

  async findOne (id: number): Promise<Sample> {
    const result = this.sampleRepository.findOne(id);
    return result;
  }

  async delete (id: number): Promise<number> {
    this.sampleRepository.delete(id);
    return id;
  }
}
