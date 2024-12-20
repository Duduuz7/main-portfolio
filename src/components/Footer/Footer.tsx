import { Grid, styled, Typography } from "@mui/material"

import GitHubIcon from '@mui/icons-material/GitHub';

import InstagramIcon from '@mui/icons-material/Instagram';

import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {

    const StyledFooter = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "15vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            // flexDirection: "row"
        },
        [theme.breakpoints.up('md')]: { // >=mobile",
            height: "15vh"
        }
    }))

    return (
        <>
            <StyledFooter>

                <Grid item xs={12} md={12}>

                    <Grid display={"flex"} flexDirection={"row"} justifyContent={"space-around"} xs={4} md={4} marginBottom={2} >

                        <Grid item xs={4} md={4}>
                            <a href="https://github.com/Duduuz7" target="_blank">
                                <GitHubIcon htmlColor="#2E116B"/>
                            </a>
                        </Grid>

                        <Grid item xs={4} md={4} >
                            <a href="https://www.linkedin.com/in/dududev7/" target="_blank">
                                <LinkedInIcon htmlColor="#2E116B"/>
                            </a>
                        </Grid>

                        <Grid item xs={4} md={4} >
                            <a href="https://www.instagram.com/dudukz._" target="_blank">
                                <InstagramIcon htmlColor="#2E116B"/>
                            </a>
                        </Grid>

                    </Grid>



                    <Grid item xs={12} md={12}>
                        <Typography color="primary.main" fontWeight={"Bold"} fontSize={14} textAlign="center" >© 2024 Eduardo Felipe - Todos os direitos reservados</Typography>
                    </Grid>

                </Grid>

            </StyledFooter>
        </>
    )
}

export default Footer
