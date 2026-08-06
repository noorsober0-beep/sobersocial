export default function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-cream py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 px-6 text-sm text-espresso/80 sm:px-8 sm:flex-row sm:items-center sm:justify-between">
        <p>
          <a
            href="https://instagram.com/sobersocial.in"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-terracotta"
          >
            @sobersocial.in
          </a>
        </p>
        <p>Contact · hello@sobersocial.in</p>
        <p className="text-espresso">Your Kind of Social</p>
      </div>
    </footer>
  );
}
