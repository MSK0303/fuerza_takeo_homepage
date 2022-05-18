import React, { ReactNode } from 'react'
import Header from "../header/header";
import Footer from "../footer/footer";
import { Helmet } from 'react-helmet-async'

import LOGO  from "../../assets/images/fuerza_logo.png"

type Props = {
    children: ReactNode
    title?: string
}

const Layout:React.FC<Props> = ({ children, title = '' }: Props) => (
    <div>
        <Helmet>
            <title>{title + "FCフェルサ武雄"}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="FC フェルサ武雄のホームページ" />
            <link rel="icon" href={LOGO} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Helmet>
        <Header />
        {children}
        <Footer />
    </div>
)

export default Layout;
