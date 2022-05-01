import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        bp1: '(max-width: 478px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1380px)',
    },
  });
export const Header=styled('header',{
    position: "absolute",
    top:0,
    right: 0,
    boxShadow:'0px 0px 10px #00000080',
    zIndex:99999,
    display: 'flex',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    padding:'5px 10px',

    variants:{
        themes:{
        light:{
            backgroundColor:'#4682B4',
            boxShadow:'0px 0px 10px #00000080',
            color:'#ffffff',

        },
        dark:{
            backgroundColor: '#565656',
            color:'#ffffff',
        }
    },

    }
})

export const Box=styled('div',{
    display: 'flex',
    margin: 'auto auto',
    alignItems:'center',
    justifyContent:'space-between',
    
  })

  export const MenuIcon=styled({
        color:'#FFFFFF',
        fontSize:'45px',
        display: 'flex',
        margin: 'auto 40px auto 0px',
        cursor:'pointer',
  })
  export const Title=styled('h1',{
    color:'#FFFFFF',
    
    cursor:'pointer',
    variants:{
    font: {
          small: {
            fontSize:'20px',
          //   backgroundColor:'aqua',
          },
          normal: {
            fontSize:'20px',
          //   backgroundColor:'blue',
  
  
          },
          large: {
            fontSize:'40px',
          //   backgroundColor:'yellow',
  
  
          },
      },
    }  
})