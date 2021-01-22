import { Controller, Post } from '@overnightjs/core';
import { Request, Response } from 'express';
import Draw from '@src/services/draw';

const draw = new Draw();

@Controller('draw')
export class DrawController {

  @Post('')
  public async postDrawNotes(req: Request, res: Response): Promise<any> {
    const { value } = req.body;
    const drawData = await draw.drawCash(
      value
    );
    res.status(200).send({ ...drawData });
  }
}