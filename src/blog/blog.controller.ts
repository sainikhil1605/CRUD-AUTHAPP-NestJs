import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JWTGuard } from 'src/auth/guards/jwt.guard';
import { BlogService } from './blog.service';
import { blogDto } from './dto/blog.dto';
import { ValidationPipe } from './validate.pipe';
@UseGuards(JWTGuard)
@Controller('/api/v1/blog')
export class BlogController {
  constructor(private readonly blogservice: BlogService) {}
  @Get('/')
  getUserBlogs(@Request() req) {
    return this.blogservice.getUserBlogs(req.user.userId);
  }
  @Post('/')
  createBlog(@Body(new ValidationPipe()) blog: blogDto, @Request() req) {
    return this.blogservice.createBlog(req.user.userId, blog);
  }
  @Delete('/')
  delteAllBlogs(@Request() req) {
    return this.blogservice.deleteAllBlogs(req.user.userId);
  }
}
