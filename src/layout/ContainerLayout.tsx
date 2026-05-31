import { ReactNode } from 'react';

interface ContainerLayoutProps {
  children: ReactNode;
}

export const ContainerLayout = ({children}: ContainerLayoutProps): JSX.Element => {
  return (
    <div id='ContainerLayout'>{children}</div>
  )
}
