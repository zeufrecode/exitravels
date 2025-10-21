// app/api/airports/route.ts
import { NextRequest } from 'next/server';

const AMADEUS_TOKEN_URL = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const AMADEUS_LOCATIONS_URL = 'https://test.api.amadeus.com/v1/reference-data/locations';

async function getAccessToken() {
  const response = await fetch(AMADEUS_TOKEN_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: process.env.AMADEUS_CLIENT_ID!,
      client_secret: process.env.AMADEUS_CLIENT_SECRET!,
    }),
  });

  const data = await response.json();
  return data.access_token;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const keyword = searchParams.get('q')?.trim();

    if (!keyword || keyword.length < 2) {
      return Response.json([]);
    }

    const accessToken = await getAccessToken();

    const params = new URLSearchParams({
      keyword,
      subType: 'AIRPORT',
      page: '1',
      size: '8',
    });

    const res = await fetch(`${AMADEUS_LOCATIONS_URL}?${params}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();

    // Transformer le format Amadeus → format simple
    const airports = (data.data || []).map((item: any) => ({
      code: item.iataCode,
      name: item.name,
      city: item.address?.cityName || item.name,
      country: item.address?.countryName || '',
    }));

    return Response.json(airports);
  } catch (error) {
    console.error('Erreur API aéroports:', error);
    return Response.json([]);
  }
}