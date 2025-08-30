import React from 'react';
import { Box } from '@mui/material';
import Layout from '../components/layout/layout';
import HeroSection from '../components/hero/HeroSection';
import ModernSlideshow from '../components/slideshow/ModernSlideshow';
import InfoSection from '../components/sections/InfoSection';
import CTASection from '../components/sections/CTASection';
import { SectionContainer } from '../components/common/StyledComponents';

const Home: React.FC = () => {
  return (
    <Layout title=''>
      <Box sx={{ overflow: 'hidden' }}>
        {/* ヒーローセクション */}
        <HeroSection />

        {/* スライドショーセクション */}
        <SectionContainer>
          <ModernSlideshow />
        </SectionContainer>

        {/* 情報セクション */}
        <InfoSection />

        {/* CTAセクション */}
        <CTASection />
      </Box>
    </Layout>
  );
};

export default Home;