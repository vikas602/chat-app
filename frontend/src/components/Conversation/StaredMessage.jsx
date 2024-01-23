import { Box, IconButton, Stack, Typography,} from '@mui/material';
import * as React from 'react';
import { useTheme } from "@mui/material/styles"
import { X } from 'phosphor-react';
import { dispatch } from '../../redux/store';
import { UpdateSidebarType } from '../../redux/slices/app';
import {faker} from '@faker-js/faker'

function StaredMessage() {
    const theme =useTheme();
    return (
        <Box sx={{ width: 490, height: "100vh" }}>
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
            </Stack>
        </Box>
    )
}

export default StaredMessage