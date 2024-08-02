import { Container, Grid, styled, Typography } from "@mui/material"
import StyledProjectCard from "../../../../components/StyledProjectCard/StyledProjectCard"
import StyledButtonCard from "../../../../components/StyledButtonCard/StyledButtonCard"

import videoFloralia from "../../../../assets/videos/Screen_Recording_20240619_162744_Expo Go.mp4"

import videoVitalHub from "../../../../assets/videos/1716498468296.mp4"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "307vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            height: "155vh",
        }
    }))

    const CardContainer = styled("div")(({ theme }) => ({

        marginTop: "35px",
        gap: "30px",

        [theme.breakpoints.up('xs')]: { // <= mobile
            display: "flex",
            flexDirection: "column"
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            display: "flex",
            flexDirection: "row"
        }
    }))

    const StyledVideo = styled("video")(({}) => ({
        width: "100%",
        marginTop: "25px",
        marginBottom: "25px",
        height: "500px",
        // border: `1px solid ${theme.palette.primary.contrastText}`
    }));


    return (
        <>
            <StyledProjects>

                <Container maxWidth="lg">

                    <Grid item xs={12} md={7} marginTop={-12} marginBottom={7}>

                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Projetos</Typography>

                    </Grid>


                    <CardContainer>

                        <Grid item maxWidth={"550px"} xs={12} md={6} display="flex" justifyContent="center" >

                            <StyledProjectCard>

                                <Typography fontWeight={"Bold"} fontSize={18}>Floralía</Typography>
                                <Typography fontWeight={"Italic"} fontSize={16}>Maio 2024 - Junho 2024</Typography>

                                <StyledVideo autoPlay src={videoFloralia} preload="auto" loop />


                                <Typography width={"100%"} textAlign={"left"} marginBottom={1.5} fontWeight={"Italic"} fontSize={16}>Um aplicativo com o objetivo de ajudar a modernizar uma floricultura tradicional em meio aos tantos avanços tecnológicos com a intenção de ampliar suas vendas para novos públicos, tornando a loja mais acessível. Interface simples e compreensível a todas as idades, acesso simples e fácil beneficiando o consumidor e a loja!</Typography>

                                <Typography textAlign={"left"} fontWeight={"Bold"} fontSize={16}>Tecnologias: React Native, HTML, CSS, Figma, SQL Server, C#</Typography>


                                <Grid container display={"flex"} justifyContent={"space-between"} marginTop={2}>

                                    <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                        <StyledButtonCard
                                            onClick={() => {
                                                const url = 'https://github.com/Duduuz7/Projeto-Floralia.git';
                                                return window.location.href = url;
                                            }}
                                        >

                                            <Typography>
                                                Ver código
                                            </Typography>

                                        </StyledButtonCard>
                                    </Grid>

                                    {/* <Grid item xs={12} md={5.9} display="flex" justifyContent="center" >
                                        <StyledButtonCard>
                                            <Typography>
                                                Ver projeto
                                            </Typography>
                                        </StyledButtonCard>
                                    </Grid> */}

                                </Grid>

                            </StyledProjectCard>

                        </Grid>

                        <Grid maxWidth={"550px"} item gap={4} xs={12} md={6} display="flex" justifyContent="center" >

                            <StyledProjectCard>

                                <Typography fontWeight={"Bold"} fontSize={18}>VitalHub</Typography>
                                <Typography fontWeight={"Italic"} fontSize={16}>Fevereiro 2024 - Maio 2024</Typography>

                                <StyledVideo autoPlay src={videoVitalHub} preload="auto" loop />

                                <Typography width={"100%"} marginBottom={1.5} textAlign={"left"} fontWeight={"Italic"} fontSize={16}>O projeto "VitalHub" oferece uma solução abrangente para a gestão de consultas médicas. Onde há login de pacientes e médicos,implementação de câmera com leitura de imagem OCR, sistema de perfis, utilização do mapa Google Maps e facilidade no agendamento e cancelamento de consultas, sendo rápido e prático!</Typography>

                                <Typography textAlign={"left"} fontWeight={"Bold"} fontSize={16}>Tecnologias: React Native, HTML, CSS, Figma, SQL Server, C#</Typography>

                                <Grid container gap={2} display={"flex"} justifyContent={"space-between"} alignContent={"space-between"} marginTop={2}>

                                    <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                        <StyledButtonCard
                                            onClick={() => {
                                                const url = 'https://github.com/Duduuz7/vitalHub-duo';
                                                return window.location.href = url;
                                            }}>
                                            <Typography>
                                                Ver código
                                            </Typography>
                                        </StyledButtonCard>
                                    </Grid>

                                    {/* <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                        <StyledButtonCard>
                                            <Typography>
                                                Ver projeto
                                            </Typography>
                                        </StyledButtonCard>
                                    </Grid> */}

                                </Grid>

                            </StyledProjectCard>

                        </Grid>

                    </CardContainer>

                </Container>

            </StyledProjects>
        </>
    )
}

export default Projects
