export async function getStoreCurrency(): Promise<string> {
  const url = 'http://wp-headless-test.local/wp-json/edd/v1/settings';
  
  const res = await fetch(url, { cache: 'no-store' });

  if (!res.ok) {
    throw new Error(`Failed to fetch store settings: ${res.statusText}`);
  }

  const data = await res.json();

  const currency = data?.currency;

  if (!currency || typeof currency !== 'string') {
    throw new Error('Invalid currency data');
  }

  return currency;
}