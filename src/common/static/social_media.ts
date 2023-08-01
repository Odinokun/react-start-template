import { v4 as uuidv4 } from 'uuid';
import { Twitter, Instagram } from '@mui/icons-material';

export const SOCIAL_MEDIA = [
  {
    id: uuidv4(),
    label: 'twitter',
    link: 'https://twitter.com',
    icon: Twitter,
  },
  {
    id: uuidv4(),
    label: 'instagram',
    link: 'https://www.instagram.com',
    icon: Instagram,
  },
];
