import React from 'react';
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Box,
  Card,
  CardContent,
  Chip,
  Paper
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Layout from '../components/layout/layout';
import { SectionContainer, SectionTitle, CardContainer } from '../components/common/StyledComponents';
import SportsIcon from '@mui/icons-material/Sports';
import GroupsIcon from '@mui/icons-material/Groups';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: '#FFFFFF',
  padding: theme.spacing(12, 0, 8, 0),
  textAlign: 'center',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)',
    zIndex: 1,
  },
  '& > *': {
    position: 'relative',
    zIndex: 2,
  },
}));

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
  borderRadius: 20,
  border: '2px solid transparent',
  backgroundClip: 'padding-box',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
  },
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
    borderColor: theme.palette.primary.light,
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  marginBottom: theme.spacing(3),
  boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
  '& svg': {
    fontSize: '2.5rem',
    color: '#FFFFFF',
  },
}));

const StyledTable = styled(TableContainer)(({ theme }) => ({
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  backgroundColor: '#FFFFFF',
  border: '1px solid rgba(46, 125, 50, 0.1)',
  marginBottom: theme.spacing(4),
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  '& .MuiTableCell-head': {
    color: '#FFFFFF',
    fontWeight: 700,
    fontSize: '1.1rem',
    borderBottom: 'none',
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontSize: '1rem',
  padding: theme.spacing(2),
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
}));

const HighlightBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.secondary.main}15 0%, ${theme.palette.secondary.light}10 100%)`,
  borderLeft: `4px solid ${theme.palette.secondary.main}`,
  padding: theme.spacing(3),
  borderRadius: '0 12px 12px 0',
  marginTop: theme.spacing(2),
  '& .MuiTypography-root': {
    color: theme.palette.text.primary,
  },
}));

interface PRACTICE_INFO {
  day_of_week: string;
  detail: string;
  time: string;
  location: string;
  bus_info?: string;
}

const practice_table: PRACTICE_INFO[] = [
  { day_of_week: "火曜日", detail: "練習", time: "18:20~", location: "朝日小学校" },
  { day_of_week: "水曜日", detail: "練習", time: "18:20~", location: "橘小学校", bus_info: "バス送迎あり（往復）\n朝日・北方校区" },
  { day_of_week: "金曜日", detail: "練習", time: "18:20~", location: "橘小学校", bus_info: "バス送迎あり（帰りのみ）\n朝日・北方校区" },
];

const Club: React.FC = () => {
  const features = [
    {
      icon: <SportsIcon />,
      title: "技術指導",
      description: "基礎から応用まで、年齢とレベルに応じた丁寧な指導を行います。"
    },
    {
      icon: <GroupsIcon />,
      title: "チームワーク",
      description: "仲間との協力や思いやりの心を育て、人間性を磨きます。"
    },
    {
      icon: <FamilyRestroomIcon />,
      title: "家族的雰囲気",
      description: "アットホームな環境で、子どもたちが安心して成長できます。"
    },
  ];

  return (
    <Layout title='クラブ紹介 | '>
      {/* ヒーローセクション */}
      <HeroSection>
        <SectionContainer>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            FC フェルサ武雄について
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 400,
              opacity: 0.9,
              maxWidth: 800,
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            佐賀県武雄市で活動する少年サッカーチーム<br />
            サッカーを楽しみながら、技術と心身の成長をサポートします
          </Typography>
        </SectionContainer>
      </HeroSection>

      {/* クラブの特徴 */}
      <SectionContainer>
        <SectionTitle variant="h2">
          私たちの特徴
        </SectionTitle>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={feature.title}>
              <FeatureCard>
                <CardContent sx={{ p: 4, textAlign: 'center' }}>
                  <IconContainer>
                    {feature.icon}
                  </IconContainer>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: 'primary.main' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.7, color: 'text.secondary' }}>
                    {feature.description}
                  </Typography>
                </CardContent>
              </FeatureCard>
            </Grid>
          ))}
        </Grid>
      </SectionContainer>

      {/* クラブ詳細情報 */}
      <Box sx={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 100%)', py: 10 }}>
        <SectionContainer>
          <SectionTitle variant="h2">
            クラブ詳細情報
          </SectionTitle>

          {/* クラブについて */}
          <CardContainer sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              <SportsIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
              FC フェルサ武雄について
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              FC フェルサ武雄は佐賀県武雄市で活動している少年サッカーチームです。
              主に橘小学校と朝日小学校にて活動を行っています。
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 3 }}>
              幼稚園・保育園児、小学校1年生から6年生までを対象としてサッカーの指導を行っています。
            </Typography>
            <HighlightBox>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                指導方針
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                サッカーを楽しみながら、技術はもちろん心身の成長に寄り添いたいという思いを持ちながら指導を行っています。
              </Typography>
            </HighlightBox>
          </CardContainer>

          {/* 活動内容 */}
          <CardContainer sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 3 }}>
              <GroupsIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
              活動内容
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
              平日は佐賀県武雄市の橘小学校と朝日小学校にて練習を行っています。
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, mb: 2 }}>
              学年やスキルによってカテゴリーを分け、カテゴリーごとにスタッフが1〜2名の体制で指導を行っています。
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
              週末は各カテゴリー毎に練習や試合を行っています。
            </Typography>
          </CardContainer>

          {/* 練習スケジュール */}
          <CardContainer sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 4 }}>
              <AccessTimeIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
              練習スケジュール
            </Typography>
            <StyledTable>
              <StyledTableHead>
                <TableRow>
                  <TableCell>曜日</TableCell>
                  <TableCell>練習内容</TableCell>
                  <TableCell>時間</TableCell>
                  <TableCell>場所</TableCell>
                  <TableCell>送迎</TableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                {practice_table.map((info, index) => (
                  <TableRow key={info.day_of_week} sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(46, 125, 50, 0.02)' } }}>
                    <StyledTableCell>
                      <Chip label={info.day_of_week} color="primary" variant="outlined" sx={{ fontWeight: 600 }} />
                    </StyledTableCell>
                    <StyledTableCell sx={{ fontWeight: 600 }}>{info.detail}</StyledTableCell>
                    <StyledTableCell>{info.time}</StyledTableCell>
                    <StyledTableCell>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <LocationOnIcon sx={{ fontSize: '1.2rem', color: 'text.secondary' }} />
                        {info.location}
                      </Box>
                    </StyledTableCell>
                    <StyledTableCell>
                      {info.bus_info ? (
                        <Box sx={{ 
                          background: 'rgba(76, 175, 80, 0.1)', 
                          borderRadius: 1, 
                          p: 1, 
                          border: '1px solid rgba(76, 175, 80, 0.2)'
                        }}>
                          <Typography variant="caption" sx={{ 
                            color: 'primary.main', 
                            fontWeight: 600,
                            whiteSpace: 'pre-line'
                          }}>
                            {info.bus_info}
                          </Typography>
                        </Box>
                      ) : (
                        <Typography variant="body2" color="text.secondary">
                          -
                        </Typography>
                      )}
                    </StyledTableCell>
                  </TableRow>
                ))}
              </TableBody>
            </StyledTable>
            <HighlightBox sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                📅 土日の活動について
              </Typography>
              <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                土曜日・日曜日には練習や試合が開催される場合があります。カテゴリーごとに異なりますので、詳細は別途ご案内いたします。
              </Typography>
            </HighlightBox>
          </CardContainer>

          {/* 費用について */}
          <CardContainer>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 4 }}>
              <AttachMoneyIcon sx={{ mr: 2, verticalAlign: 'middle' }} />
              費用について
            </Typography>
            <StyledTable>
              <StyledTableHead>
                <TableRow>
                  <TableCell>カテゴリー</TableCell>
                  <TableCell>部費</TableCell>
                  <TableCell>バス購入積立</TableCell>
                </TableRow>
              </StyledTableHead>
              <TableBody>
                <TableRow sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(46, 125, 50, 0.02)' } }}>
                  <StyledTableCell sx={{ fontWeight: 600 }}>幼稚園・保育園児</StyledTableCell>
                  <StyledTableCell>
                    <Chip label="無料" color="success" sx={{ fontWeight: 600 }} />
                  </StyledTableCell>
                  <StyledTableCell>
                    <Chip label="無料" color="success" sx={{ fontWeight: 600 }} />
                  </StyledTableCell>
                </TableRow>
                <TableRow sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(46, 125, 50, 0.02)' } }}>
                  <StyledTableCell sx={{ fontWeight: 600 }}>1〜3年生</StyledTableCell>
                  <StyledTableCell>2,200円/月</StyledTableCell>
                  <StyledTableCell>1,000円/月</StyledTableCell>
                </TableRow>
                <TableRow sx={{ '&:nth-of-type(even)': { backgroundColor: 'rgba(46, 125, 50, 0.02)' } }}>
                  <StyledTableCell sx={{ fontWeight: 600 }}>4〜6年生</StyledTableCell>
                  <StyledTableCell>3,000円/月</StyledTableCell>
                  <StyledTableCell>1,000円/月</StyledTableCell>
                </TableRow>
              </TableBody>
            </StyledTable>
            <HighlightBox>
              <Typography variant="body1" sx={{ fontWeight: 600, textAlign: 'center' }}>
                ※ 2人目以降は半額になります
              </Typography>
            </HighlightBox>
          </CardContainer>
        </SectionContainer>
      </Box>
    </Layout>
  );
};

export default Club;