import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Container,
  MenuItem,
  Typography,
  Menu,
  Box,
  Button,
  IconButton,
  useScrollTrigger,
  Slide,
  Fade
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import SportsIcon from "@mui/icons-material/Sports";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import LOGO from "../../assets/images/fuerza_logo.png";
import { Link, useLocation } from "react-router-dom";
import { styled } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 2px 20px 0 rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(46, 125, 50, 0.1)',
  transition: 'all 0.3s ease',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  '&:hover': {
    transform: 'scale(1.05)',
    transition: 'transform 0.3s ease',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: 50,
  height: 50,
  marginRight: theme.spacing(2),
  borderRadius: '50%',
  boxShadow: '0 4px 16px 0 rgba(46, 125, 50, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 6px 24px 0 rgba(46, 125, 50, 0.4)',
  },
}));

const NavButton = styled(Button)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: isActive ? 700 : 600,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  padding: theme.spacing(1, 2),
  borderRadius: 25,
  textTransform: 'none',
  position: 'relative',
  minWidth: 'auto',
  transition: 'all 0.3s ease',
  background: isActive ? 'rgba(46, 125, 50, 0.1)' : 'transparent',
  '&:hover': {
    background: 'rgba(46, 125, 50, 0.15)',
    color: theme.palette.primary.main,
    transform: 'translateY(-2px)',
  },
  '&::after': isActive ? {
    content: '""',
    position: 'absolute',
    bottom: -2,
    left: '50%',
    transform: 'translateX(-50%)',
    width: 20,
    height: 3,
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    borderRadius: 2,
  } : {},
}));

const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 16,
    marginTop: theme.spacing(1),
    minWidth: 180,
    background: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(46, 125, 50, 0.1)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.12)',
  },
}));

const MobileMenuItem = styled(MenuItem)<{ isActive?: boolean }>(({ theme, isActive }) => ({
  color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: isActive ? 600 : 500,
  padding: theme.spacing(1.5, 2),
  borderRadius: 8,
  margin: theme.spacing(0.5, 1),
  background: isActive ? 'rgba(46, 125, 50, 0.1)' : 'transparent',
  '&:hover': {
    background: 'rgba(46, 125, 50, 0.15)',
    color: theme.palette.primary.main,
  },
}));

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger({
    threshold: 100,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const menuItems = [
  { path: '/', label: 'ホーム', icon: <HomeIcon /> },
  { path: '/club', label: 'クラブ紹介', icon: <InfoIcon /> },
  { path: '/experience', label: '体験申し込み', icon: <SportsIcon /> },
  { path: '/contact', label: 'お問い合わせ', icon: <ContactMailIcon /> },
];

const Header: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <HideOnScroll>
      <StyledAppBar
        position="fixed"
        sx={{
          background: isScrolled
            ? 'rgba(255, 255, 255, 0.98)'
            : 'rgba(255, 255, 255, 0.95)',
          boxShadow: isScrolled
            ? '0 4px 30px 0 rgba(0, 0, 0, 0.15)'
            : '0 2px 20px 0 rgba(0, 0, 0, 0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 80 } }}>
            {/* ロゴ */}
            <LogoContainer>
              <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
                <Fade in timeout={1000}>
                  <LogoImage src={LOGO} alt="FC フェルサ武雄 ロゴ" />
                </Fade>
                <Typography
                  variant="h5"
                  noWrap
                  sx={{
                    fontWeight: 700,
                    color: 'primary.main',
                    textDecoration: 'none',
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  FC フェルサ武雄
                </Typography>
              </Link>
            </LogoContainer>

            {/* デスクトップナビゲーション */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
              {menuItems.map((item) => (
                <Link key={item.path} to={item.path} style={{ textDecoration: 'none' }}>
                  <NavButton
                    isActive={location.pathname === item.path}
                    startIcon={item.icon}
                  >
                    {item.label}
                  </NavButton>
                </Link>
              ))}
            </Box>

            {/* モバイルメニューボタン */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'rgba(46, 125, 50, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
              <StyledMenu
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
              >
                {menuItems.map((item) => (
                  <Link key={item.path} to={item.path} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <MobileMenuItem
                      onClick={handleCloseNavMenu}
                      isActive={location.pathname === item.path}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {item.icon}
                        {item.label}
                      </Box>
                    </MobileMenuItem>
                  </Link>
                ))}
              </StyledMenu>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </HideOnScroll>
  );
};

export default Header;
