import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mt-3 p-1.5 rounded-lg bg-primary-100 mr-3 text-sm font-semibold text-primary-500 hover:text-primary-600 dark:bg-gray-800 dark:hover:text-primary-400">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
