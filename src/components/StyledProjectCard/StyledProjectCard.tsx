
import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledProjectCard: React.FC<StyledButtonProps> = ({ children }) => {
    
    const StyledProjectCard = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "20px 18px",
        width: "100%",
        color: theme.palette.primary.contrastText,

        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        transition: "background-color 0.3s ease", 
        '&:hover': {
            backgroundColor: "rgba(245, 255, 250, 0.2)",
        }
    }))

    return (
        <>
            <StyledProjectCard>
                {children}
            </StyledProjectCard>
        </>
    )
}

export default StyledProjectCard
