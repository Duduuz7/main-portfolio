import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonCardProps {
    children: ReactNode
}

const StyledButtonCard: React.FC<StyledButtonCardProps> = ({ children }) => {
    
    const StyledButtonCard = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    }))

    return (
        <>
            <StyledButtonCard>
                {children}
            </StyledButtonCard>
        </>
    )
}

export default StyledButtonCard
