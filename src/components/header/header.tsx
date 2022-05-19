import React,{useState} from 'react';
import {AppBar,Toolbar,Container,MenuItem,Typography,Menu,Box,Button,IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import LOGO  from "../../assets/images/fuerza_logo.png"

import { Link } from "react-router-dom";

type Props = {
    title?: string
  }
  

const Header:React.FC = () => {
    const [anchorElNav,setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    } 

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    }

    return (
        <AppBar position='static' style={{backgroundColor:"#005a0b"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={LOGO} alt='logo' style={{width:"45px",marginRight:"10px",marginLeft:"10px"}}/>
                    <Typography variant='h5' noWrap component="a" href='/fuerza_takeo_homepage/' style={{color:"white",textDecoration:"none"}}>
                        FCフェルサ武雄
                    </Typography>
                    {/* ブラウザ画面 */}
                    <Box sx={{ flexGrow:1, display:{xs:'none',md:"flex"},justifyContent:"right",marginRight:"20px"}}>
                        <nav>
                            <Link to="/fuerza_takeo_homepage/" style={{textDecoration:"none"}}>
                                <a style={{color:"white",fontWeight:"bold",marginRight:"20px"}}>ホーム</a>
                            </Link>
                            <Link to="/fuerza_takeo_homepage/club" style={{textDecoration:"none"}}>
                                <a style={{color:"white",fontWeight:"bold",marginRight:"20px"}}>クラブ紹介</a>
                            </Link>
                            <Link to="/fuerza_takeo_homepage/experience" style={{textDecoration:"none"}}>
                                <a style={{color:"white",fontWeight:"bold",marginRight:"20px"}}>体験申し込み</a>
                            </Link>
                            <Link to="/fuerza_takeo_homepage/contact" style={{textDecoration:"none"}}>
                                <a style={{color:"white",fontWeight:"bold",marginRight:"20px"}}>お問い合わせ</a>
                            </Link>
                        </nav>
                    </Box>
                    {/* モバイル画面 */}
                    <Box sx={{ flexGrow:1, display:{xs:'flex',md:"none"},justifyContent:"right",marginRight:"20px"}}>
                        <IconButton onClick={handleOpenNavMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            anchorEl={anchorElNav} 
                            anchorOrigin={{vertical: "bottom", horizontal:"right"}} 
                            keepMounted 
                            transformOrigin={{vertical:"top",horizontal:"right"}} 
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{display:"block", md:"none"}}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to="/fuerza_takeo_homepage/" >
                                        <a style={{color:"black",fontWeight:"bold",marginRight:"20px"}}>ホーム</a>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to="/fuerza_takeo_homepage/club" >
                                        <a style={{color:"black",fontWeight:"bold",marginRight:"20px"}}>クラブ紹介</a>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to="/fuerza_takeo_homepage/experience" >
                                        <a style={{color:"black",fontWeight:"bold",marginRight:"20px"}}>体験申し込み</a>
                                    </Link>
                                </MenuItem>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Link to="/fuerza_takeo_homepage/contact" >
                                        <a style={{color:"black",fontWeight:"bold",marginRight:"20px"}}>お問い合わせ</a>
                                    </Link>
                                </MenuItem>
                            </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
