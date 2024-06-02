'use client';
import React from 'react'
import "./Header.css"
import { useRef , useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
    const inputRef = useRef(null);
    const [inputVisible, setInputVisible] = useState(false)
    const handleSearchbtn = () => {
        setInputVisible(!inputVisible)
        if (inputRef.current && !inputVisible){
            inputRef.current.focus()
        }
    }
  return (
    <nav className='navbar'>
      <div className='logo'>
          <h1>Anime</h1>
      </div>
      <div className={`search-section ${inputVisible ? 'mobile-visible' : ''}`}>
            <SearchIcon className='searchbtn' onClick={handleSearchbtn}/>
          <input type="text" name="search" id="search" placeholder='Search for anime...'ref={inputRef}/>
      </div>
    </nav>
  )
}

export default Header
