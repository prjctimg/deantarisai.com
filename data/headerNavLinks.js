import { Info, PenTool, Code, Wind } from 'react-feather'

const headerNavLinks = [
  { href: '/blog', title: 'Blog', icon: <PenTool className='inline m-4 text-gray-600' /> },

  { href: '/projects', icon: <Code className='inline m-4 text-gray-600' />, title: 'Projects' },

  { href: '/tags', icon: <Wind className='inline m-4 text-gray-600' />, title: 'hisMind' }, { href: '/about', icon: <Info className='inline m-4 text-gray-600' />, title: 'About' }
]

export default headerNavLinks
