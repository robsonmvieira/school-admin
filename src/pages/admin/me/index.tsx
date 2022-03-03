import Container from '../../container'
import ProfileCardList from './profileCardList'
import Image from 'next/image'
import { AiOutlineMail } from 'react-icons/ai'
import { ImProfile } from 'react-icons/im'
import { GoLocation } from 'react-icons/go'

import { initializeApollo } from '../../../utils/apollo'
import { useAdmin } from '../../../contexts/useAdmin'
import { useEffect } from 'react'
import { QUERY_FIND_CATEGORIES } from '../../../graphql/queries/admin/categories'
import { loadCategories } from '../../../graphql/generated/loadCategories'

export type MeProps = {
  categories: any[]
}

const Me = ({ categories }: MeProps) => {
  const { addCategory } = useAdmin()
  useEffect(() => {
    categories.map((category: any) => addCategory(category))
  }, [categories])
  return (
    <>
      <Container>
        <div className="flex flex-col ml-8 w-full mr-12 gap-y-16">
          <ProfileCardList />
          <div className="w-full bg-gray-900 p-6 rounded-lg flex">
            <div className="w-16 h-16 mr-6">
              <Image
                className="rounded-lg"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                src="https://images.unsplash.com/photo-1562093772-c36f2d77edc3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="userAvatar"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-gray-300">
                <div>
                  <span className="font-semibold font-sans text-lg">
                    Joe Doe
                  </span>
                </div>
                <div className="grid grid-cols-3 ">
                  <div className="flex items-center mr-4">
                    <AiOutlineMail />
                    <span className="ml-2"> joeDoe@mydreams.com</span>
                  </div>

                  <div className="flex items-center border-l-2 border-gray-700">
                    <ImProfile className="ml-2" />
                    <span className="ml-2">Auxiliar Adminstrativo</span>
                  </div>

                  <div className="flex items-center  border-l-2 border-gray-700">
                    <GoLocation className="ml-2" />
                    <span className="ml-2">Grajau</span>
                  </div>
                </div>
                <div className="text-sm mt-4">
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere dignissimos ut qui nemo. Quisquam blanditiis, ullam
                    rerum sit neque quasi.
                  </span>
                </div>
              </div>

              <div>
                <span className="text-white">Perfil</span>
              </div>
            </div>
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

export default Me
