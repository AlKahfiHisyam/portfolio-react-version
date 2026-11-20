import { Plane } from 'lucide-react';
import { WhatsAppIcon } from './BrandIcons';

// A WhatsApp link printed as a ticket: the message on the main part, a plane on the tear-off stub.
// Styles live in App.css (.ticket) because the hero, the counters, contact and the floating button share them.
export const TicketLink = ({ href, tone = 'wa', size, className = '', children, ...rest }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`ticket ticket-${tone} ${size ? `ticket-${size}` : ''} ${className}`}
    {...rest}
  >
    <span className="ticket-paper">
      <span className="ticket-main">
        <WhatsAppIcon />
        {children}
      </span>
      <span className="ticket-stub" aria-hidden="true">
        <Plane />
      </span>
    </span>
  </a>
);
