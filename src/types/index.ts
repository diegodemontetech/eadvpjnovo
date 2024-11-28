export interface Ebook {
  id: string;
  title: string;
  description: string;
  author: string;
  thumbnail: string;
  fileUrl: string;
  pages: number;
  readTime: string;
  category: string;
  rating: number;
  totalRatings: number;
  publishDate: string;
}

// ... rest of the existing types ...