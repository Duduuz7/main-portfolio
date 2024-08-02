import { Box, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

import curriculoEduardoDev from "../../../../assets/documents/CurriculoEduardoDev.pdf"


const Hero = () => {

    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "110vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >=mobile

        }
    }))

    const StyledImg = styled("img")(({ theme }) => ({
        // width: "75%",
        borderRadius: "11%",
        border: `1px solid ${theme.palette.primary.contrastText}`,

        [theme.breakpoints.up('xs')]: { // <= mobile
            width: "55%",
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            width: "75%",
        }
        
    }))

    return (
        <>
            <StyledHero>

                <Container maxWidth="lg">

                    <Grid container spacing={2}>

                        <Grid item xs={12} md={5}>

                            <Box position="relative">

                                <Box position="absolute" width={"150%"} top={-100} right={0}>

                                    <AnimatedBackground />

                                </Box>

                                <Box position="relative" textAlign="center">

                                    <StyledImg src={Avatar} />

                                </Box>

                            </Box>

                        </Grid>

                        <Grid item xs={12} md={7} marginTop={15}>

                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>Eduardo Felipe</Typography>
                            <Typography color="primary.contrastText" variant="h2" textAlign="center" >Desenvolvedor Fullstack</Typography>

                            <Grid container display="flex" justifyContent="center" gap={0} spacing={4} pt={4}>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                                    <StyledButton 
                                    onClick={() => {
                                        // Método para fazer download do currículo, utilizando elemento "a" para criar um "link" temporário
                                        const link = document.createElement("a");
                                        link.href = curriculoEduardoDev;
                                        link.download = "CurriculoEduardoDev";
                                        link.click();
                                    }}
                                    >
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                                </Grid>

                                <Grid item xs={12} md={4} display="flex" justifyContent="center" >
                                    <StyledButton 
                                        onClick={() => {
                                            console.log("asdas");
                                        }}
                                    >
                                        <MailOutlineIcon />
                                        <Typography>
                                            Contato
                                        </Typography>
                                    </StyledButton>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    )
}

export default Hero
