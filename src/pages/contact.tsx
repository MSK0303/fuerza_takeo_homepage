import React,{useState} from 'react'
import Layout from '../components/layout/layout'
import { Grid, TextField, Button, Typography } from "@mui/material";

import { init, send } from "@emailjs/browser";

const Contact:React.FC = () => {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [title, setTitle] = useState("");
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

            const template_param = {
                to_name: name,
                title: title,
                email: mail,
                message: message
            };

            send(service_id,template_id,template_param).then(() => {
                setIsSend(true);
                setName("");
                setMail("");
                setMessage("");
                setTitle("");
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
        <Layout title='お問合せ|'>
            {(!is_send) ? (
                <div className="contact-page">
                    <Grid container >
                        <Grid item xs={1} md={2}>
                        </Grid>
                        <Grid item xs={10} md={8}>
                            <Typography variant='h4' sx={{ marginTop: "10px" }}>お問い合わせ</Typography>
                            <Typography variant='body1' sx={{ marginTop: "10px" }}>
                                FCフェルサ武雄へのご連絡はこちらよりお願いします
                            </Typography>
                            <form onSubmit={onSubmit}>
                                <TextField className="contact-name" type="text" required label="氏名(必須)" fullWidth margin="normal" onChange={(e) => { setName(e.target.value) }} value={name}  />
                                <TextField className="contact-mail" type="text" required label="メールアドレス(必須)" fullWidth margin="normal" onChange={(e) => { setMail(e.target.value) }} value={mail}  />
                                <TextField className="contact-title" type="text" label="件名" fullWidth margin="normal" onChange={(e) => { setTitle(e.target.value) }} value={title}  />
                                <TextField className="contact-message" type="text" required label="お問い合わせ内容(必須)" fullWidth margin="normal" onChange={(e) => { setMessage(e.target.value) }} value={message}  multiline rows={8} />
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
                        <Typography variant='h4' sx={{ marginTop: "10px" }}>お問い合わせ</Typography>
                            <h2>お問い合わせありがとうございます</h2>
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

export default Contact;