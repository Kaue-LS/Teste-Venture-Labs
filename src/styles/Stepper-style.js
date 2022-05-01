import { styled } from "@stitches/react";

export const StepperArea=styled('div',{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center', 
})
export const Step=styled('div',{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
 
})
export const Stepper=styled('div',{
    borderRadius:'100%',

    variants:{
        set:{
            done:{
                display: 'flex',
                 backgroundColor:'#4682B4',
                fontSize:'34px',
            },
            undone:{
                padding: "10px 10px",
                border:'2px solid #d4d4d4',
            }
        },
      
    }
})
export const Bond=styled('div',{
    margin:'10px auto 15px auto',
    
})