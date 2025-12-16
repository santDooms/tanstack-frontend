import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/newQuotation/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/newQuotation/"!</div>
}
