import React, { useState } from 'react';
import Layout from '../components/layout/layout';
import { Grid, TextField, Button, Typography, Box, Card, CardContent, Alert } from "@mui/material";
import { styled } from '@mui/material/styles';
import { SectionContainer, SectionTitle, CardContainer } from '../components/common/StyledComponents';
import SportsIcon from '@mui/icons-material/Sports';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { init, send } from "@emailjs/browser";

const HeroSection = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: '#FFFFFF',
  padding: theme.spacing(8, 0, 6, 0),
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    '& fieldset': {
      borderColor: 'rgba(46, 125, 50, 0.2)',
    },
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
    '&.Mui-focused fieldset': {
      borderColor: theme.palette.primary.main,
      borderWidth: 2,
    },
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.light} 100%)`,
  color: '#FFFFFF',
  fontWeight: 700,
  fontSize: '1.1rem',
  padding: theme.spacing(2, 4),
  borderRadius: 25,
  textTransform: 'none',
  boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  minWidth: 200,
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(46, 125, 50, 0.4)',
    background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
  },
}));

const ThanksCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, #FFFFFF 0%, #F8F9FA 100%)',
  borderRadius: 20,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  padding: theme.spacing(4),
  border: `2px solid ${theme.palette.success.main}`,
}));

const Experience: React.FC = () => {
    const [childName, setChildName] = useState("");
    const [childAge, setChildAge] = useState<number | undefined>(undefined);
    const [schoolYear, setSchoolYear] = useState("");
    const [mail, setMail] = useState("");
    const [parentName, setParentName] = useState("");
    const [date, setDate] = useState("");
    const [message, setMessage] = useState("");
    const [is_send, setIsSend] = useState(false);

    const sendContactEmail = () => {
        console.log("env.user id , "+process.env.REACT_APP_EMAILJS_USER_ID);
        console.log("env.service id , "+process.env.REACT_APP_EMAILJS_SERVICE_ID);
        console.log("env.template id , "+process.env.REACT_APP_EMAILJS_TEMPLATE_ID);
        
        const user_id = process.env.REACT_APP_EMAILJS_USER_ID;
        const service_id = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const template_id = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        if((user_id != undefined) && (service_id != undefined) && (template_id != undefined))
        {
            init(user_id);

            const contents : string = `
