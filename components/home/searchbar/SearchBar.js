import React, {useState} from 'react'
import style from './SearchBar.module.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar() {
    const [hideSearch, setHideSearch] = useState(false)


  return (
    <div className={style.search}>
        <TextField color="primary" id="standard-basic" label="Search" variant="standard" sx={{
    '& .MuiInput-underline:before': { borderBottomColor: '#D8DEE9' },
    '& .MuiInput-underline:after': { borderBottomColor: '#D8DEE9' },'& .MuiInput-underline:hover:before': { borderBottomColor: '#D8DEE9' },
  }}></TextField>
    </div>
  )
}
// InputProps={{ disableUnderline: true,}}

export default SearchBar