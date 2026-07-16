import { Section } from '@/components/design-system/Section';
import { PersonalBio } from '@/components/proof/PersonalBio';

export function MeetNjock() {
  return (
    <Section background="cream">
      <div className="mx-auto max-w-content">
        <PersonalBio photoSrc="/njock-portrait.webp" />
      </div>
    </Section>
  );
}
