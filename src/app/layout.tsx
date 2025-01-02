import './globals.css';

import { PropsWithChildren } from 'react';

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='cs'>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
