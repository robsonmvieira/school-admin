import { useEffect } from 'react'
import { MdAdd } from 'react-icons/md'
import { useAdmin } from '../../../contexts/useAdmin'
import { loadCategories } from '../../../graphql/generated/loadCategories'
import { QUERY_FIND_CATEGORIES } from '../../../graphql/queries/admin/categories'
import { initializeApollo } from '../../../utils/apollo'
import Container from '../../container'
import CategoryCardList from './categoryCardList'
import CategoryTable from './categoryTable'

export type MeProps = {
  categories: any[]
}

const Index = ({ categories }: MeProps) => {
  const { addCategory, editCategory, deleteCategory, moreDetailCategory } =
    useAdmin()
  useEffect(() => {
    categories.map((category: any) => addCategory(category))
  }, [categories])

  return (
    <>
      <Container>
        <div className="flex flex-col ml-8 w-full mr-12 gap-y-16">
          <CategoryCardList />
          <div>
            <div className="flex justify-end mb-4 cursor-pointer">
              <button>
                <span className="flex justify-center p-3.5 rounded-lg font-medium capitalize text-green-400 bg-green-400/20 hover:bg-green-400/30  hover:text-green-500">
                  <MdAdd className="mr-2" size={24} />
                  Add Category
                </span>
              </button>
            </div>
            <CategoryTable
              list={categories}
              onMoreDetailHandler={(id: string) => moreDetailCategory(id)}
              onEditHandler={(id: string) => editCategory(id)}
              onDeleteHandler={(id: string) => deleteCategory(id)}
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const apollo = initializeApollo()
  const { data } = await apollo.query<loadCategories>({
    query: QUERY_FIND_CATEGORIES
  })
  return {
    props: {
      revalidate: 60,
      categories: data.findAllCategories,
      initialApolloState: apollo.cache.extract()
    }
  }
}

export default Index
