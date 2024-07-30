import { Container, Grid, styled, Typography } from "@mui/material"
import StyledProjectCard from "../../../../components/StyledProjectCard/StyledProjectCard"
import StyledButtonCard from "../../../../components/StyledButtonCard/StyledButtonCard"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "212vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { // <= mobile

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            height: "103vh",
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

    return (
        <>
            <StyledProjects>

                <Container maxWidth="lg">

                    <Grid item xs={12} md={7} marginTop={-6} marginBottom={-2}>

                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Projetos</Typography>

                    </Grid>


                    <CardContainer>



                        <Grid item xs={12} md={6} display="flex" justifyContent="center" >

                            <StyledProjectCard>

                                <Typography fontWeight={"Bold"} fontSize={18}>Floralía</Typography>
                                <Typography fontWeight={"Italic"} fontSize={16}>Abril 2023 - Julho 2023</Typography>

                                <video preload="auto" loop>
                                    <source src="" type="video/mp4" />
                                </video>

                                <Typography textAlign={"left"} marginBottom={1.5} fontWeight={"Italic"} fontSize={16}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ullam distinctio animi dolores eveniet, delectus incidunt obcaecati blanditiis magni deserunt itaque? Saepe sed fugit nihil accusantium incidunt labore laboriosam qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio repellat vero labore, tenetur totam molestiae dolorum doloribus obcaecati tempore perspiciatis ea illo sequi nobis eius dolore officiis nisi ab magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse quisquam, nostrum enim repudiandae aut porro, alias, nesciunt minima ex sequi laudantium ipsa saepe consequuntur. Ducimus id eveniet magnam illo!</Typography>

                                <Typography textAlign={"left"} fontWeight={"Bold"} fontSize={16}>Tecnologias: React Native, HTML, CSS, Figma, SQL Server, C#</Typography>

                                <Grid container display={"flex"} justifyContent={"space-between"} marginTop={2}>

                                    <Grid item xs={12} md={5.9} display="flex" justifyContent="center" >
                                        <StyledButtonCard>
                                            <Typography>
                                                Ver código
                                            </Typography>
                                        </StyledButtonCard>
                                    </Grid>

                                    <Grid item xs={12} md={5.9} display="flex" justifyContent="center" >
                                        <StyledButtonCard>
                                            <Typography>
                                                Ver projeto
                                            </Typography>
                                        </StyledButtonCard>
                                    </Grid>

                                </Grid>

                            </StyledProjectCard>

                        </Grid>

                        <Grid item gap={4} xs={12} md={6} display="flex" justifyContent="center" >

                            <StyledProjectCard>

                                <Typography fontWeight={"Bold"} fontSize={18}>Floralía</Typography>
                                <Typography fontWeight={"Italic"} fontSize={16}>Abril 2023 - Julho 2023</Typography>

                                <video preload="auto" loop>
                                    <source src="" type="video/mp4" />
                                </video>

                                <Typography marginBottom={1.5} fontWeight={"Italic"} fontSize={16}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, ullam distinctio animi dolores eveniet, delectus incidunt obcaecati blanditiis magni deserunt itaque? Saepe sed fugit nihil accusantium incidunt labore laboriosam qui! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio repellat vero labore, tenetur totam molestiae dolorum doloribus obcaecati tempore perspiciatis ea illo sequi nobis eius dolore officiis nisi ab magnam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas esse quisquam, nostrum enim repudiandae aut porro, alias, nesciunt minima ex sequi laudantium ipsa saepe consequuntur. Ducimus id eveniet magnam illo!</Typography>

                                <Typography textAlign={"left"} fontWeight={"Bold"} fontSize={16}>Tecnologias: React Native, HTML, CSS, Figma, SQL Server, C#</Typography>

                                <Grid container display={"flex"} justifyContent={"space-between"} marginTop={2}>

                                    <Grid item xs={12} md={5.9} display="flex" justifyContent="center" >
                                        <StyledButtonCard>
                                            <Typography>
                                                Ver código
                                            </Typography>
                                        </StyledButtonCard>
                                    </Grid>

                                    <Grid item xs={12} md={5.9} display="flex" justifyContent="center" >
                                        <StyledButtonCard>
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
        </>
    )
}

export default Projects
