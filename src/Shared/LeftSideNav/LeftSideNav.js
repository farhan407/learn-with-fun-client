import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = ({data}) => {
    const {name,id}=data;
    return (
        <>
            <div className='py-3'>
                <ul>
                    <Link to={`/courses/${id}`} style={{color:'black'}}>{name}</Link><br></br>
                </ul>
            </div>
        </>
    );
};

export default LeftSideNav;