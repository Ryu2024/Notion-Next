import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'
import Link from 'next/link'
/**
 * 文章详情的元信息
 * 标题、作者、分类、标签、创建日期等等。
 */
export const PostMeta = props => {
  const { post } = props
  const { locale } = useGlobal()

  return (
    <section className='flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8'>
      <div>

      </div>
    </section>
  )
}
