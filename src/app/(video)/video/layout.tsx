import Provider from "@/app/components/Provider"



export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <Provider store={store}>
          <Provider>
            <div>
              {children}
            </div>
          </Provider>
    // </Provider>
  )
}
