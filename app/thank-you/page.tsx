// import Link from 'next/link';
// import { getVirusesInsecure } from '../../database/viruses';

export const metadata = {
  title: 'Thank you!',
  description: 'All your favorites in one place!',
};

export default function ThankYouPage() {
  return (
    <div className="subGrid">
      <div className="inside">
        <h1>Thank You for your purchase!</h1>
      </div>
    </div>
  );
}
