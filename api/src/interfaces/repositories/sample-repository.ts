import { Sample } from '@/src/domain/entity/sample';
import { ISampleRepository } from '@/src/interfaces/type/repository/i-sample-repository';

export class SampleRepository implements ISampleRepository {
  private mapToEntity (row: any) {
    return new Sample({
      id: row.id,
      name: row.name,
    });
  }

  async findAll (): Promise<Sample[]> {
    const result: any = [];
    return result.map(item => this.mapToEntity(item));
  }

  async findOne (id: number): Promise<Sample> {
    const result: any = {};
    return result.map(item => this.mapToEntity(item));
  }

  async create (sample: Sample): Promise<Sample> {
    const result: any = {};
    return result.map(item => this.mapToEntity(item));
  }

  async update (sample: Sample): Promise<Sample> {
    const result: any = {};
    return result.map(item => this.mapToEntity(item));
  }

  async delete (id: number): Promise<void> {
    const result: any = {};
  }
}
