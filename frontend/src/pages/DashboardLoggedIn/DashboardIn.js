import React from 'react';
import { useNavigate } from 'react-router-dom';
import cuv_logo from '../../components/Logo/cuvette.png'
import lady from '../../components/Logo/lady.png'
import  './DashboardIn.css'
import '../../components/storeLayout/Layout.css'
import '../../components/Fonts/fonts.css'
import Card  from '../../components/API_card/Card';


function DashboardIn() {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  return (
  <main>
    <nav className='na'>
            <img src={cuv_logo} alt='opps'/>
            <p>My APIs</p>
            <strong>My Account</strong>
            <button><span>+New API</span></button>
          </nav>

          <div className='poster'>
            <img src={lady} alt='straw hat' />
            <section></section>
            <span>Background IMAGE Remove</span>
            <p>100% automatic and free</p>
            <button className='view_app'><p>View App</p></button>
          </div>

          <span className='text'>All APIs</span>

          <div className='APIs'>

            <div>
              <Card
                img={lady}
                name="Background Remove"
                desc="The descriptipn of the API in quick brief and we will truncate it here..."
              />
            </div>

            <div>
              <Card
                img={lady}
                name="Background Remove 1"
                desc="The descriptipn of the API in quick brief and we will truncate it here..."
              />
            </div>

            <div>
              <Card
                img={lady}
                name="Background Remove 2"
                desc="The descriptipn of the API in quick brief and we will truncate it here..."
              />
            </div>

          </div>

  </main>
  );
}

export default DashboardIn;
