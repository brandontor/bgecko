import React, {useState} from 'react'
import style from './SearchBar.module.css'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

function SearchBar() {
    const [hideSearch, setHideSearch] = useState(false)


  return (
    <div className={style.search}>
        <TextField color='primary' id="standard-basic" label="Search" variant="standard"></TextField>
    </div>
  )
}

export default SearchBar