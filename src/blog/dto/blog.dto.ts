import { Type } from 'class-transformer';
import { IsDefined, IsString, ValidateNested } from 'class-validator';
import { Post } from './post.dto';

export class blogDto {
  id: string;
  @IsDefined()
  @IsString()
  user: string;
  @ValidateNested({ each: true })
  @Type(() => Post)
  posts: Post[];
}
