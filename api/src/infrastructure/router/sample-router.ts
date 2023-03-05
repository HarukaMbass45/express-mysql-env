import { Router, Request, Response, NextFunction } from 'express';
import { SampleRequest } from '@/src/interfaces/type/request';
import { SampleController } from '@/src/interfaces/controllers/sample-controller';
import { SampleRepository } from '@/src/interfaces/repositories/sample-repository';
import { SampleUsecase } from '@/src/application/usecase/sample-usecase';

export const sampleRouter = (): Router => {
  const router = Router();
  const sampleRepository = new SampleRepository();
  const sampleUsecase = new SampleUsecase(sampleRepository);
  const sampleController = new SampleController(sampleUsecase);

  router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await sampleController.findAll();
      res.status(200).json(result);
    } catch (err) {
      next(err);
    }
  });

  router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestBody: SampleRequest = req.body;
      const result = await sampleController.create(requestBody);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = +req.params.id;
      const result = await sampleController.findOne(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = +req.params.id;
      const requestBody = req.body;
      const result = await sampleController.update(id, requestBody);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: number = +req.params.id;
      const result = await sampleController.delete(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  });

  return router;
};
