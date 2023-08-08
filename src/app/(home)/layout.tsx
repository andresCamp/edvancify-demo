import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Provider from "../components/Provider"


export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <Provider store={store}>
          <Provider>
            <Header/>
            <div>
              {children}
            </div>
            <Navbar/>
          </Provider>
    // </Provider>
  )
}
