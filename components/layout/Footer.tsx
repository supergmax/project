import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl">W</span>
              <span className="font-semibold">TradingChallenge</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-md">
              Our trading challenge platform offers you the opportunity to prove your trading skills, get funded, and start your trading career.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Account</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/login" className="text-muted-foreground hover:text-foreground transition">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground transition">
                  Register
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#process" className="text-muted-foreground hover:text-foreground transition">
                  How It Works
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/disclosure" className="text-muted-foreground hover:text-foreground transition">
                  Disclosure
                </Link>
              </li>
              <li>
                <Link href="/general-risk-warning" className="text-muted-foreground hover:text-foreground transition">
                  General Risk Warning
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-muted-foreground hover:text-foreground transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} TradingChallenge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}