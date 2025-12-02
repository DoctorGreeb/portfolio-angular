// src/app/data/posts.data.ts
export interface Post {
  id: number;
  title: string;
  preview: string;
  date: string;
  tags: string[];
}

export const POSTS: Post[] = [
  {
    id: 1,
    title: 'Making a design system from scratch',
    preview: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    date: '12 Feb 2020',
    tags: ['Design', 'Pattern']
  },
  {
    id: 2,
    title: 'Creating pixel perfect icons in Figma',
    preview: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    date: '12 Feb 2020',
    tags: ['Figma', 'Icon Design']
  }
];