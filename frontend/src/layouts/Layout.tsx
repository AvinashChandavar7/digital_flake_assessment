import Header from "../components/shared/Header"
import LeftSidebar from "../components/shared/LeftSidebar"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main>
      <Header />

      <div className='flex'>
        <LeftSidebar />

        <section className="flex-1 w-full min-h-full pt-24 sm:px-5">
          {children}
        </section>

      </div>

    </main >
  )
}

export default Layout