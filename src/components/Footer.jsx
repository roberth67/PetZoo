import React from 'react';

const Footer = ( {yearActual} ) => {
    console.log(yearActual);
    return ( 
        <div className="sticky-bottom">
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <h4 className="text-white">Desarrollador por RuaguiDev  &copy; {yearActual}</h4>
            </nav>
        </div>
     );
}
 
export default Footer;