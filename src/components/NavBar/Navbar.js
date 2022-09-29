import React from 'react'
import classes from './Navbar.module.css'
import { ReactComponent as Catalyst } from '../../assets/images/catalyst.svg'
import { Avatar } from 'antd';
import * as data from '../../data'
import { getNameInitials } from '../../helpers/getNameInitials'
const Navbar = () => {
    const navbar = data?.navbarDetails;
    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>
                <Catalyst />
            </div>
            <div className={classes.navbar_right}>

                <div className={classes.avatar}>
                    <div className={classes.left}>
                        <Avatar size={{
                            xs: 24,
                            sm: 32,
                            md: 38,
                            lg: 40,
                            xl: 45,
                            xxl: 60,
                        }} style={{ backgroundColor: '#5351B01A' }}><h3>{getNameInitials(navbar?.name)}</h3></Avatar>
                    </div>

                    <div className={classes.right}>
                        <h1>{navbar?.name}</h1>
                        <p>{navbar?.acctType}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
