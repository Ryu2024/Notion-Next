import NotionIcon from '@/components/NotionIcon'
import { siteConfig } from '@/lib/config'

/**
 * 标题栏
 * @param {*} props
 * @returns
 */
export const Title = (props) => {
  const { post } = props
  const title = post?.title || siteConfig('TITLE')
  const description = post?.description || siteConfig('AUTHOR')
  return <div className="text-center px-6 py-3 mb-3 bg-gray-100 dark:bg-hexo-black-gray dark:border-hexo-black-gray border-b">
        <h1 className="text-xm md:text-2xl"><NotionIcon icon={post?.pageIcon} />{title}</h1>
        {/*<p className="leading-loose text-gray-dark">
            {description}
        </p>*/}
    </div>
}
