import { Box, IconButton, Stack, Typography, Tab, Tabs, Grid } from '@mui/material';
import * as React from 'react';
import { useTheme } from "@mui/material/styles"
import { X } from 'phosphor-react';
import { dispatch } from '../../redux/store';
import { UpdateSidebarType } from '../../redux/slices/app';
import {faker} from '@faker-js/faker'
import { Docs, Links } from '../../data';
import { DocMsg, LinkMsg } from './MessageType';


function SharedMessages() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }
    return (
        <Box sx={{ width: "300px", height: "100vh" }}>
            <Stack sx={{ height: "100%" }} >
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode == "light" ? "#F8FAFF" : "purple"

                }}>
                    <Stack sx={{ height: '100%', p: 1.7 }}
                        direction="row"
                        alignItems={"center"}
                        justifyContent={"space-between"}
                        spacing={3} >
                        <Typography variant="subtitle2" alignItems={'center'}>Shared Message</Typography>
                        <IconButton onClick={() => { dispatch(UpdateSidebarType("CONTACT")) }}>
                            <X />
                        </IconButton>

                    </Stack>
                </Box>
                <Tabs value={value} onChange={handleChange} sx={{px:3.2, pt:2}} >
                    <Tab label="Media"/>
                    <Tab label="Links" />
                    <Tab label="Docs"  />
                </Tabs>
                <Stack sx={{
                    height:"100%",
                    position:"relative",
                    flexGrow:1,
                    overflowY: "scroll",
                    p:"20px"

                }} >
                    {(()=>{
                        switch(value){
                            case 0:
                                return(
                                    <Grid container spacing={2}>
                                        {[0,1,2,3,4,5,6,7,8].map((el)=>{
                                            return(
                                                <Grid item xs={4}>
                                                    <img src={faker.image.avatar()} alt={faker.person.fullName()} style={{borderRadius:'10px'}}/> 
                                                </Grid>
                                            )
                                        })}
                                    </Grid>
                                )
                            case 1:
                                return Links.map((el)=><LinkMsg el={el} />)
                            case 2:
                                return Docs.map((el)=> <DocMsg el={el}/>)
                                
                        }
                    })()}


                </Stack>
            </Stack>

        </Box>
    )

}

export default SharedMessages