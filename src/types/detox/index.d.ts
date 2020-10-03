declare global {
  namespace Detox {
    interface Expect<R> {
      not: Expect<Promise<void>>
    }
  }
}

declare const detoxExport: Detox.DetoxExport
export = detoxExport
