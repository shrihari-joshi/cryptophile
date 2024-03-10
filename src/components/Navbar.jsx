import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeFilled, MoneyCollectFilled ,BulbFilled, FundFilled, MenuFoldOutlined} from '@ant-design/icons';
import icon from '../images/logo.jpg';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <Avatar src={icon} size={'large'}/>
            <Typography.Title level={2} className='logo'>
                <Link to="/">Cryptophile</Link>
            </Typography.Title>
            <Menu theme='dark'>
                
                <Menu.Item icon={ <HomeFilled/>} >
                    {/* <link to='/'>Home</link> */}
                </Menu.Item>

                <Menu.Item icon={ <FundFilled/>} >
                    {/* <link to='/cryptocurrencies'>Cryptocurrencies</link> */}
                </Menu.Item>

                <Menu.Item icon={ <MoneyCollectFilled/>} >
                    {/* <link to='/exchanges'>Exchanges</link> */}
                </Menu.Item>

                <Menu.Item icon={ <BulbFilled/>} >
                    {/* <link to='/news'>News</link> */}
                </Menu.Item>
            </Menu>
            
        </div>
    </div>
  )
}

export default Navbar