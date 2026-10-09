import { AppShell } from '@/components/app-shell';
import Providers from '@/components/providers';

// Add a link here for each new page you build.
const NAV = [{ href: '/', label: 'Home' }];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <AppShell appName="My App" nav={NAV}>
        {children}
      </AppShell>
    </Providers>
  );
}
