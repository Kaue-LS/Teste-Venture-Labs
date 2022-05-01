import { styled } from "@stitches/react";

export const Icon=styled('span',{
    position: 'fixed',
    fontSize:30,
    right:20,
    bottom:20,
    display: 'flex',
    borderRadius:100,
    border: '2px solid #74747460',
    boxShadow:'0px 0px 10px #00000060',
    padding:'10px 10px',

    variants:{
        theme:{
        light:{
            backgroundColor: '	#ffffff',
            boxShadow:'0px 0px 10px #00000080',
            color:'#070707',

        },
        dark:{
            backgroundColor: '#363636',
            color:'#ffffff',
        }
    },
    }
})