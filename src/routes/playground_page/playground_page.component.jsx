import React from 'react';
import Header from '../../components/Playground_Components/header/header.component';
import Footer from '../../components/Playground_Components/footer/footer.component';
import Main from '../../components/Playground_Components/main/main.component';
import './playground_page.styles.scss'


function PlaygroundPage() {
  return (
    <div className='playground_main_container'>
    <Header/>
    <Main/>
    <Footer/>
        
    </div>
  );
}

export default PlaygroundPage;