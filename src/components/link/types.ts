import { LinkProps as RouterLinkProps } from 'react-router-dom';

export interface LinkProps extends RouterLinkProps {
  children: React.ReactNode;
  size?: 'large' | 'small';
  className?: string;
}
