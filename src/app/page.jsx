import Link from "next/link"

const HomePage = () => {
  return (
    <section>
      <div className='p-4 flex flex-col justify-center items-center px-10'>
        <div>
          <h1 className='text-3xl font-semibold text-center'>Graphio</h1>
          <h1 className='text-xl font-semibold text-center mb-4 text-white/50'>Crafting Digital Experiences</h1>
          <p>From concept to code, we transform your vision into engaging, responsive, and powerful web solutions.</p>
        </div>

        <section className="mt-4 flex">
          <Link href={'/pages/about'} className="bg-white text-black border p-2 px-4 rounded-full">About</Link>
        </section>

        <figure className='mt-4'>
          <img src="/images/hero-image.webp" alt="hero-image.webp" width={500} height={500}
            className='rounded-2xl' />
        </figure>
      </div>
    </section>
  )
}

export default HomePage