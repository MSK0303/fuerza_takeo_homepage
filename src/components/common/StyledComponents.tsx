import { styled } from '@mui/material/styles';
import { Box, Container, Typography, Button } from '@mui/material';

// ヒーローセクション用コンテナ
export const HeroContainer = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: '#FFFFFF',
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'url("/api/placeholder/1200/600") center/cover',
    opacity: 0.1,
    zIndex: 0,
  },
  '& > *': {
    position: 'relative',
    zIndex: 1,
  },
}));

// セクションコンテナ
export const SectionContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(10, 3),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(6, 2),
  },
}));

// グラデーションボタン
export const GradientButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  borderRadius: 30,
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 32px 0 rgba(46, 125, 50, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 40px 0 rgba(46, 125, 50, 0.4)',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));

// カード風コンテナ
export const CardContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: 20,
  padding: theme.spacing(6),
  boxShadow: '0 10px 40px 0 rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(46, 125, 50, 0.1)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px 0 rgba(0, 0, 0, 0.15)',
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4),
    borderRadius: 16,
  },
}));

// タイトル用スタイル
export const SectionTitle = styled(Typography)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  fontWeight: 700,
  color: theme.palette.primary.main,
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: theme.spacing(-2),
    left: '50%',
    transform: 'translateX(-50%)',
    width: 80,
    height: 4,
    background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
    borderRadius: 2,
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

// フィーチャーカード
export const FeatureCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#FFFFFF',
  borderRadius: 16,
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: '0 6px 30px 0 rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  border: '1px solid rgba(46, 125, 50, 0.05)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '&:hover': {
    transform: 'translateY(-6px)',
    boxShadow: '0 12px 50px 0 rgba(0, 0, 0, 0.12)',
    borderColor: theme.palette.primary.light,
  },
}));

// アイコンコンテナ
export const IconContainer = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  boxShadow: '0 8px 32px 0 rgba(46, 125, 50, 0.3)',
  '& svg': {
    fontSize: '2rem',
    color: '#FFFFFF',
  },
}));

// フローティングアクションボタン風
export const FloatingActionButton = styled(Button)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(4),
  right: theme.spacing(4),
  borderRadius: '50%',
  minWidth: 56,
  height: 56,
  background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  boxShadow: '0 8px 32px 0 rgba(255, 193, 7, 0.4)',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 12px 40px 0 rgba(255, 193, 7, 0.6)',
  },
  [theme.breakpoints.down('md')]: {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));