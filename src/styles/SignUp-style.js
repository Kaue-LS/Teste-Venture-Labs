import { createStitches } from "@stitches/react";
export const { styled, css } = createStitches({
    media: {
        bp1: '(max-width: 478px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1380px)',
    },
  });

export const SignUp=styled('section',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'50px auto',
  
})
export const Form=styled('form',{
    display:'flex',
    flexDirection:'column',
    backgroundColor:'##F5F5F5',
    padding: '20px 10px',
    boxShadow:'0px 0px 10px #00000080',
    margin:'30px auto 0 auto',
    borderRadius:'10px',
    variants:{
        width: {
        small: {
            width: '90%',
    
          //   backgroundColor:'aqua',
          },
          normal: {
            width: '60%',
          //   backgroundColor:'blue',
    
    
          },
          large: {
            width: '50%',
          //   backgroundColor:'yellow',
    
    
          },
        }
        }

})
export const FormControl=styled('div',{
    display: 'flex',
    flexDirection:'column',
    margin:'10px auto',
    width: '80%',

})
export const Label=styled('label',{
    margin:' 0 0 10px 0',
    fontWeight:'700',
    fontSize:'18px'

})
export const Input=styled('input',{
    border: 'none',
    borderBottom: '2px solid gray',
    padding:'10px 10px',
    
    variants:{
        themes:{
        light:{
        },
        dark:{
            borderRadius:'5px',
            backgroundColor: '#d4d4d4',
        }
    }
    },
    '&:focus':{
    borderBottom: 'none',
        outline: '2px solid #4682B4',
        borderRadius:'5px',
    }
})

export const Title=styled('h1',{
    fontSize:'32px',
    textAlign:'center',
    margin: "30px auto 20px auto",
})

export const AreaButton=styled('div',{
    display: 'flex',
    justifyContent:'space-evenly',
    alignItems:'center',
})
export const Button=styled('button',{
    width: "150px",
    padding: '10px 10px',
    fontWeight:'700',
    variants:{
        themes:{
            light:{

            },
            dark:{

            }
        },
        step:{
            proximo:{
                backgroundColor:' #4682B4',
                border: "none",
                borderRadius:'5px',
                color:'#ffffff',
                fontSize:'19px',
            },
            voltar:{
                backgroundColor:' #d4d4d4',
                border: "none",
                borderRadius:'5px',
                fontSize:'19px',
            }
        }
    }
})
export const Error=styled('span',{
    backgroundColor:'#FF0000',
    width: '80%',
    borderRadius:5,
    fontWeight:700,
    color: '#ffffff',
    padding:'10px 10px',
    margin:'0 auto',
})
export const Check=styled('span',{
    backgroundColor:'#00FF00',
    borderRadius:'100%',
    fontSize:'50px',
    display:'flex',
    fontWeight:700,
    color: '#ffffff',
    margin:'20px auto',
})