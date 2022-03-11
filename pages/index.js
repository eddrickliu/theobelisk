import * as React from 'react';
import Welcome from '../src/components/welcome'
import NavBar from '../src/components/navBar'

const pages = [{text: 'Story', link: "/story"}, {text: 'Trade', link: "/trade"}, {text: 'FAQ', link: "/faq"}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function HomePage() {
    return (
      <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome/>
      </div>
    </div>
    )
}

export default HomePage