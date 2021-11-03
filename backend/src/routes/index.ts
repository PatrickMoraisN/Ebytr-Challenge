import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send('ola mundo');
});

router.get('/all', (_req: Request, res: Response) => {
  res.send('ola mundo');
});

router.get('/:id', (req: Request, res: Response) => {
  const { id } = req.params;
});

router.put('/edit', (req: Request, res: Response) => {
  const { id } = req.params;
});

router.delete('/delete', (req: Request, res: Response) => {
  const { id } = req.params;
});

export default router;
