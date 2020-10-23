import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class FirstMidMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: () => void) {
    console.log('je suis le first Middleware');
    //console.dir(req);
    //console.log(req.ip);
    //console.log(res.status);
    next();
  }
}
