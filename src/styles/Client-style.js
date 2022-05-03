import { createStitches } from "@stitches/react";
export const { styled, css } = createStitches({
    media: {
        bp1: '(max-width: 478px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1380px)',
    },
  });

export const Client=styled('section',{
    backgroundColor:'#00000060',
    position: 'absolute',
    top: 0,
    right:0,
    width: '100%',
    height: '100%',
    display: "flex",
    justifyContent:'center',
    alignItems:'center',
  
})

export const Box=styled('div',{
    display: 'flex',
    position:'fixed',
    boxShadow:'0px 0px 10px #00000080',
    flexDirection: 'column',
    borderRadius:5,
    height: '70%',
    padding:'10px 10px' ,
    overflowY: "scroll",
    margin:'80px 0 00px 0',
    variants:{
    themes:{
        light:{
            backgroundColor:'#F5F5F5',

        },
        dark:{
            backgroundColor:'#757475',
        }
    },
    width: {
        small: {
            width: '100%',
    
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
    margin:'0 auto',
    alignItems:'center',
    flexDirection: 'row',
    flexWrap:'wrap',
    padding:'10px 0' ,
    justifyContent:'space-between',
    borderBottom:'1px solid gray',

})
export const Label=styled('label',{
    fontWeight:'700',
    textAlign:'left',
    fontSize:'20px',
    width: "100px",

})
export const Data=styled('p',{
    fontWeight:'700',
    fontSize:'15px',
    textAlign:'center',

})

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
