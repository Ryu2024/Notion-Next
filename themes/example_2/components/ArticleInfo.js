import Link from 'next/link'
import { useGlobal } from '@/lib/global'
import { formatDateFmt } from '@/lib/utils/formatDate'

export const ArticleInfo = (props) => {
  const { post } = props

  const { locale } = useGlobal()

  return (
	  <section className="flex-wrap flex mt-2 text-gray-400 dark:text-gray-400 font-light leading-8">
		<div>
		</div>
	  </section>	  
  )
}
