import React, { useState, useEffect } from 'react';
import { Box, IconButton, Fade } from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import Slide1 from "../../assets/images/slide1.jpg";
import Slide2 from "../../assets/images/slide2.jpg";
import Slide3 from "../../assets/images/slide3.jpg";
import Slide4 from "../../assets/images/slide4.jpg";
import Slide5 from "../../assets/images/slide5.jpg";

const SlideshowContainer = styled(Box)<{}>(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: '100%',
  height: '300px',
  borderRadius: 20,
  overflow: 'hidden',
  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.2)',
  margin: theme.spacing(4, 'auto'),
  [theme.breakpoints.up('md')]: {
    height: '500px',
  },
  [theme.breakpoints.up('lg')]: {
    height: '600px',
  },
}));

const SlideImage = styled('img')<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: isActive ? 1 : 0,
  transition: 'opacity 1s ease-in-out',
  filter: 'brightness(0.8)',
}));

const SlideOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'linear-gradient(45deg, rgba(46, 125, 50, 0.3) 0%, rgba(76, 175, 80, 0.2) 100%)',
  zIndex: 1,
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 3,
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.primary.main,
  width: 56,
  height: 56,
  backdropFilter: 'blur(10px)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    transform: 'translateY(-50%) scale(1.1)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.3)',
  },
  '&.prev': {
    left: theme.spacing(3),
  },
  '&.next': {
    right: theme.spacing(3),
  },
  [theme.breakpoints.down('md')]: {
    width: 48,
    height: 48,
    '&.prev': {
      left: theme.spacing(2),
    },
    '&.next': {
      right: theme.spacing(2),
    },
  },
}));

const DotsContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: theme.spacing(3),
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  gap: theme.spacing(1),
  zIndex: 3,
  backgroundColor: 'rgba(0, 0, 0, 0.3)',
  borderRadius: 25,
  padding: theme.spacing(1, 2),
  backdropFilter: 'blur(10px)',
}));

const DotButton = styled(IconButton)<{ isActive: boolean }>(({ theme, isActive }) => ({
  width: 16,
  height: 16,
  padding: 0,
  minWidth: 'auto',
  color: isActive ? theme.palette.secondary.main : 'rgba(255, 255, 255, 0.6)',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: theme.palette.secondary.main,
    transform: 'scale(1.3)',
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1rem',
  },
}));

const ProgressBar = styled(Box)<{ progress: number }>(({ theme, progress }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  height: 4,
  background: `linear-gradient(90deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.light} 100%)`,
  width: `${progress}%`,
  transition: 'width 0.1s linear',
  zIndex: 3,
}));

const images = [Slide1, Slide2, Slide3, Slide4, Slide5];

const ModernSlideshow: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
    setProgress(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    if (isPlaying) {
      // 5秒間隔でスライド変更
      interval = setInterval(nextSlide, 5000);
      
      // プログレスバーの更新
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 2; // 5秒で100%になるよう調整
        });
      }, 100);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying]);

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
    setProgress(0);
  };

  return (
    <SlideshowContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 画像スライド */}
      {images.map((image, index) => (
        <SlideImage
          key={index}
          src={image}
          alt={`FC フェルサ武雄 活動写真 ${index + 1}`}
          isActive={index === currentSlide}
        />
      ))}

      {/* オーバーレイ */}
      <SlideOverlay />

      {/* ナビゲーションボタン */}
      <NavigationButton className="prev" onClick={prevSlide}>
        <ArrowBackIosIcon />
      </NavigationButton>
      <NavigationButton className="next" onClick={nextSlide}>
        <ArrowForwardIosIcon />
      </NavigationButton>

      {/* ドットナビゲーション */}
      <DotsContainer>
        {images.map((_, index) => (
          <DotButton
            key={index}
            isActive={index === currentSlide}
            onClick={() => goToSlide(index)}
          >
            <FiberManualRecordIcon />
          </DotButton>
        ))}
      </DotsContainer>

      {/* プログレスバー */}
      <ProgressBar progress={progress} />
    </SlideshowContainer>
  );
};

export default ModernSlideshow;