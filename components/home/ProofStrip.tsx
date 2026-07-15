import { LiveCounter } from '@/components/proof/LiveCounter';

export function ProofStrip() {
  return (
    <section className="border-y border-aubergine/6 bg-ivory py-10">
      <div className="container-content">
        <LiveCounter />
      </div>
    </section>
  );
}
