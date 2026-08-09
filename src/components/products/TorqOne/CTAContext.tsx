'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'demo' | 'sales' | null;

interface CTAContextValue {
  openDemo: () => void;
  openSales: () => void;
  close: () => void;
  activeModal: ModalType;
}

const CTAContext = createContext<CTAContextValue>({
  openDemo: () => {},
  openSales: () => {},
  close: () => {},
  activeModal: null,
});

export function CTAProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  return (
    <CTAContext.Provider
      value={{
        openDemo:  () => setActiveModal('demo'),
        openSales: () => setActiveModal('sales'),
        close:     () => setActiveModal(null),
        activeModal,
      }}
    >
      {children}
    </CTAContext.Provider>
  );
}

export function useCTA() {
  return useContext(CTAContext);
}
