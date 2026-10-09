import {createFileRoute} from '@tanstack/react-router';
import {LegalPage} from '@/components/fiume/legal-page';
import {pageHead} from '@/data/fiume';
export const Route=createFileRoute('/uvjeti-koristenja')({head:()=>pageHead('Uvjeti korištenja','Uvjeti korištenja — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.'),component:()=> <LegalPage slug="uvjeti-koristenja" title="Uvjeti korištenja"/>});
