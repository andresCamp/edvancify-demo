import Provider from "@/app/components/Provider"



export default function VideoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <Provider store={store}>
      <html lang="en">
          <Provider>
            <div>
              {children}
            </div>
          </Provider>
      </html>
    // </Provider>
  )
}
