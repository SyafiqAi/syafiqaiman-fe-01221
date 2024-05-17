import { DM_Sans } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import ChakraProvider from './ChakraProvider'
import TopNavbar from "./components/TopNavbar";
import { Box } from "@chakra-ui/react";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <ChakraProvider>
          <Box bg='black' color={'white'}>
            <TopNavbar></TopNavbar>
            <StoreProvider>
              {children}
            </StoreProvider>
          </Box>
        </ChakraProvider>
      </body>
    </html>
  );
}