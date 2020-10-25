import { Test, TestingModule } from '@nestjs/testing';
import { RelocationsController } from './relocations.controller';

describe('RelocationsController', () => {
  let controller: RelocationsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelocationsController],
    }).compile();

    controller = module.get<RelocationsController>(RelocationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
