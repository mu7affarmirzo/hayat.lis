import { Provider as ModalProvider } from '@ebay/nice-modal-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import '@/shared/base.css'
import { ThemeProvider } from '@/entities/theme/lib/ThemeProvider'
import { appRouter } from './appRouter'
import { persistedStore, appStore } from './appStore'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'
import '@fontsource/inter/800.css'
import '@fontsource/inter/300.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('root')!

// async function initApp() {
// Move @mswjs worker to lazy import
// const module = await import('@/app/apiMockWorker')
// await module.startApiMockWorker()
// }

// initApp().then(() => {
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ModalProvider>
      <ReduxProvider store={appStore}>
        <ThemeProvider>
          <PersistGate loading={null} persistor={persistedStore}>
            <RouterProvider router={appRouter()} />
          </PersistGate>
        </ThemeProvider>
      </ReduxProvider>
    </ModalProvider>
  </React.StrictMode>
)
// })
