import {createFileRoute} from '@tanstack/react-router';
import {LegalPage} from '@/components/fiume/legal-page';
import {pageHead} from '@/data/fiume';
export const Route=createFileRoute('/pravila-privatnosti')({head:()=>pageHead('Pravila privatnosti','Pravila privatnosti — Taxi Fiume, FIUME d.o.o. Službene informacije o uslugama, korisničkim pravima i zaštiti podataka.'),component:()=> <LegalPage slug="pravila-privatnosti" title="Pravila privatnosti"/>});
