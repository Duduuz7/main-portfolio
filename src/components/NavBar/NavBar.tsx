import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"
import menu from "../../assets/images/menu.svg"

interface NavBarProps {
    onClickAbout: () => void;
    onClickSkills: () => void;
    onClickProjects: () => void;
    onClickMenu: () => void;
}
const NavBar: React.FC<NavBarProps> = ({ onClickAbout, onClickSkills, onClickProjects, onClickMenu }) => {

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        justifyContent: "space-evenly",

        [theme.breakpoints.up('xs')]: { // <= mobile
            // width: "55%",
            // marginBottom: "-90px",
            marginRight: "2px",
            display: "none"
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            // width: "75%",
            marginRight: "0px",
            display: "flex"
        }

    }))

    const StyledMenuIcon = styled("img")(({ theme }) => ({
        display: "flex",
        justifyContent: "space-evenly",

        [theme.breakpoints.up('xs')]: { // <= mobile
            marginTop: "5px",
            marginBottom: "5px",
            marginLeft: "87.5%",
            width: "40px",
            height: "40px",

        },
        [theme.breakpoints.up('md')]: { // >=mobile
            // width: "75%",
            marginRight: "0px",
            display: "none"
        }

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem
                        sx={{
                            "&:hover": { 
                                // color: "#C5007D",
                                transform: "scale(1.06)", 
                            }
                        }}
                        onClick={onClickAbout}
                    >
                        Sobre
                    </MenuItem>
                    <MenuItem
                        sx={{
                            "&:hover": {
                                // color: "#C5007D",
                                transform: "scale(1.06)", 
                            }
                        }}
                        onClick={onClickSkills}
                    >
                        Habilidades
                    </MenuItem>
                    <MenuItem
                        sx={{
                            "&:hover": {
                                // color: "#C5007D",
                                transform: "scale(1.06)", 
                            }
                        }}
                        onClick={onClickProjects}
                    >
                        Projetos
                    </MenuItem>

                </StyledToolbar>

                <a onClick={onClickMenu}>
                    <StyledMenuIcon src={menu} />
                </a>


            </AppBar>
        </>
    )
}

export default NavBar
