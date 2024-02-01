import React from 'react';
import AdNavbar from '../AdminNavbar/AdNavbar';
import Footer from '../../../Components/Footer/Footer';
import RightSidebar from '../RightSidebar';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
    return (
        <div className="layout-container">
            <AdNavbar />
            <main style={{backgroundColor:"#F5F5F5"}}>
                <div className="row m-0 p-0 ">
                    <div className='col-12 p-0 col-md-2'>
                        <RightSidebar />
                    </div>
                    
                    <Container className='col-12 p-0 m-0 col-md-9 mx-auto mt-3 ' style={{boxSizing:'border-box'}}>
                        {children}
                    </Container>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Layout;