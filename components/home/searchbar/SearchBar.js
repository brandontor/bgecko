import React, {useState} from 'react'
import style from './SearchBar.module.css'
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
    const [showSearch, setShowSearch] = useState(false)

    const focusHandler = () => {
      if (showSearch) return
      setShowSearch(true)
    } 

    const blurHandler = () => {
      if (!showSearch) return
      setShowSearch(false)
    }

  return (
    <div className={style.search}>
        <TextField onFocus={focusHandler} onBlur={blurHandler}
          color="primary" id="standard-basic" label="Search" variant="standard" sx={{
          '& .MuiInput-underline:before': { borderBottomColor: '#D8DEE9' },
          '& .MuiInput-underline:after': { borderBottomColor: '#D8DEE9' },'& .MuiInput-underline:hover:before': { borderBottomColor: '#D8DEE9' },
          borderRadius: '5px'
          }}  InputProps={{
          endAdornment: <InputAdornment sx={{color: '#D8DEE9'}}position="end"><SearchIcon/></InputAdornment>
        }}></TextField>
      {showSearch && 
        <div className={style.dropDown}>
          <p>Hello</p>
        </div>}
    </div>
  )
}
export default SearchBar