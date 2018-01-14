import { Pipe, ArgumentMetadata, ValidationPipe } from '@nestjs/common';

@Pipe()
export class SerializationPipe extends ValidationPipe {
    async transform(value, metadata: ArgumentMetadata) {
        super.transform(value, metadata)
        let { metatype } = metadata
        return new metatype(value);
    }
}