import { Sample } from '@/src/domain/entity/sample';

export interface ISampleUsecase {
  findAll(): Promise<Sample[]>;
  create(sample: Sample): Promise<Sample>;
  findOne(id: number): Promise<Sample>;
  update(sample: Sample): Promise<Sample>;
  delete(id: number): Promise<number>
}
