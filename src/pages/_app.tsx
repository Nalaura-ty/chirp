import { GeistSans } from "geist/font/sans";
import { type AppType } from "next/app";

import { api } from "npm/utils/api";

import "npm/styles/globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider>
        <div className={GeistSans.className}>
          <Component {...pageProps} />
        </div>
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
