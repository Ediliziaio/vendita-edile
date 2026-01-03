import { useEffect } from 'react';

export function LeadConnectorForm() {
  useEffect(() => {
    // Verifica se lo script è già caricato
    const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
    if (existingScript) return;

    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Non rimuoviamo lo script per evitare problemi con re-render
    };
  }, []);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <iframe
        src="https://api.leadconnectorhq.com/widget/form/54Xb37as0q5feYgkP9LW"
        style={{ width: '100%', height: '593px', border: 'none' }}
        id="inline-54Xb37as0q5feYgkP9LW"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Marketing Edile - Form"
        data-height="593"
        data-layout-iframe-id="inline-54Xb37as0q5feYgkP9LW"
        data-form-id="54Xb37as0q5feYgkP9LW"
        title="Marketing Edile - Form"
      />
    </div>
  );
}
