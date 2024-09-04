import {
  diffrentLocaleResponse,
  mockLocaleApiResponse,
} from '../../../../../test/data/mock-locale.data';
import { Test, TestingModule } from '@nestjs/testing';
import { LocaleManagerService } from './locale.service';

let service: LocaleManagerService;

beforeEach(async () => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [LocaleManagerService],
  }).compile();

  service = module.get<LocaleManagerService>(LocaleManagerService);

  // Mock the fetch function
  global.fetch = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

it('it should return the correct locale based on the API response', async () => {
  // Mock the fetch implementation
  (fetch as jest.Mock).mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockLocaleApiResponse),
  });

  // Call the service method
  const locale = await service.getLocale(840);

  // Assert the expected locale
  expect(locale).toBe('eng-US');
});

it('should handle a different language and country code correctly', async () => {
  (fetch as jest.Mock).mockResolvedValue({
    json: jest.fn().mockResolvedValue(diffrentLocaleResponse),
  });

  const locale = await service.getLocale(724);

  expect(locale).toBe('spa-ES');
});
