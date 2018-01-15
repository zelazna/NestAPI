import { Pipe, ArgumentMetadata, ValidationPipe } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Pipe()
export class DeSerializationPipe extends ValidationPipe {
    async transform(value, metadata: ArgumentMetadata) {
        super.transform(value, metadata)
        let { metatype } = metadata
        return plainToClass(metatype, value);
    }
}