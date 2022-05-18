import React from 'react'
import {Grid, Typography} from "@mui/material"
import {styled} from "@mui/system"
import {TwitterTimelineEmbed} from "react-twitter-embed";

const USER_NAME:string = "FcFuerzaTakeo";

const titleStyle = {fontSize:{xs:"20px",md:"35px"},fontWeight:"bold",color:"#005a0b", marginTop:"30px",marginBottom:"30px",textAlign:"center"};

const TwitterComp = () => {
    return (
        <div>
            
            <Grid container spacing={2} style={{marginTop:"8px",marginBottom:"18px"}}>
                <Grid item xs={0} md={3}>

                </Grid>
                <Grid item xs={12} md={6}>
                <Typography variant='h4' sx={titleStyle}>FCフェルサ武雄公式Twitter</Typography>
                <div style={{height:"600px"}}>
                    <TwitterTimelineEmbed 
                        sourceType='profile' 
                        screenName={USER_NAME} 
                        options={{innerHeight:600,outerHeight:600,}} 
                        autoHeight={true} 
                        noHeader={true}
                        noFooter={true}
                        />
                </div>
                </Grid>
                <Grid item xs={0} md={3}>

                </Grid>
            </Grid>
        </div>

    )
}

export default TwitterComp
