import React, { useState } from 'react'
import Layout from '../components/layout/layout'
import { Grid, TextField, Button, Typography } from "@mui/material"

import { init, send } from "@emailjs/browser";

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
        <Layout title='体験申し込み|'>
            {(!is_send) ? (
                <div style={{marginBottom:"30px"}} className="experience-page">
                    <Grid container >
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Typography variant='h4' sx={{ marginTop: "10px" }}>体験申し込み</Typography>
                            <Typography variant='body1' sx={{ marginTop: "10px" }}>
                                FCフェルサ武雄への体験申し込みはこちらよりお願いします
                            </Typography>
                            <form onSubmit={onSubmit}>
                                <TextField className="contact-name" type="text" required label="体験される方のお名前(必須)" fullWidth margin="normal" onChange={(e) => { setChildName(e.target.value) }} value={childName} />
                                <TextField className="contact-year" type="number" required label="ご年齢(必須)" fullWidth margin="normal" onChange={(e) => { console.log(e.target.value); e.target.value == "" ? setChildAge(undefined) : setChildAge(Number(e.target.value)) }} value={childAge} />
                                <TextField className="contact-school-age" type="text" required label="学年(必須)" fullWidth margin="normal" onChange={(e) => { setSchoolYear(e.target.value) }} value={schoolYear} />
                                <TextField className="contact-mail" type="text" required label="メールアドレス(必須)" fullWidth margin="normal" onChange={(e) => { setMail(e.target.value) }} value={mail} />
                                <TextField className="contact-parent-name" type="text" required label="保護者様のお名前(必須)" fullWidth margin="normal" onChange={(e) => { setParentName(e.target.value) }} value={parentName} />
                                <TextField className="contact-date" type="date" required label="体験希望日(必須)" fullWidth margin="normal" onChange={(e) => { setDate(e.target.value) }} value={date} />
                                <TextField className="contact-message" type="text" label="ご質問など" fullWidth margin="normal" onChange={(e) => { setMessage(e.target.value) }} value={message} multiline rows={8} />
                                <input className="contact-submit" type="submit" />
                            </form>
                        </Grid>
                        <Grid item xs={1} md={2}>
                        </Grid>
                    </Grid>
                </div>
            ) : (
                <div className="thanks-page">
                    <Grid container >
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item md={8} xs={10} className="thanks-contents">
                            <Typography variant='h4' sx={{ marginTop: "10px" }}>体験申し込み</Typography>
                            <h2>体験の申し込み、ありがとうございます</h2>
                            <p>ご記入頂いた情報は無事に送信されました。</p>
                            <p>確認のため、自動返信メールをお送りしております。</p>
                        </Grid>
                        <Grid item xs={1} md={2}>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item md={8} xs={10} >
                            <Button className="thanks-btn" onClick={onBackBtn}>戻る</Button>
                        </Grid>
                        <Grid item xs={1} md={2}>
                        </Grid>
                    </Grid>
                </div>
            )}
        </Layout>
    )
}

export default Experience;