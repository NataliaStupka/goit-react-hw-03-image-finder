
import { Oval } from  'react-loader-spinner'


const Loader = () => {
    const style = {
    display: "block",
    margin: "0 auto",
    };
    
    return (
        
        <Oval
            heigth="80"
            width="80"
            color="blue"
            secondaryColor="skey"
            ariaLabel='loading'
            wrapperStyle={style}
            />
       
        
    )
};

export default Loader;


