import React,{useState} from 'react'
import Layout from '../components/layout/layout'

import {Typography,Grid,Table,TableBody,TableCell,TableHead,TableRow,TableContainer} from "@mui/material";
import {margin, styled} from "@mui/system"

const divStyle = {fontSize:{xs:"10px",md:"25px"}, marginTop:"10px", marginLeft:"20px"};
const titleStyle = {fontSize:{xs:"20px",md:"35px"},fontWeight:"bold",color:"#005a0b", marginTop:"30px"};
const subtitleStyle = {color:"#336600	", marginTop:"30px"};
const tableCellStyle = {fontSize:{xs:"12px",md:"18px"}};

interface PRACTICE_INFO {
    day_of_week:string,
    detail:string,
    time:string,
    location:string
};

const practice_table_header:string[] = [
    "曜日","練習内容","練習時間","練習場所",
];

const practice_table:PRACTICE_INFO[] = [
    {day_of_week:"月曜日",detail:"キーパー練習",time:"18:30~20:00",location:"橘小学校"},
    {day_of_week:"火曜日",detail:"全体練習",time:"18:00~20:00",location:"朝日小学校"},
    {day_of_week:"水曜日",detail:"全体練習",time:"18:00~20:00",location:"橘小学校"},
    {day_of_week:"木曜日",detail:"キーパー練習",time:"18:30~20:00",location:"橘小学校"},
    {day_of_week:"金曜日",detail:"全体練習",time:"18:00~20:00",location:"橘小学校または朝日小学校"},
]

const Club:React.FC = () => {

    return (
        <Layout title='クラブ紹介|'>
        <Grid container spacing={2} >
            <Grid item xs={0} md={2}>
            </Grid>
            <Grid item xs={12} md={8}>
                {/* フェルサ武雄についての紹介 */}
                <Typography variant='h4' sx={titleStyle}>● FCフェルサ武雄について</Typography>
                <Typography variant='body1' sx={divStyle}>
                    FC フェルサ武雄は佐賀県武雄市で活動している少年サッカーチームです。<br/>
                    主に橘小学校と朝日小学校にて活動を行っています。<br/>
                    <br/>
                    小学校1年生から6年生までを対象としてサッカーの指導を行っています。<br />
                    <br />

                </Typography>
                {/* 活動内容 */}
                <Typography variant='h4' sx={titleStyle}>● 活動内容</Typography>
                <Typography variant='body1' sx={divStyle}>
                    平日は佐賀県武雄市の橘小学校と朝日小学校にて練習を行っています。<br />
                    学年やスキルによってカテゴリーを分け、カテゴリーごとにスタッフが1,2名の体制で指導を行っています。<br />
                    週末は各カテゴリー毎に練習や試合を行っています。<br />
                </Typography>
                {/* 練習日紹介 */}
                <Typography variant='h4' sx={titleStyle}>● 練習について</Typography>
                <TableContainer sx={{marginLeft:"20px"}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    practice_table_header.map((item,index) => (
                                        <TableCell key={"Header:"+item} sx={tableCellStyle}>{item}</TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                practice_table.map((info)=>(
                                    <TableRow key={info.day_of_week+"テーブル"}>
                                        <TableCell key={info.day_of_week} sx={tableCellStyle}>{info.day_of_week}</TableCell>
                                        <TableCell key={info.day_of_week+":"+info.detail} sx={tableCellStyle}>{info.detail}</TableCell>
                                        <TableCell key={info.day_of_week+":"+info.time} sx={tableCellStyle}>{info.time}</TableCell>
                                        <TableCell key={info.day_of_week+":"+info.location} sx={tableCellStyle}>{info.location}</TableCell>
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item xs={0} md={2}>
            </Grid>
        </Grid>
        <div style={{marginBottom:"30px"}}></div>
    </Layout>
    )
}

export default Club;