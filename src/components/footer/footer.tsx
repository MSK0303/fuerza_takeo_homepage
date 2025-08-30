import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SportsIcon from '@mui/icons-material/Sports';
import LOGO from "../../assets/images/fuerza_logo.png";

const FooterContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  color: '#FFFFFF',
  marginTop: 'auto',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'%3E%3Cpath d=\'M20 20h60v60h-60z\' fill=\'none\' stroke=\'rgba(255,255,255,0.05)\' stroke-width=\'0.5\'/%3E%3C/svg%3E") repeat',
    opacity: 0.1,
  },
}));

const FooterContent = styled(Container)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(6, 3, 4, 3),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 2, 3, 2),
  },
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    justifyContent: 'center',
  },
}));

const LogoImage = styled('img')(({ theme }) => ({
  width: 60,
  height: 60,
  marginRight: theme.spacing(2),
  borderRadius: '50%',
  boxShadow: '0 4px 20px rgba(255, 255, 255, 0.2)',
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  textDecoration: 'none',
  fontSize: '1rem',
  fontWeight: 500,
  transition: 'all 0.3s ease',
  display: 'block',
  marginBottom: theme.spacing(1),
  '&:hover': {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    transform: 'translateX(4px)',
  },
}));

const ContactItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  color: 'rgba(255, 255, 255, 0.9)',
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1.5),
    color: theme.palette.secondary.main,
    fontSize: '1.5rem',
  },
}));

const CopyrightSection = styled(Box)(({ theme }) => ({
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  paddingTop: theme.spacing(3),
  marginTop: theme.spacing(4),
  textAlign: 'center',
}));

const QuickLinks = [
  { path: '/', label: 'ホーム' },
  { path: '/club', label: 'クラブ紹介' },
  { path: '/experience', label: '体験申し込み' },
  { path: '/contact', label: 'お問い合わせ' },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer component="footer">
      <FooterContent maxWidth="xl">
        <Grid container spacing={4}>
          {/* ロゴとクラブ情報 */}
          <Grid item xs={12} md={4}>
            <LogoContainer>
              <LogoImage src={LOGO} alt="FC フェルサ武雄 ロゴ" />
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                  FC フェルサ武雄
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  ジュニアサッカーチーム
                </Typography>
              </Box>
            </LogoContainer>
            <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.6, mb: 3 }}>
              佐賀県武雄市で活動するジュニアサッカーチーム。
              サッカーを楽しみながら、技術と心身の成長をサポートします。
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SportsIcon sx={{ color: 'secondary.main', fontSize: '1.5rem' }} />
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                幼稚園児〜小学6年生
              </Typography>
            </Box>
          </Grid>

          {/* クイックリンク */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              サイトマップ
            </Typography>
            {QuickLinks.map((link) => (
              <FooterLink key={link.path} to={link.path}>
                {link.label}
              </FooterLink>
            ))}
          </Grid>

          {/* 練習情報 */}
          <Grid item xs={12} md={2}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              練習情報
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              火・水・木・金曜日
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              18:00〜20:00
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.8, mb: 1 }}>
              橘小学校・朝日小学校
            </Typography>
          </Grid>

          {/* 連絡先 */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 3 }}>
              お問い合わせ
            </Typography>
            <ContactItem>
              <LocationOnIcon />
              <Typography variant="body2">
                佐賀県武雄市
              </Typography>
            </ContactItem>
            <ContactItem>
              <EmailIcon />
              <Typography variant="body2">
                お問い合わせフォームをご利用ください
              </Typography>
            </ContactItem>
            <FooterLink to="/contact" style={{ marginTop: 16 }}>
              → お問い合わせフォーム
            </FooterLink>
          </Grid>
        </Grid>

        {/* コピーライト */}
        <CopyrightSection>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} FC フェルサ武雄. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.6, mt: 1, display: 'block' }}>
            Made with ⚽ for young soccer players in Takeo, Saga
          </Typography>
        </CopyrightSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;