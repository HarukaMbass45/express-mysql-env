import { Sample } from '@/src/domain/entity/sample';

export interface ISampleRepository {
  findAll (): Promise<Sample[]>;
  findOne (id: number): Promise<Sample>;
  create (sample: Sample): Promise<Sample>;
  update (sample: Sample): Promise<Sample>;
  delete (id: number): Promise<void>;
}
