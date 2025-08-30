import React, { ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import Header from "../header/header";
import Footer from "../footer/footer";
import { Helmet } from 'react-helmet-async';

import LOGO from "../../assets/images/fuerza_logo.png";

type Props = {
    children: ReactNode;
    title?: string;
}

const Layout: React.FC<Props> = ({ children, title = '' }: Props) => (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Helmet>
            <title>{title + "FC フェルサ武雄"}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="佐賀県武雄市で活動するジュニアサッカーチーム FC フェルサ武雄の公式ホームページ。幼稚園児から小学6年生まで、サッカーを楽しみながら技術と心を育てます。" />
            <meta name="keywords" content="FC フェルサ武雄, サッカー, ジュニア, 武雄市, 佐賀県, 少年サッカー" />
            <link rel="icon" href={"./fuerza_logo.png"} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta property="og:title" content={title + "FC フェルサ武雄"} />
            <meta property="og:description" content="佐賀県武雄市で活動するジュニアサッカーチーム" />
            <meta property="og:image" content="./fuerza_logo.png" />
            <meta property="og:type" content="website" />
        </Helmet>
        <Header />
        <Toolbar /> {/* ヘッダーの固定位置分のスペース */}
        <Box component="main" sx={{ flex: 1 }}>
            {children}
        </Box>
        <Footer />
    </Box>
);

export default Layout;
