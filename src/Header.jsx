import React from 'react'

const Header = () => {
  return (
    <div className='header' 
    style={{
        background: 'url(images/bg.png) no-repeat center center / cover'
    }}
    >
        <img src="./images/logo.png" />
        <div className="header__text">
            <h1>ЗАЖГИТЕ СВОЁ СОЛНЦЕ</h1>
            <p>Получите свой индивидуальный список солнцезажегающих действий от астролога Евгении Чумаковой, который поможет вам начать новую счастливую жизнь</p>
        </div>
        <button>Зажечь свое солнце</button>
    </div>
  )
}

export default Header