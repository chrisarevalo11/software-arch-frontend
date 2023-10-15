import Title from '@/components/Title'
import GetOrder from '@/components/GetOrder'
import Ingredients from '@/components/Ingredients'
import ShoppingHistory from '@/components/ShoppingHistory'
import Orders from '@/components/Orders'

export default function Home(): React.ReactNode {
  return (
    <main className="flex items-center justify-center w-full min-h-screen max-h-screen bg-hero bg-cover">

      <div className="flex flex-col items-center justify-center h-screen ps-5 pe-5 gap-3 w-[90%] max-w-6xl">
        <section className='flex justify-evenly items-center w-full flex-grow-[2]'>
          <Title />
          <GetOrder />
        </section>
        <section className='w-full grid grid-cols-3 gap-4 flex-grow-[7] max-h-[65%] relative'>
          <Ingredients />
          <ShoppingHistory />
          <Orders />
        </section>
      </div>

    </main>
  )
}
