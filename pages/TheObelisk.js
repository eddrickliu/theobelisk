import * as React from 'react';
import Image from 'next/image'
import backgroundPic from '../public/obelisk.jpeg'
import TopBar from '../components/topBar'

const pages = [{text: 'Story', link: "/story"}, {text: 'Trade', link: "/trade"}, {text: 'FAQ', link: "/faq"}];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TheObelisk() {
    return (<div>
      <TopBar />
      <Image
        src={backgroundPic}
        width={1500}
        height={1500}
      />
    </div>
    )
}

export default TheObelisk