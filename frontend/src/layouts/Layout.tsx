import Header from "../components/shared/Header"

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout