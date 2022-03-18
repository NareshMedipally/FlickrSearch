  export interface PhotoResponse {
    photos: Photos;
    stat: string;
  }
  export interface Photos {
    page: number;
    pages: number;
    perpage: number;
    total: number;
    photo?: (PhotoProps)[] | null;
  }
  export interface PhotoProps {
    id: string;
    owner: string;
    secret: string;
    server: string;
    farm: number;
    title: string;
    ispublic: number;
    isfriend: number;
    isfamily: number;
  }
  