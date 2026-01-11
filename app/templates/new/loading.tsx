export default function NewTemplateLoading() {
  return (
    <div className="max-w-6xl mx-auto space-y-16 py-8 px-6">
      <div className="space-y-4">
        <div className="h-10 bg-muted rounded w-80"></div>
        <div className="h-6 bg-muted rounded w-96"></div>
      </div>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div className="h-10 bg-muted rounded-full w-40"></div>
          <div className="flex items-center gap-3">
            <div className="h-10 bg-muted rounded-full w-24"></div>
            <div className="h-10 bg-muted rounded-full w-32"></div>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1 space-y-6">
            <div className="border border-border rounded-lg p-6">
              <div className="h-6 bg-muted rounded w-32 mb-4"></div>
              <div className="h-4 bg-muted rounded w-48 mb-6"></div>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-24"></div>
                  <div className="h-10 bg-muted rounded w-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-20 bg-muted rounded w-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-16"></div>
                  <div className="h-10 bg-muted rounded w-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-20"></div>
                  <div className="h-16 bg-muted rounded-lg w-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="border border-border rounded-lg p-6">
              <div className="h-6 bg-muted rounded w-32 mb-4"></div>
              <div className="h-4 bg-muted rounded w-64 mb-6"></div>
              <div className="h-96 bg-muted rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
