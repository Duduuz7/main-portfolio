import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
}

const StyledButtonLight: React.FC<StyledButtonProps> = ({ children }) => {
    
    const StyledButtonLight = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "12px 15px",
        width: "250px",
        color: theme.palette.primary.main,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
            // backgroundColor: "#E1008F"
        }
    }))

    return (
        <>
            <StyledButtonLight>
                {children}
            </StyledButtonLight>
        </>
    )
}

export default StyledButtonLight
