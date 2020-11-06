import { Test, TestingModule } from '@nestjs/testing';
import { RelocationsService } from './services/relocations.service';

describe('RelocationsService', () => {
  let service: RelocationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RelocationsService],
    }).compile();

    service = module.get<RelocationsService>(RelocationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
