import { Container, Grid, styled, Typography } from "@mui/material"
import StyledCard from "../../../../components/StyledCard/StyledCard"

import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

import SchoolIcon from '@mui/icons-material/School';

import StyledButtonLight from "../../../../components/StyledButtonLight/StyledButtonLight";


const AboutMe = () => {

    const StyledAboutMe = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.contrastText,
        height: "235vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            height: "103vh"
        }
    }))

    return (
        <>
            <StyledAboutMe>
                <Container maxWidth={"lg"}>

                    <Grid item xs={12} md={7} marginTop={-6} marginBottom={-2}>

                        <Typography color="primary" variant="h2" textAlign="center" pb={2}>Sobre Mim</Typography>

                    </Grid>


                    <Grid container marginTop={0} display="flex" justifyContent="center" alignItems={"center"} gap={5} pt={4}>

                        <Grid display={"inline-flex"} alignItems={"center"} justifyContent={"center"}>
                            <StyledCard>
                                <WorkspacePremiumIcon />
                                <Typography fontWeight={"Bold"} fontSize={18}>
                                    Experiência
                                </Typography>
                                <Typography fontSize={18} fontWeight={"Italic"}>
                                    1 ano
                                </Typography>
                                <Typography fontWeight={"Italic"} fontSize={18}>
                                    Desenvolvedor Fullstack
                                </Typography>
                            </StyledCard>
                        </Grid>

                        <Grid>
                            <StyledCard>
                                <SchoolIcon />
                                <Typography fontWeight={"Bold"} fontSize={18}>
                                    Educação
                                </Typography>
                                <Typography fontWeight={"Italic"} fontSize={18}>
                                    Técnico em Desenvolvimento de Sistemas
                                </Typography>
                            </StyledCard>
                        </Grid>

                    </Grid>

                    <Grid marginTop={5}>

                        <Typography marginBottom={2} marginTop={-2} fontWeight={"Medium"}>Sou o Eduardo Felipe, atualmente vivo em São Paulo, iniciei na área no começo de 2023 no curso de Desenvolvimento de Sistemas no Senai de Informática Paulo Antônio Skaf, desde então peguei paixão pela a área de tecnologia e estudo constantemente para aperfeiçoar meus conhecimentos. Possuo projetos em React, React Native, HTML, CSS, Javascript, C# e SQL Server.</Typography>

                        <hr />

                    </Grid>

                    <Grid item xs={12} md={7} marginTop={2}>

                        <Typography color="primary" variant="h2" textAlign="center" pb={2}>Habilidades</Typography>

                    </Grid>

                    <Grid container gap={0} spacing={4} pt={4}>

                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>Javascript</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>Typescript</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>React</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>React Native</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>HTML</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>CSS</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>Azure DevOps</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>Figma</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>Git</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>C#</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>SQL Server</Typography>
                            </StyledButtonLight>
                        </Grid>
                        <Grid item xs={12} md={2} display="flex" justifyContent="center" >
                            <StyledButtonLight>
                                <Typography fontWeight={"Bold"} fontSize={18}>MongoDB</Typography>
                            </StyledButtonLight>
                        </Grid>

                    </Grid>

                </Container>
            </StyledAboutMe>
        </>
    )
}

export default AboutMe
