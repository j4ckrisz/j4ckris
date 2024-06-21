interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  
  {
    title: 'Password Generator Website',
    description: 'Is a website where you can create a custom password based on your needs. The website is created with HTML, CSS and JavaScript',
    href: 'https://p4sswdg3n.netlify.app',
    imgSrc: '/static/images/p4sswdg3n.png',
  },

  {
    title: 'Wi-Fi Penetration Testing Tool',
    description: "WiSec is tool that allows yo to do most of the WPA2-PSK and WEP encryption attacks. The tool let's you crack previous files that you have captured using crunch or a wordlist.",
    href: 'https://github.com/j4ckrisz/wisec',
    imgSrc: '/static/images/wisec_photo_bash.png',
  },

  {
    title: 'Arduino Projects Repository',
    description: "This repository have all the arduino projects that I created in my occupational class (Pre-Engineering with concentration in electronics)",
    href: 'https://github.com/j4ckrisz/Arduino_Projects',
    imgSrc: '',
  }


]

export default projectsData
