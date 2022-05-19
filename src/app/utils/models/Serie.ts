export interface Serie {
  title: string;
  description?: string;
  seasons: number;
  isFinished: boolean;
  author: Author;
}

export interface Author {
  studio: string;
  director: string;
}
