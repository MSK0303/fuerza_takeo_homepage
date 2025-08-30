import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { SectionContainer, SectionTitle, CardContainer } from '../common/StyledComponents';

const InfoCard = styled(Card)(({ theme }) => ({
  height: '100%',
  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
  borderRadius: 20,
  border: '1px solid rgba(46, 125, 50, 0.1)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  overflow: 'hidden',
  position: 'relative',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
    '& .card-header': {
      background: 'linear-gradient(135deg, #2E7D32 0%, #4CAF50 100%)',
      '& .MuiSvgIcon-root': {
        color: '#FFFFFF',
      },
      '& .MuiTypography-root': {
        color: '#FFFFFF',
      },
    },
  },
}));

const CardHeader = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(135deg, #F5F5F5 0%, #EEEEEE 100%)',
  padding: theme.spacing(3),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  transition: 'all 0.3s ease',
  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
  },
  '& .MuiTypography-root': {
    fontWeight: 700,
    color: theme.palette.primary.main,
    transition: 'color 0.3s ease',
  },
}));

const PracticeSchedule = styled(Box)(({ theme }) => ({
  background: 'rgba(46, 125, 50, 0.05)',
  borderRadius: 12,
  padding: theme.spacing(2),
  marginBottom: theme.spacing(2),
  border: '1px solid rgba(46, 125, 50, 0.1)',
}));

const PriceTable = styled(Box)(({ theme }) => ({
  '& .price-row': {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(1.5),
    borderRadius: 8,
    marginBottom: theme.spacing(1),
    '&:nth-of-type(even)': {
      background: 'rgba(46, 125, 50, 0.05)',
    },
  },
  '& .price-category': {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  '& .price-amount': {
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
}));

const QuickInfoGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(6),
  '& .info-item': {
    textAlign: 'center',
    padding: theme.spacing(3),
    background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
    borderRadius: 16,
    border: '1px solid rgba(46, 125, 50, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.1)',
    },
  },
  '& .info-number': {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: theme.palette.primary.main,
    display: 'block',
    lineHeight: 1,
  },
  '& .info-label': {
    fontSize: '0.9rem',
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
  },
}));

const InfoSection: React.FC = () => {
  const practiceSchedule = [
    { day: '火曜日', content: '練習', time: '18:20~', location: '朝日小学校', bus: '' },
    { day: '水曜日', content: '練習', time: '18:20~', location: '橘小学校', bus: 'バス送迎あり（往復）\n朝日・北方校区' },
    { day: '金曜日', content: '練習', time: '18:20~', location: '橘小学校', bus: 'バス送迎あり（帰りのみ）\n朝日・北方校区' },
  ];

  return (
    <Box sx={{ background: 'linear-gradient(180deg, #FAFAFA 0%, #F0F0F0 100%)', py: 10 }}>
      <SectionContainer>
        <SectionTitle variant="h2">
          クラブ情報
        </SectionTitle>

        <Grid container spacing={4}>
          {/* 練習スケジュール */}
          <Grid item xs={12} lg={6}>
            <InfoCard>
              <CardHeader className="card-header">
                <AccessTimeIcon />
                <Typography variant="h5">練習スケジュール</Typography>
              </CardHeader>
              <CardContent sx={{ p: 3 }}>
                {practiceSchedule.map((schedule, index) => (
                  <PracticeSchedule key={index}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                      <Chip
                        label={schedule.day}
                        color="primary"
                        sx={{ fontWeight: 600 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {schedule.time}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                      {schedule.content}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mb: schedule.bus ? 1 : 0 }}>
                      <LocationOnIcon sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                      <Typography variant="body2" color="text.secondary">
                        {schedule.location}
                      </Typography>
                    </Box>
                    {schedule.bus && (
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
                          {schedule.bus}
                        </Typography>
                      </Box>
                    )}
                  </PracticeSchedule>
                ))}
                <Box sx={{ mt: 3, p: 2, background: 'rgba(255, 193, 7, 0.1)', borderRadius: 2, border: '1px solid rgba(255, 193, 7, 0.2)' }}>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.main', mb: 1 }}>
                    📅 土日の活動について
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    土曜日・日曜日には練習や試合が開催される場合があります。詳細は別途ご案内いたします。
                  </Typography>
                </Box>
              </CardContent>
            </InfoCard>
          </Grid>

          {/* 費用情報 */}
          <Grid item xs={12} lg={6}>
            <InfoCard>
              <CardHeader className="card-header">
                <AttachMoneyIcon />
                <Typography variant="h5">費用について</Typography>
              </CardHeader>
              <CardContent sx={{ p: 3 }}>
                <PriceTable>
                  <Box className="price-row">
                    <Typography className="price-category">
                      幼稚園・保育園児
                    </Typography>
                    <Typography className="price-amount">
                      無料
                    </Typography>
                  </Box>
                  <Box className="price-row">
                    <Typography className="price-category">
                      1～3年生
                    </Typography>
                    <Box>
                      <Typography className="price-amount">
                        2,200円/月
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        + バス積立 1,000円/月
                      </Typography>
                    </Box>
                  </Box>
                  <Box className="price-row">
                    <Typography className="price-category">
                      4～6年生
                    </Typography>
                    <Box>
                      <Typography className="price-amount">
                        3,000円/月
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        + バス積立 1,000円/月
                      </Typography>
                    </Box>
                  </Box>
                </PriceTable>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2, textAlign: 'center' }}>
                  ※ 2人目以降は半額になります
                </Typography>
                <Button
                  component={Link}
                  to="/club"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 3, borderRadius: 2 }}
                >
                  詳しく見る
                </Button>
              </CardContent>
            </InfoCard>
          </Grid>
        </Grid>

        {/* クイック情報 */}
        <QuickInfoGrid container spacing={3}>
          <Grid item xs={6} md={3}>
            <Box className="info-item">
              <Typography component="span" className="info-number">5</Typography>
              <Typography className="info-label">対象年齢</Typography>
              <Typography variant="caption" color="text.secondary">幼稚園～小6</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box className="info-item">
              <Typography component="span" className="info-number">3</Typography>
              <Typography className="info-label">練習日数</Typography>
              <Typography variant="caption" color="text.secondary">週3日開催</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box className="info-item">
              <Typography component="span" className="info-number">2</Typography>
              <Typography className="info-label">練習会場</Typography>
              <Typography variant="caption" color="text.secondary">市内小学校</Typography>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box className="info-item">
              <Typography component="span" className="info-number">∞</Typography>
              <Typography className="info-label">成長の可能性</Typography>
              <Typography variant="caption" color="text.secondary">無限大</Typography>
            </Box>
          </Grid>
        </QuickInfoGrid>
      </SectionContainer>
    </Box>
  );
};

export default InfoSection;