import { Injectable } from '@nestjs/common';
import { blogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  private blogs: blogDto[] = [];
  async getAllBlogs(): Promise<blogDto[]> {
    return this.blogs;
  }
  async getUserBlogs(id: number): Promise<blogDto> {
    return this.blogs.find((blog) => blog.id === id.toString());
  }
  async createBlog(id: number, blog: blogDto): Promise<blogDto[]> {
    const index = this.blogs.findIndex((b) => b.id === id.toString());
    if (index !== -1) {
      blog.posts.forEach((post) => {
        this.blogs[index].posts.push(post);
      });
    } else {
      this.blogs.push({ ...blog, id: id.toString() });
    }
    return [...this.blogs];
  }
  async deleteAllBlogs(id: number): Promise<any> {
    const index = this.blogs.findIndex((b) => b.id === id.toString());
    if (index !== -1) {
      this.blogs[index].posts = [];
    }
    return [...this.blogs];
  }
}
