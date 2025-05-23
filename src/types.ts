export interface Location {
  id: number;
  location: string;
}

export interface Author {
  id: number;
  name: string;
}

export interface Painting {
  authorId: number;
  created: string;
  id: number;
  imageUrl: string;
  locationId: number;
  name: string;
}

export interface PaintingExtended extends Painting {
  author: string;
  location: string;
}
