import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

const Header = () => {
    const router = useHistory()
    const [searchQuery, setSearchQuery] = useState('')
    const searchHandler = (e) => {
        if (e.key == "Enter")
        {
            router.push(`/search/${searchQuery}`)
            setSearchQuery('')
        }
    }
    return (
        <header className={'header'}>
            <h3 onClick={() => router.push('/home')} className="header__text">MyCatalog</h3>
            <input onKeyPress={e => searchHandler(e)} type="text" value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="header__input" placeholder={"Поиск..."}/>
        </header>
    );
};

export default Header;