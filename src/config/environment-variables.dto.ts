import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export class EnvironmentVariables {
  @IsString()
  @IsNotEmpty()
  DATABASE_USER!: string;

  @IsString()
  DATABASE_PASSWORD!: string;

  @Transform(({ value }) => {
    if (value === 0) {
      // O enableImplicitConversion converte strings vazias para 0
      throw new Error('PORT cannot be empty or zero');
    }
    if (isNaN(value)) {
      throw new Error('PORT must be a valid number'); // Caso o valor não seja um número válido ele converte para NaN
    }
    return value;
  })
  @IsNumber()
  PORT!: number;
}
