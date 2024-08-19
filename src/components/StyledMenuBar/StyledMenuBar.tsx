import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

import CloseIcon from "../../assets/images/CloseIcon.svg"

interface MenuBarProps {
    onClickAbout: () => void;
    onClickSkills: () => void;
    onClickProjects: () => void;
    onClickShow: () => void;
    showMenubar: boolean;
}

const StyledMenuBar = styled(Toolbar)<{ showMenubar: boolean }>(({ showMenubar }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    position: "fixed",
    top: "0px",
    right: "-40px",
    width: "72%",
    paddingRight: "8.5%",
    background: 'linear-gradient(to right bottom, #ffffff23, #000221)',
    transition: "transform 0.5s ease",
    backdropFilter: "blur(4px)",
    borderBottomLeftRadius: "4px",
    transform: showMenubar ? "translateX(0)" : "translateX(150vw)",
}));

const StyledCloseIcon = styled("img")(({}) => ({
    position: "absolute",
    left: "15px",
    top: "12px"
}))

const MenuBar: React.FC<MenuBarProps> = ({ onClickAbout, onClickSkills, onClickProjects, showMenubar, onClickShow }) => {
    return (
        <>
            <AppBar position="absolute">
                <StyledMenuBar showMenubar={showMenubar}>
                    <StyledCloseIcon onClick={onClickShow} src={CloseIcon}/>
                    <MenuItem style={{ borderBottom: "1px solid white" }} onClick={onClickAbout}>Sobre</MenuItem>
                    <MenuItem style={{ borderBottom: "1px solid white" }} onClick={onClickSkills}>Habilidades</MenuItem>
                    <MenuItem style={{ borderBottom: "1px solid white", marginBottom: "20px" }} onClick={onClickProjects}>Projetos</MenuItem>
                </StyledMenuBar>
            </AppBar>
        </>
    );
}

export default MenuBar;
