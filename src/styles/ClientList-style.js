import { createStitches } from "@stitches/react";
export const { styled, css } = createStitches({
    media: {
        bp1: '(max-width: 478px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1380px)',
    },
  });

export const ClientList=styled('section',{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    margin:'50px auto',
  
})
export const List=styled('div',{
    display:'flex',
 
    borderRadius:'10px',
    variants:{
        width: {
        small: {
            width: '100%',
    
          //   backgroundColor:'aqua',
          },
          normal: {
            alignItems:'center',
              justifyContent:'center',
            flexDirection:'column',
            width: '60%',
          //   backgroundColor:'blue',
    
    
          },
          large: {
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'space-evenly',
            width: '100%',
          //   backgroundColor:'yellow',
    
    
          },
        }
        }

})
export const Box=styled('div',{
    display: 'flex',
    padding: '20px 10px',
    boxShadow:'0px 0px 10px #00000080',
    justifyContent:'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius:5,
    margin:'0px 0 10px 0',
    variants:{
    themes:{
        light:{
            backgroundColor:'##F5F5F5',

        },
        dark:{
            backgroundColor:'#969696',
        }
    },
    width: {
        small: {
            width: '90%',
    
          },
          normal: {
           
            width: '100%',
          //   backgroundColor:'blue',
    
    
          },
          large: {
            width: '45%',
          //   backgroundColor:'yellow',
    
    
          },
        }
    }
    
})
export const BoxControl=styled('div',{
    display: 'flex',
    width: '100%',
    alignItems:'center',
    justifyContent:'space-around',

})
export const Label=styled('label',{
    fontWeight:'700',
    textAlign:'center',
    fontSize:'20px',

})
export const Data=styled('p',{
    fontWeight:'700',
    fontSize:'15px',
    textAlign:'center',

})
// export const Input=styled('input',{
//     border: 'none',
//     borderBottom: '2px solid gray',
//     padding:'10px 10px',
    
//     variants:{
//         themes:{
//         light:{
//         },
//         dark:{
//             borderRadius:'5px',
//             backgroundColor: '#d4d4d4',
//         }
//     }
//     },
//     '&:focus':{
//     borderBottom: 'none',
//         outline: '2px solid #4682B4',
//         borderRadius:'5px',
//     }
// })

export const Title=styled('h1',{
    fontSize:'32px',
    textAlign:'center',
    margin: "30px auto 20px auto",
})

export const AreaButton=styled('div',{
    display: 'flex',
    margin:'10px 0 0 0',
    justifyContent:'space-evenly',
    alignItems:'center',
})
export const Button=styled('button',{
    width: "150px",
    padding: '10px 10px',
    fontWeight:'700',
    variants:{
      
        step:{
            proximo:{
                backgroundColor:' #4682B4',
                border: "none",
                borderRadius:'5px',
                color:'#ffffff',
                fontSize:'19px',
            },
          
        }
    }
})
// export const Error=styled('span',{
//     backgroundColor:'#FF0000',
//     width: '80%',
//     borderRadius:5,
//     fontWeight:700,
//     color: '#ffffff',
//     padding:'10px 10px',
//     margin:'0 auto',
// })
