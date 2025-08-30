import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Fade,
  Zoom,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import SportsIcon from '@mui/icons-material/Sports';
import GroupsIcon from '@mui/icons-material/Groups';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const HeroContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: '#FFFFFF',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/soccer-field-pattern.svg") center/cover',
    opacity: 0.1,
    zIndex: 0,
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)',
    zIndex: 1,
  },
}));

const ContentBox = styled(Box)({
  position: 'relative',
  zIndex: 2,
});

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
  fontSize: 'clamp(2.5rem, 8vw, 5rem)',
  lineHeight: 1.1,
  textShadow: '0 4px 20px rgba(0,0,0,0.3)',
  background: 'linear-gradient(45deg, #FFFFFF 30%, rgba(255,255,255,0.8) 90%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
  marginBottom: theme.spacing(4),
  fontWeight: 500,
  opacity: 0.95,
  textShadow: '0 2px 10px rgba(0,0,0,0.2)',
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const CTAButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FFC107 0%, #FF8F00 100%)',
  color: '#000000',
  fontWeight: 700,
  fontSize: '1.2rem',
  padding: theme.spacing(2, 4),
  borderRadius: 30,
  textTransform: 'none',
  boxShadow: '0 8px 32px rgba(255, 193, 7, 0.4)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.05)',
    boxShadow: '0 12px 40px rgba(255, 193, 7, 0.6)',
    background: 'linear-gradient(135deg, #FFD54F 0%, #FFA000 100%)',
  },
  [theme.breakpoints.down('md')]: {
    width: '100%',
    maxWidth: 300,
    margin: '0 auto',
    display: 'block',
  },
}));

const FeatureCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.15)',
  backdropFilter: 'blur(10px)',
  borderRadius: 20,
  padding: theme.spacing(3),
  textAlign: 'center',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    background: 'rgba(255, 255, 255, 0.2)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
  },
}));

const FeatureIcon = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '50%',
  background: 'rgba(255, 193, 7, 0.2)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: '2rem',
    color: theme.palette.secondary.main,
  },
}));

const FloatingShape = styled(Box)<{ top?: string; left?: string; delay?: number }>(
  ({ theme, top = '20%', left = '10%', delay = 0 }) => ({
    position: 'absolute',
    top,
    left,
    width: 100,
    height: 100,
    borderRadius: '50%',
    background: 'rgba(255, 255, 255, 0.1)',
    animation: `float ${6 + delay}s ease-in-out infinite`,
    animationDelay: `${delay}s`,
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0px) rotate(0deg)',
      },
      '50%': {
        transform: 'translateY(-20px) rotate(180deg)',
      },
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  })
);

const features = [
  {
    icon: <SportsIcon />,
    title: 'サッカー技術',
    description: '基礎から応用まで丁寧に指導します'
  },
  {
    icon: <GroupsIcon />,
    title: 'チームワーク',
    description: '仲間と協力する心を育てます'
  },
  {
    icon: <EmojiEventsIcon />,
    title: '成長サポート',
    description: '心身の成長を全力でサポート'
  },
];

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      {/* フローティング装飾 */}
      <FloatingShape top="15%" left="5%" delay={0} />
      <FloatingShape top="25%" left="85%" delay={1} />
      <FloatingShape top="60%" left="10%" delay={2} />
      <FloatingShape top="70%" left="80%" delay={3} />

      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center" sx={{ minHeight: '80vh' }}>
          {/* メインコンテンツ */}
          <Grid item xs={12} lg={7}>
            <ContentBox>
              <Fade in timeout={1000}>
                <MainTitle variant="h1">
                  FC フェルサ武雄
                </MainTitle>
              </Fade>
              <Fade in timeout={1200}>
                <SubTitle>
                  佐賀県武雄市で活動する<br />
                  ジュニアサッカーチーム
                </SubTitle>
              </Fade>
              <Fade in timeout={1400}>
                <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                  サッカーを楽しみながら、技術と心を育てる。<br />
                  幼稚園児から小学6年生まで、みんなで一緒に成長しましょう！
                </Typography>
              </Fade>
              <Zoom in timeout={1600}>
                <Link to="/experience" style={{ textDecoration: 'none' }}>
                  <CTAButton>
                    体験参加はこちら
                  </CTAButton>
                </Link>
              </Zoom>
            </ContentBox>
          </Grid>

          {/* フィーチャーカード */}
          <Grid item xs={12} lg={5}>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={4} lg={12} key={feature.title}>
                  <Fade in timeout={1800 + index * 200}>
                    <FeatureCard>
                      <FeatureIcon>
                        {feature.icon}
                      </FeatureIcon>
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        {feature.description}
                      </Typography>
                    </FeatureCard>
                  </Fade>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default HeroSection;