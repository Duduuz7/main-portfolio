import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

interface NavBarProps {
    onClickAbout: () => void;
    onClickSkills: () => void;
    onClickProjects: () => void;
}
const NavBar: React.FC<NavBarProps> = ({onClickAbout, onClickSkills, onClickProjects}) => {
    
    const StyledToolbar = styled(Toolbar)(({theme}) => ({
        display: "flex",
        justifyContent: "space-evenly",

        [theme.breakpoints.up('xs')]: { // <= mobile
            // width: "55%",
            // marginBottom: "-30%"
            marginRight: "2px"
        },
        [theme.breakpoints.up('md')]: { // >=mobile
            // width: "75%",
            marginRight: "0px"

        }

    }))

    return (
        <>
            <AppBar position="absolute">
                <StyledToolbar>
                    <MenuItem onClick={onClickAbout}>Sobre Mim</MenuItem>
                    <MenuItem onClick={onClickSkills}>Habilidades</MenuItem>
                    <MenuItem onClick={onClickProjects}>Projetos</MenuItem>
                </StyledToolbar>
            </AppBar>
        </>
    )
}

export default NavBar
