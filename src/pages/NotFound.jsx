import { Button } from '../components/ui.jsx'

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center">
      <div className="container-x text-center">
        <span className="display text-[6rem] font-light leading-none text-brass-2 sm:text-[9rem]">404</span>
        <h1 className="display mt-4 text-3xl sm:text-4xl">This page has been moved or removed.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you're looking for doesn't exist. Let's get you back to beautiful floors.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/" variant="primary">Back to home</Button>
        </div>
      </div>
    </section>
  )
}
