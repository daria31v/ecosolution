import { useState } from "react"
import Button from "./Button"
import Navbar from "./Navbar"

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    
    const handleClick = () => {
        if (!isOpen) {
            handleOpen()
        } else {
            handleClose()
        }
    }
    
    const handleOpen = () => {
        setIsOpen(true)
    }
    
    const handleClose = () => {
        setIsOpen(false)
    }
    
    return (
        <div className="bg-bg_burger_menu absolute w-full h-full z-50 p-6">
        <Button  
        type="button"
        title="close"
        icon="/svg/close.svg"
        onClick={handleClick}
        variant="btn_close"
        width={8}
        height={8}
        />
        <div className="h-[1px] bg-white w-full mb-4"></div>

        <Navbar/>
        
      </div>
    )
}
export default BurgerMenu