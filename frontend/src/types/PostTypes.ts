export type PostType = {
  id: string;
  caption: string;
  media_type: string;
  media_url: string;
  permalink: string;
  thumbnail_url: string;
  timestamp: Date;
  username: string;
  childrens: PostType[] | null
};