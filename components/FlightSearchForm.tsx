'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type RawAirport = {
  icao: string;
  iata: string;
  name: string;
  city: string;
  state: string;
  country: string;
  lat: number;
  lon: number;
};

type ValidAirport = {
  code: string;
  name: string;
  city: string;
  state: string;
  country: string;
};

const FlightSearchForm = () => {
  const [allAirports, setAllAirports] = useState<ValidAirport[]>([]);
  const [loadingAirports, setLoadingAirports] = useState(true);
  const [tripType, setTripType] = useState<'round' | 'oneWay' | 'multi'>('round');
  const [departureInput, setDepartureInput] = useState('');
  const [destinationInput, setDestinationInput] = useState('');
  const [departureIata, setDepartureIata] = useState('');
  const [destinationIata, setDestinationIata] = useState('');
  const [showDepartureSuggestions, setShowDepartureSuggestions] = useState(false);
  const [showDestinationSuggestions, setShowDestinationSuggestions] = useState(false);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);
  const [returnDate, setReturnDate] = useState<Date | null>(null);
  const [showTripMenu, setShowTripMenu] = useState(false);
  const [showTravelers, setShowTravelers] = useState(false);
  const [cabinClass, setCabinClass] = useState<'economy' | 'premium'>('economy');
  const [travelers, setTravelers] = useState({
    adultes: 1,
    étudiants: 0,
    seniors: 0,
    jeunes: 0,
    enfants: 0,
    bébé: 0,
    infants: 0,
  });

  const formRef = useRef<HTMLDivElement>(null);

  // 🔹 Charger la liste des aéroports depuis public/airports.json
  useEffect(() => {
    const loadAirports = async () => {
      try {
        const res = await fetch('/airports.json');
        const rawAirports: Record<string, RawAirport> = await res.json();
        const validList: ValidAirport[] = Object.values(rawAirports)
          .filter(a => a.iata.trim() !== '')
          .map(a => ({
            code: a.iata,
            name: a.name,
            city: a.city,
            state: a.state,
            country: a.country,
          }));
        setAllAirports(validList);
      } catch (err) {
        console.error('❌ Erreur de chargement airports.json:', err);
      } finally {
        setLoadingAirports(false);
      }
    };
    loadAirports();
  }, []);

  // 🔹 Suggestions aéroports (s'affichent dès la 1re lettre)
  const searchAirports = (query: string) => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return allAirports
      .filter(
        a =>
          a.city.toLowerCase().includes(q) ||
          a.name.toLowerCase().includes(q) ||
          a.country.toLowerCase().includes(q) ||
          a.code.toLowerCase().includes(q)
      )
      .slice(0, 8);
  };

  const departureSuggestions = useMemo(() => searchAirports(departureInput), [departureInput, allAirports]);
  const destinationSuggestions = useMemo(() => searchAirports(destinationInput), [destinationInput, allAirports]);

  const handleSelectDeparture = (airport: ValidAirport) => {
    setDepartureInput(`${airport.city} (${airport.code})`);
    setDepartureIata(airport.code);
    setShowDepartureSuggestions(false);
  };

  const handleSelectDestination = (airport: ValidAirport) => {
    setDestinationInput(`${airport.city} (${airport.code})`);
    setDestinationIata(airport.code);
    setShowDestinationSuggestions(false);
  };

  // 🔹 Fermeture des menus quand on clique à l’extérieur
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(e.target as Node)) {
        setShowDepartureSuggestions(false);
        setShowDestinationSuggestions(false);
        setShowTripMenu(false);
        setShowTravelers(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const incrementTraveler = (cat: keyof typeof travelers) =>
    setTravelers(prev => ({ ...prev, [cat]: prev[cat] + 1 }));

  const decrementTraveler = (cat: keyof typeof travelers) =>
    setTravelers(prev => ({ ...prev, [cat]: Math.max(0, prev[cat] - 1) }));

  const totalTravelers = Object.values(travelers).reduce((s, v) => s + v, 0);
  const travelersLabel = `${totalTravelers} voyageur${totalTravelers > 1 ? 's' : ''}, ${
    cabinClass === 'economy' ? 'Éco' : 'Premium'
  }`;

  // 🔹 Soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, on supprime la vérification et l'alerte
    console.log(`Recherche lancée : ${departureInput} → ${destinationInput}`);
    // Tu peux lancer ta logique de recherche ici
  };

  return (
    <div
      ref={formRef}
      className="relative z-30 backdrop-blur-xl bg-white/90 border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-10 max-w-7xl mx-auto -mt-16"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
        Trouvez votre vol idéal ✈️
      </h1>

      {/* Layout ajusté : plus de colonnes pour contrôler les spans */}
<form
  onSubmit={handleSubmit}
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-12 gap-4 md:gap-5 items-center"
>
  {/* Type de voyage */}
  <div className="md:col-span-1 xl:col-span-2">
    <button
      type="button"
      onClick={() => setShowTripMenu(!showTripMenu)}
      className="w-full px-5 py-4 text-base font-medium bg-gray-50 border border-gray-300 rounded-2xl hover:bg-gray-100 transition-colors"
    >
      {tripType === 'round'
        ? 'Aller-retour'
        : tripType === 'oneWay'
        ? 'Aller simple'
        : 'Multiville'}
    </button>
    {showTripMenu && (
      <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-xl shadow-lg mt-1 text-sm overflow-hidden">
        {(['round', 'oneWay', 'multi'] as const).map(type => (
          <li
            key={type}
            onClick={() => {
              setTripType(type);
              setShowTripMenu(false);
            }}
            className="px-4 py-3 hover:bg-orange-50 cursor-pointer transition-colors"
          >
            {type === 'round'
              ? 'Aller-retour'
              : type === 'oneWay'
              ? 'Aller simple'
              : 'Multiville'}
          </li>
        ))}
      </ul>
    )}
  </div>

  {/* Champ Départ */}
  <div className="relative md:col-span-1 xl:col-span-2">
    <input
      type="text"
      value={departureInput}
      onChange={e => setDepartureInput(e.target.value)}
      onFocus={() => setShowDepartureSuggestions(true)}
      placeholder="Ville ou aéroport de départ"
      className="w-full px-5 py-5 text-base rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff781d]"
    />
    {showDepartureSuggestions && (
      <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto mt-1 text-sm">
        {departureSuggestions.length > 0 ? (
          departureSuggestions.map(a => (
            <li
              key={a.code}
              onClick={() => handleSelectDeparture(a)}
              className="p-3 hover:bg-orange-50 cursor-pointer transition-colors"
            >
              <span className="font-medium">
                {a.city} ({a.code})
              </span>{' '}
              – <span className="text-gray-600 text-xs">{a.country}</span>
            </li>
          ))
        ) : (
          <li className="p-3 text-gray-500">Aucun résultat</li>
        )}
      </ul>
    )}
  </div>

  {/* Champ Destination */}
  <div className="relative md:col-span-1 xl:col-span-2">
    <input
      type="text"
      value={destinationInput}
      onChange={e => setDestinationInput(e.target.value)}
      onFocus={() => setShowDestinationSuggestions(true)}
      placeholder="Ville ou aéroport d’arrivée"
      className="w-full px-5 py-5 text-base rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff781d]"
    />
    {showDestinationSuggestions && (
      <ul className="absolute z-20 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto mt-1 text-sm">
        {destinationSuggestions.length > 0 ? (
          destinationSuggestions.map(a => (
            <li
              key={a.code}
              onClick={() => handleSelectDestination(a)}
              className="p-3 hover:bg-orange-50 cursor-pointer transition-colors"
            >
              <span className="font-medium">
                {a.city} ({a.code})
              </span>{' '}
              – <span className="text-gray-600 text-xs">{a.country}</span>
            </li>
          ))
        ) : (
          <li className="p-3 text-gray-500">Aucun résultat</li>
        )}
      </ul>
    )}
  </div>

{/* Champs Date — uniformisés avec les autres inputs */}
<div className="flex gap-3 md:col-span-2 xl:col-span-4">
  {tripType === 'oneWay' ? (
    <input
      type="date"
      value={departureDate ? departureDate.toISOString().split('T')[0] : ''}
      onChange={(e) => {
        const date = e.target.value ? new Date(e.target.value) : null;
        setDepartureDate(date);
      }}
      min={new Date().toISOString().split('T')[0]}
      className="w-full px-5 py-5 text-base rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff781d]"
    />
  ) : (
    <>
      <input
        type="date"
        value={departureDate ? departureDate.toISOString().split('T')[0] : ''}
        onChange={(e) => {
          const date = e.target.value ? new Date(e.target.value) : null;
          setDepartureDate(date);
        }}
        min={new Date().toISOString().split('T')[0]}
        className="w-1/2 px-5 py-5 text-base rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff781d]"
      />
      <input
        type="date"
        value={returnDate ? returnDate.toISOString().split('T')[0] : ''}
        onChange={(e) => {
          const date = e.target.value ? new Date(e.target.value) : null;
          setReturnDate(date);
        }}
        min={departureDate ? departureDate.toISOString().split('T')[0] : new Date().toISOString().split('T')[0]}
        className="w-1/2 px-5 py-5 text-base rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff781d]"
      />
    </>
  )}
</div>

{/* Voyageurs + classe */}
{/* Voyageurs + classe */}
<div className="relative md:col-span-1 xl:col-span-2">
  <button
    type="button"
    onClick={() => setShowTravelers(!showTravelers)}
    className="w-full max-w-full px-5 py-5 text-lg rounded-2xl bg-gray-50 border border-gray-300 hover:bg-gray-100 transition-colors truncate overflow-hidden whitespace-nowrap"
  >
    {travelersLabel}
  </button>
  {showTravelers && (
    <div className="absolute right-0 z-20 w-80 bg-white border border-gray-200 rounded-[2.5rem] shadow-lg p-4 mt-1">
      {Object.entries(travelers).map(([k, v]) => (
        <div key={k} className="flex items-center justify-between mb-3">
          <span className="text-sm capitalize text-gray-800">{k}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => decrementTraveler(k as any)}
              disabled={v === 0}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50"
            >
              –
            </button>
            <span className="w-6 text-center">{v}</span>
            <button
              onClick={() => incrementTraveler(k as any)}
              className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-md hover:bg-gray-200"
            >
              +
            </button>
          </div>
        </div>
      ))}

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => {
            setCabinClass('economy');
            setShowTravelers(false);
          }}
          className={`flex-1 py-2 rounded-full ${
            cabinClass === 'economy'
              ? 'bg-gradient-to-r from-[#ff781d] to-orange-600 text-white shadow'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Éco
        </button>
        <button
          onClick={() => {
            setCabinClass('premium');
            setShowTravelers(false);
          }}
          className={`flex-1 py-2 rounded-full ${
            cabinClass === 'premium'
              ? 'bg-gradient-to-r from-[#ff781d] to-orange-600 text-white shadow'
              : 'bg-gray-100 text-gray-700'
          }`}
        >
          Premium
        </button>
      </div>
    </div>
  )}
</div>

  {/* Bouton Rechercher — sur sa propre ligne */}
  {/* Bouton Rechercher — centré */}
<div className="col-span-full pt-4 md:pt-0 flex justify-center">
  <button
    type="submit"
    className="w-full max-w-xs md:w-auto bg-gradient-to-r from-[#ff781d] to-orange-600 text-white font-bold py-5 px-8 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform"
  >
    Rechercher ✈️
  </button>
</div>
</form>

      <p className="mt-8 text-center text-gray-600 text-sm">
        Propulsé par <span className="font-bold text-[#ff781d]">Exitravel</span>
      </p>
    </div>
  );
};

export default FlightSearchForm;
