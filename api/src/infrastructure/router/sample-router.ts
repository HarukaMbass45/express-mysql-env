import express, { Router, Request, Response, NextFunction } from 'express';
import { SampleRequest } from '@/src/interface/type/request';

export const sampleRouter = (): Router => {
  const router = Router();

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
      const result = await sampleController.find(id);
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
