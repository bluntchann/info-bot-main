import image from "../../assets/img/404.svg"
import {Button} from "@mui/material";

const Not_found = () =>{
    return(
        <div className="w-[100vw] h-[100vh] bg-white flex flex-col gap-5 items-center justify-center">
            <img src={image} alt="404"/>
            <div className="flex flex-col gap-1 items-center">
                <span className="text-lg">Looks like your lost.</span>
                <span className="text-lg">Please contact your administrator....</span>
            </div>
            <Button variant="contained" style={{backgroundColor: "green", borderRadius: "20px"}}> Go Back!.</Button>

        </div>
    )
}


export default Not_found;