import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledCard: React.FC<StyledButtonProps> = ({ children }) => {
    
    const StyledCard = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "5px",
        padding: "15px 30px",
        width: "250px",
        height: "172px",
        color: theme.palette.primary.main,
        // color: "black",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        gap: "4px",
        // '&:hover': {
        //     backgroundColor: theme.palette.secondary.main
        // }
    }))

    return (
        <>
            <StyledCard>
                {children}
            </StyledCard>
        </>
    )
}

export default StyledCard
