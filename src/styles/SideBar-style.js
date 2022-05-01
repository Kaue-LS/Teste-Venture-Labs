import { createStitches } from "@stitches/react";

export const { styled, css } = createStitches({
    media: {
        bp1: '(max-width: 478px)',
        bp2: '(max-width: 768px)',
        bp3: '(max-width: 1380px)',
    },
  });
export const Header=styled('header',({

    position: "absolute",
    left: 0,
    bottom:0,
    zIndex:9999,
    height: '100%',
    padding:'10px 15px',
    display: "flex",
    justifyContent: "center",
    transition: "400ms",
    overflow: "hidden",
    variants:{
        theme:{
        light:{
            backgroundColor: '	#ffffff',
            boxShadow:'0px 0px 10px #00000080',
            color:'#747474',

        },
        dark:{
            backgroundColor: '#363636',
            color:'#ffffff',
        }
    },
 
    width: {
      
      close:{
        width: 60,
      },
        small: {
          width: '250px',
          padding: '10px 10px',
        //   backgroundColor:'aqua',
        },
        normal: {
          width: '280px',
          padding: '10px 10px',
        //   backgroundColor:'blue',


        },
        large: {
          width: '17.5rem',
          padding: '10px 10px',
        //   backgroundColor:'yellow',


        },
    },  
},
  
}));

export const Nav=styled('nav',{
  display: 'flex',
  flexDirection:'column',

  variants:{
    display:{
    close:{
  margin:'5rem 0rem 0 11rem',

    },
    open:{
      margin:'5rem 0rem 0 0rem',

    }
  }
}
});

export const Box=styled('ul',{
  display: 'flex',
  justifyContent:'space-between',
  alignItems: "center",
  textAlign: "center",
  fontSize:"22px",
  width:"100%",
  borderCollapse:'collapse',
  margin:'0rem 0rem 20px 3rem',
  padding:'10px 40px',
  transition: "400ms",
  borderTop:'1px solid #84848460',
  borderBottom:'1px solid #84848460',
  cursor:'pointer',
  '&:hover':{
    backgroundColor:'#84848460',
  }

});

export const Label=styled('li',{
  textDecoration:'none',
  listStyle:'none',
  width:200,
  fontWeight:'700',
  margin:'0 auto 0 20px',
  textAlign:'left',

});