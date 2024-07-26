import { Container, Grid, styled, Typography } from "@mui/material"

const Projects = () => {

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "286vh",
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
            <StyledProjects>

                <Container>

                    <Grid item xs={12} md={7} marginTop={-6} marginBottom={-2}>

                        <Typography color="primary.contrastText" variant="h2" textAlign="center" pb={2}>Projetos</Typography>

                    </Grid>

                </Container>

            </StyledProjects>
        </>
    )
}

export default Projects
