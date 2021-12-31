import { IsString } from 'class-validator';

export class Post {
  @IsString()
  title: string;
  @IsString()
  content: string;
}
