'use client';

import { useState, useEffect } from 'react';

const USE_CASES = ['marketing', 'trading', 'sales', 'research'];

export default function Home() {
  const [currentUseCase, setCurrentUseCase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentUseCase((prev) => (prev + 1) % USE_CASES.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50 backdrop-blur-sm bg-slate-900/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            Ask<span className="text-cyan-400">Elira</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <a href="#framework" className="text-slate-300 hover:text-white transition">Framework</a>
            <a href="#examples" className="text-slate-300 hover:text-white transition">Examples</a>
            <a href="https://github.com/jellyforex/askelira" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition">
              GitHub
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Value Prop */}
        <div>
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
            Build swarm intelligence for{' '}
            <span className="block h-16 overflow-hidden">
              <span
                className="inline-block transition-transform duration-500 ease-in-out"
                style={{ transform: `translateY(-${currentUseCase * 4}rem)` }}
              >
                {USE_CASES.map((useCase) => (
                  <span key={useCase} className="block h-16 text-cyan-400">
                    {useCase}
                  </span>
                ))}
              </span>
            </span>
          </h1>

          <p className="text-xl text-slate-300 mb-8">
            Multi-agent orchestration platform with swarm intelligence validation.
          </p>

          <div className="flex gap-4 mb-8">
            <a
              href="#framework"
              className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition"
            >
              Get Started
            </a>
            <a
              href="#examples"
              className="px-6 py-3 border border-slate-600 hover:border-slate-500 text-white rounded-lg font-semibold transition"
            >
              See Examples
            </a>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-700">
            <div>
              <div className="text-2xl font-bold text-white">65%</div>
              <div className="text-sm text-slate-400">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">$0.02</div>
              <div className="text-sm text-slate-400">Per Campaign</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">200+</div>
              <div className="text-sm text-slate-400">Predictions</div>
            </div>
          </div>
        </div>

        {/* Right: Code Example */}
        <div className="bg-slate-950 rounded-xl p-6 border border-slate-800 shadow-2xl">
          <div className="flex gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <pre className="text-sm text-slate-300 font-mono overflow-x-auto">
            <code>{`pip install askelira

from askelira import Orchestrator

# Run your swarm
orchestrator = Orchestrator()
result = orchestrator.predict(
    "Will NQ go up today?"
)

print(result.bias)       # BULLISH
print(result.confidence) # 72%`}</code>
          </pre>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="bg-slate-950/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            The Framework
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Generic multi-agent orchestration. Not just trading. Not just marketing. <strong className="text-white">Build anything.</strong>
          </p>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
              <div className="text-cyan-400 text-2xl mb-3">🔍</div>
              <h3 className="text-lg font-semibold text-white mb-2">Research Agent</h3>
              <p className="text-sm text-slate-400">Gathers context, scrapes data, builds knowledge base</p>
            </div>

            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
              <div className="text-cyan-400 text-2xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Swarm Simulation</h3>
              <p className="text-sm text-slate-400">1000+ AI agents debate, vote, reach consensus</p>
            </div>

            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
              <div className="text-cyan-400 text-2xl mb-3">✅</div>
              <h3 className="text-lg font-semibold text-white mb-2">Audit Agent</h3>
              <p className="text-sm text-slate-400">Validates output, checks quality, flags risks</p>
            </div>

            <div className="bg-slate-900 rounded-lg p-6 border border-slate-800">
              <div className="text-cyan-400 text-2xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold text-white mb-2">Execute Agent</h3>
              <p className="text-sm text-slate-400">Takes action, logs results, learns from outcomes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="examples" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-4 text-center">
            Built with AskElira
          </h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            Real projects using the framework. Fork them. Adapt them. Ship yours.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Trading Example */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">📈</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AskElira Trader</h3>
                  <p className="text-slate-400 mb-4">
                    Autonomous NQ futures trading. 65% accuracy on 200+ predictions.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 rounded-lg p-4 mb-4 font-mono text-sm text-slate-300">
                <div className="text-green-400">✓ 65% prediction accuracy</div>
                <div className="text-green-400">✓ $0.015 per prediction</div>
                <div className="text-green-400">✓ 2.7× profit factor</div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/jellyforex/AskEliraTrader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-center transition text-sm"
                >
                  View Code
                </a>
                <a
                  href="https://github.com/jellyforex/AskEliraTrader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition text-sm"
                >
                  Fork →
                </a>
              </div>
            </div>

            {/* Marketing Example */}
            <div className="bg-slate-900 rounded-xl p-8 border border-slate-800">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-3xl">🚀</div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">AskElira Marketing</h3>
                  <p className="text-slate-400 mb-4">
                    Viral marketing automation. AI-validated tactics, $0.02/campaign.
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 rounded-lg p-4 mb-4 font-mono text-sm text-slate-300">
                <div className="text-green-400">✓ 82% confidence on tactics</div>
                <div className="text-green-400">✓ $0.02 per campaign</div>
                <div className="text-green-400">✓ Multi-platform content</div>
              </div>

              <div className="flex gap-3">
                <a
                  href="https://github.com/jellyforex/askeliramarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-center transition text-sm"
                >
                  View Code
                </a>
                <a
                  href="https://github.com/jellyforex/askeliramarketing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-slate-700 hover:border-slate-600 text-white rounded-lg transition text-sm"
                >
                  Fork →
                </a>
              </div>
            </div>
          </div>

          {/* Build Your Own CTA */}
          <div className="mt-12 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-xl p-8 border border-cyan-800/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Build Your Own
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              The framework is domain-agnostic. Sales automation. Research pipelines. Customer support. Whatever you need.
            </p>
            <a
              href="https://github.com/jellyforex/askelira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition"
            >
              Get Started →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-12 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 text-center text-slate-400 text-sm">
          <p className="mb-4">
            Built with AskElira Marketing • Validated by 1000-agent swarm (78% confidence)
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/jellyforex/askelira" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              GitHub
            </a>
            <a href="https://github.com/jellyforex/askelira" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              Documentation
            </a>
            <a href="https://github.com/jellyforex" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
              @jellyforex
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
