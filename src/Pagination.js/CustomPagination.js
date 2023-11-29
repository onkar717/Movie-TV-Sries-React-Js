// import { Pagination } from '@material-ui'
import { Pagination, ThemeProvider } from '@mui/material'
import React from 'react'
import { createMuiTheme } from '@material-ui/core'

const CustomPagination = ({setpage , numofpages}) => {

    const handelchange = (page) => {
        setpage(page)
        window.scroll(0,0);
    }

    const darkTheme = createMuiTheme({
      palette:{
        type:"dark"
      }
    })

    
  return (
    <div
    style={{
      width:"100%",
      display:"flex",
      justifyContent:"center",
      marginTop:10,
    }}
    >
      <ThemeProvider theme={darkTheme}> 
        <Pagination hideNextButton hidePrevButton color='primary' count={numofpages} onChange={(e) => handelchange(e.target.textContent)} />
      </ThemeProvider>
    </div>
  )
}

export default CustomPagination