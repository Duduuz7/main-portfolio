import { Container, Grid, styled, Typography } from "@mui/material"
import StyledProjectCard from "../../../../components/StyledProjectCard/StyledProjectCard"
import StyledButtonCard from "../../../../components/StyledButtonCard/StyledButtonCard"

import videoFloralia from "../../../../assets/videos/Screen_Recording_20240619_162744_Expo Go.mp4"

import videoVitalHub from "../../../../assets/videos/1716498468296.mp4"

import logoGamer from "../../../../assets/images/LogoGamer.png"

import logoEvent from "../../../../assets/images/LogoEventPlus.svg"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile
            height: "518vh",
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            height: "295vh",
        }
    }))

    const CardContainer = styled("div")(({ theme }) => ({

        marginTop: "35px",
        gap: "30px",

        [theme.breakpoints.up('xs')]: { // <= mobile
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            display: "flex",
            flexDirection: "row"
        }
    }))

    const StyledVideo = styled("video")(({ }) => ({
        width: "100%",
        marginTop: "25px",
        marginBottom: "25px",
        height: "500px",
    }));

    const StyledImageCardGamer = styled("img")(({ }) => ({
        width: "90%",
        height: "auto",
        alignSelf: "center",
        justifySelf: "center",
        marginTop: "255px",
        marginBottom: "255px",
    }));

    const StyledImageCardEvent = styled("img")(({ }) => ({
        width: "90%",
        height: "auto",
        alignSelf: "center",
        justifySelf: "center",
        marginTop: "255px",
        marginBottom: "257px",
    }));


    return (

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

                            <StyledVideo autoPlay={true} src={videoFloralia} preload="auto" loop />


                            <Typography width={"100%"} textAlign={"left"} marginBottom={1.5} fontWeight={"Italic"} fontSize={16}>O projeto "Floralía" é um aplicativo com o objetivo de ajudar a modernizar uma floricultura tradicional em meio aos tantos avanços tecnológicos com a intenção de ampliar suas vendas para novos públicos, tornando a loja mais acessível. Interface simples e compreensível a todas as idades, acesso simples e fácil beneficiando o consumidor e a loja!</Typography>

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

                            </Grid>

                        </StyledProjectCard>

                    </Grid>

                    <Grid maxWidth={"550px"} item gap={4} xs={12} md={6} display="flex" justifyContent="center" >

                        <StyledProjectCard>

                            <Typography fontWeight={"Bold"} fontSize={18}>VitalHub</Typography>
                            <Typography fontWeight={"Italic"} fontSize={16}>Fevereiro 2024 - Maio 2024</Typography>

                            <StyledVideo autoPlay={true} src={videoVitalHub} preload="auto" loop />

                            <Typography width={"100%"} marginBottom={1.5} textAlign={"left"} fontWeight={"Italic"} fontSize={16}>O projeto "VitalHub" oferece uma solução abrangente para a gestão de consultas médicas. Onde há login de pacientes e médicos,implementação de câmera com leitura de imagem OCR, sistema de perfis e endereço, utilização do mapa Google Maps e facilidade no agendamento e cancelamento de consultas, sendo rápido e prático!</Typography>

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

                            </Grid>

                        </StyledProjectCard>

                    </Grid>

                </CardContainer>

                <CardContainer>

                    <Grid item maxWidth={"550px"} xs={12} md={6} display="flex" justifyContent="center" >

                        <StyledProjectCard>

                            <Typography fontWeight={"Bold"} fontSize={18}>Gamer</Typography>
                            <Typography fontWeight={"Italic"} fontSize={16}>Fevereiro 2023 - Março 2023</Typography>

                            <StyledImageCardGamer src={logoGamer} />


                            <Typography width={"100%"} textAlign={"left"} marginBottom={1.5} fontWeight={"Italic"} fontSize={16}>O projeto "Gamer" é um projeto moderno com foco em HTML e CSS puros, sendo um grande projeto de estudo sobre, onde aprendi muito sobre as linguagens e aprimorei muito minhas habilidades aplicando estilizações avançadas!</Typography>

                            <Typography textAlign={"left"} fontWeight={"Bold"} fontSize={16}>Tecnologias: Figma, HTML & CSS</Typography>


                            <Grid container gap={2} display={"flex"} justifyContent={"space-between"} marginTop={2}>

                                <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                    <StyledButtonCard
                                        onClick={() => {
                                            const url = 'https://github.com/Duduuz7/senai_repositorio_1_semestre/tree/main/projeto-gamer';
                                            return window.location.href = url;
                                        }}
                                    >

                                        <Typography>
                                            Ver código
                                        </Typography>

                                    </StyledButtonCard>
                                </Grid>

                                <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                    <StyledButtonCard onClick={() => {
                                        const url = 'https://projetogamereduardofelipe.vercel.app/';
                                        return window.location.href = url;
                                    }}>
                                        <Typography>
                                            Ver projeto
                                        </Typography>
                                    </StyledButtonCard>
                                </Grid>

                            </Grid>

                        </StyledProjectCard>

                    </Grid>

                    <Grid maxWidth={"550px"} item gap={4} xs={12} md={6} display="flex" justifyContent="center" >

                        <StyledProjectCard>

                            <Typography fontWeight={"Bold"} fontSize={18}>Event +</Typography>
                            <Typography fontWeight={"Italic"} fontSize={16}>Outubro 2023 - Dezembro 2023</Typography>

                            <StyledImageCardEvent src={logoEvent} />

                            <Typography width={"100%"} marginBottom={1.5} textAlign={"left"} fontWeight={"Italic"} fontSize={16}>O projeto "Event+" é que tem como objetivo adequar uma empresa de eventos ao mercado e agilizar seus processs internos de agendamento de eventos relacionados a área de TI. Event+ vem para tornar o agendamento de eventos mais rápido, com uma interface moderna, sistema de login com usuário comum e administrador, comentário com IA de filtro de ofensas e muito mais!</Typography>

                            <Typography textAlign={"left"} fontWeight={"Bold"} fontSize={16}>Tecnologias: React JS, HTML, CSS, Figma, SQL Server, C#</Typography>

                            <Grid container gap={2} display={"flex"} justifyContent={"space-between"} alignContent={"space-between"} marginTop={2}>

                                <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                    <StyledButtonCard
                                        onClick={() => {
                                            const url = 'https://github.com/Duduuz7/EventPlusDeploy';
                                            return window.location.href = url;
                                        }}>
                                        <Typography>
                                            Ver código
                                        </Typography>
                                    </StyledButtonCard>
                                </Grid>

                                <Grid item xs={12} md={12} display="flex" justifyContent="center" >
                                    <StyledButtonCard onClick={() => {
                                        const url = 'https://eventpluseduardofelipe.vercel.app/';
                                        return window.location.href = url;
                                    }}>
                                        <Typography>
                                            Ver projeto
                                        </Typography>
                                    </StyledButtonCard>
                                </Grid>

                            </Grid>

                        </StyledProjectCard>

                    </Grid>

                </CardContainer>

            </Container>

        </StyledProjects>

    )
}

export default Projects
