import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SportsIcon from '@mui/icons-material/Sports';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import InfoIcon from '@mui/icons-material/Info';

const CTAContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: '#FFFFFF',
  padding: theme.spacing(10, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    left: '-50%',
    width: '200%',
    height: '200%',
    background: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
    backgroundSize: '50px 50px',
    opacity: 0.3,
    animation: 'float 20s linear infinite',
  },
  '@keyframes float': {
    '0%': {
      transform: 'translate(-50%, -50%) rotate(0deg)',
    },
    '100%': {
      transform: 'translate(-50%, -50%) rotate(360deg)',
    },
  },
}));

const CTACard = styled(Card)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(20px)',
  borderRadius: 20,
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  height: '100%',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    background: 'rgba(255, 255, 255, 0.25)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  color: '#000000',
  fontWeight: 700,
  fontSize: '1.1rem',
  padding: theme.spacing(1.5, 4),
  borderRadius: 25,
  textTransform: 'none',
  boxShadow: '0 8px 32px rgba(255, 193, 7, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minWidth: 200,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(255, 193, 7, 0.6)',
    background: `linear-gradient(135deg, ${theme.palette.secondary.light} 0%, #FFD54F 100%)`,
  },
}));

const OutlineButton = styled(Button)(({ theme }) => ({
  border: '2px solid rgba(255, 255, 255, 0.8)',
  color: '#FFFFFF',
  fontWeight: 600,
  fontSize: '1.1rem',
  padding: theme.spacing(1.5, 4),
  borderRadius: 25,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minWidth: 200,
  '&:hover': {
    transform: 'translateY(-2px)',
    background: 'rgba(255, 255, 255, 0.15)',
    borderColor: '#FFFFFF',
    boxShadow: '0 8px 32px rgba(255, 255, 255, 0.2)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  boxShadow: '0 8px 32px rgba(255, 193, 7, 0.3)',
  '& svg': {
    fontSize: '2rem',
    color: '#000000',
  },
}));

const MainCTA = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(8),
  position: 'relative',
  zIndex: 2,
}));

const ctaItems = [
  {
    icon: <SportsIcon />,
    title: '体験参加',
    description: 'まずは気軽に体験してみませんか？無料で参加できます。',
    action: '体験申し込み',
    link: '/experience',
    primary: true,
  },
  {
    icon: <InfoIcon />,
    title: 'クラブ詳細',
    description: 'クラブの詳しい活動内容や練習スケジュールをご確認ください。',
    action: 'クラブ紹介',
    link: '/club',
    primary: false,
  },
  {
    icon: <ContactMailIcon />,
    title: 'お問い合わせ',
    description: 'ご質問やご相談がありましたら、お気軽にお声かけください。',
    action: 'お問い合わせ',
    link: '/contact',
    primary: false,
  },
];

const CTASection: React.FC = () => {
  return (
    <CTAContainer>
      <Container maxWidth="xl">
        <MainCTA>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            一緒にサッカーを楽しもう！
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: 600,
              mx: 'auto',
              textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              lineHeight: 1.6,
            }}
          >
            FC フェルサ武雄で、技術と友情を育みませんか？<br />
            みんなでサッカーの楽しさを分かち合いましょう！
          </Typography>
        </MainCTA>

        <Grid container spacing={4} justifyContent="center">
          {ctaItems.map((item, index) => (
            <Grid item xs={12} md={4} key={item.title}>
              <CTACard>
                <CardContent
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    color: '#FFFFFF',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box>
                    <IconWrapper sx={{ mx: 'auto' }}>
                      {item.icon}
                    </IconWrapper>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mb: 2,
                        textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        opacity: 0.9,
                        lineHeight: 1.6,
                        textShadow: '0 1px 5px rgba(0,0,0,0.2)',
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                  {item.primary ? (
                    <Link to={item.link} style={{ textDecoration: 'none' }}>
                      <CTAButton>
                        {item.action}
                      </CTAButton>
                    </Link>
                  ) : (
                    <Link to={item.link} style={{ textDecoration: 'none' }}>
                      <OutlineButton>
                        {item.action}
                      </OutlineButton>
                    </Link>
                  )}
                </CardContent>
              </CTACard>
            </Grid>
          ))}
        </Grid>

        {/* 追加の問い合わせ情報 */}
        <Box sx={{ textAlign: 'center', mt: 8, position: 'relative', zIndex: 2 }}>
          <Typography variant="body1" sx={{ opacity: 0.8, mb: 2 }}>
            その他のご質問やご相談もお気軽にどうぞ
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            📧 お問い合わせはいつでもお待ちしています
          </Typography>
        </Box>
      </Container>
    </CTAContainer>
  );
};

export default CTASection;