import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

const ReactQueryProvider = ({
  children,
  dehydratedState,
}: {
  children: React.ReactNode
  dehydratedState: unknown
}) => {
  queryClient.setDefaultOptions({
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry(failureCount) {
        if (failureCount > 1) {
          return false
        }
        return true
      },
      keepPreviousData: true,
    },
    mutations: {
      retry: false,
    },
  })
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