体験される方 : ${childName}様 (${childAge}歳)
学年 : ${schoolYear}
体験希望日 : ${date}
ご質問など : 
${message}
            `;

            const template_param = {
                to_name: parentName,
                title: "体験申し込みを受け付けました",
                email: mail,
                message: contents
            };

            send(service_id,template_id,template_param).then(() => {
                setIsSend(true);
                setChildName("");
                setChildAge(0);
                setSchoolYear("");
                setMail("");
                setParentName("");
                setDate("");
                setMessage("");
                console.log("success to send email");
            })
        }
        
    }

    const onSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("push submit");
        sendContactEmail();
    }

    const onBackBtn = () => {
        setIsSend(!is_send);
    }


    return (
        <Layout title='体験申し込み | '>
            {(!is_send) ? (
                <>
                    {/* ヒーローセクション */}
                    <HeroSection>
                        <SectionContainer>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: 800,
                                    mb: 2,
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    textShadow: '0 4px 20px rgba(0,0,0,0.3)',
                                }}
                            >
                                <SportsIcon sx={{ mr: 2, fontSize: 'inherit' }} />
                                体験申し込み
                            </Typography>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 400,
                                    opacity: 0.9,
                                    maxWidth: 600,
                                    mx: 'auto',
                                    lineHeight: 1.6,
                                }}
                            >
                                FC フェルサ武雄への体験申し込みはこちらから<br />
                                まずは気軽にサッカーを体験してみませんか？
                            </Typography>
                        </SectionContainer>
                    </HeroSection>

                    {/* 申し込みフォーム */}
                    <SectionContainer>
                        <Grid container justifyContent="center">
                            <Grid item xs={12} md={8} lg={6}>
                                <CardContainer>
                                    <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main', mb: 4, textAlign: 'center' }}>
                                        体験申し込みフォーム
                                    </Typography>
                                    <Alert severity="info" sx={{ mb: 4, borderRadius: 2 }}>
                                        体験は無料です。お気軽にご参加ください！
                                    </Alert>
                                    <form onSubmit={onSubmit}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={12} sm={6}>
                                                <StyledTextField
                                                    type="text"
                                                    required
                                                    label="体験される方のお名前"
                                                    fullWidth
                                                    onChange={(e) => setChildName(e.target.value)}
                                                    value={childName}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <StyledTextField
                                                    type="number"
                                                    required
                                                    label="ご年齢"
                                                    fullWidth
                                                    onChange={(e) => {
                                                        e.target.value === "" ? setChildAge(undefined) : setChildAge(Number(e.target.value))
                                                    }}
                                                    value={childAge || ""}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <StyledTextField
                                                    type="text"
                                                    required
                                                    label="学年"
                                                    fullWidth
                                                    onChange={(e) => setSchoolYear(e.target.value)}
                                                    value={schoolYear}
                                                    helperText="例：年長、小学1年生など"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <StyledTextField
                                                    type="email"
                                                    required
                                                    label="メールアドレス"
                                                    fullWidth
                                                    onChange={(e) => setMail(e.target.value)}
                                                    value={mail}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <StyledTextField
                                                    type="text"
                                                    required
                                                    label="保護者様のお名前"
                                                    fullWidth
                                                    onChange={(e) => setParentName(e.target.value)}
                                                    value={parentName}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <StyledTextField
                                                    type="date"
                                                    required
                                                    label="体験希望日"
                                                    fullWidth
                                                    onChange={(e) => setDate(e.target.value)}
                                                    value={date}
                                                    InputLabelProps={{ shrink: true }}
                                                    helperText="火・水・木・金曜日の18:00〜20:00に実施しています"
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <StyledTextField
                                                    type="text"
                                                    label="ご質問・ご要望など"
                                                    fullWidth
                                                    onChange={(e) => setMessage(e.target.value)}
                                                    value={message}
                                                    multiline
                                                    rows={4}
                                                    helperText="アレルギーや配慮事項などがあればお書きください（任意）"
                                                />
                                            </Grid>
                                            <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                                                <SubmitButton type="submit" size="large">
                                                    体験申し込みを送信する
                                                </SubmitButton>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </CardContainer>
                            </Grid>
                        </Grid>
                    </SectionContainer>
                </>
            ) : (
                <SectionContainer>
                    <Grid container justifyContent="center">
                        <Grid item xs={12} md={8} lg={6}>
                            <ThanksCard>
                                <Box sx={{ mb: 3 }}>
                                    <CheckCircleIcon 
                                        sx={{ 
                                            fontSize: '4rem', 
                                            color: 'success.main',
                                            mb: 2 
                                        }} 
                                    />
                                </Box>
                                <Typography variant="h3" sx={{ fontWeight: 700, color: 'success.main', mb: 3 }}>
                                    申し込み完了！
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3 }}>
                                    体験の申し込み、ありがとうございます
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 2, fontSize: '1.1rem' }}>
                                    ご記入いただいた情報は無事に送信されました。
                                </Typography>
                                <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem' }}>
                                    確認のため、自動返信メールをお送りしております。
                                </Typography>
                                <Alert severity="success" sx={{ mb: 4, borderRadius: 2 }}>
                                    当日は運動しやすい服装と水筒をお持ちください。体験は無料です！
                                </Alert>
                                <SubmitButton onClick={onBackBtn}>
                                    新しい申し込みをする
                                </SubmitButton>
                            </ThanksCard>
                        </Grid>
                    </Grid>
                </SectionContainer>
            )}
        </Layout>
    )
}

export default Experience;