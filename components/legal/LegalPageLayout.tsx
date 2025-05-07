interface LegalPageLayoutProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="container py-16 max-w-4xl">
      <div className="bg-background rounded-lg shadow-sm border p-8">
        <h1 className="text-3xl font-bold mb-2">{title}</h1>
        
        {lastUpdated && (
          <p className="text-muted-foreground text-sm mb-8">
            Last Updated: {lastUpdated}
          </p>
        )}
        
        <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
}