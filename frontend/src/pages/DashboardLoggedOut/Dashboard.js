import React from 'react';
import { useNavigate } from 'react-router-dom';
import cuv_logo from './Logo/logo.png'
import lady from './Logo/lady.png'
import  './Dashboard.css'
import '../../components/storeLayout/Layout.css'
import '../../components/Fonts/fonts.css'
import Card  from '../../components/API_card/Card';

export default function Dashboard() {
  const navigate = useNavigate();


  return (
      <main role='main'>
          <nav className='na'>
            <img src={cuv_logo} alt='opps'/>
            <button className='login_button' onClick={()=> navigate('/login')} >
              Login/Signup
            </button>
          </nav>

          <div className='poster'>
            <img src={lady} alt='straw hat' />
            <section></section>
            <span>Background IMAGE Remove</span>
            <p>100% automatic and free</p>
            <button className='view_app'><a href="/bgRemover" onClick={()=>navigate('/bgRemover')}><p>View App</p></a></button>
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

            <div>
              <Card
                img={lady}
                name="Background Remove 3"
                desc="The descriptipn of the API in quick brief and we will truncate it here..."
              />
            </div>

            <div>
              <Card
                img={lady}
                name="Background Remove 4"
                desc="The descriptipn of the API in quick brief and we will truncate it here..."
              />
            </div>

            <div>
              <Card
                img={lady}
                name="Background Remove 5"
                desc="The descriptipn of the API in quick brief and we will truncate it here..."
              />
            </div>
          </div>

        </main>

  )
}


