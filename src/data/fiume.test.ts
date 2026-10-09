import {describe,it,expect} from 'vitest';
import {rates,contact} from './fiume';
describe('Original Taxi Fiume service details',()=>{
 it('retains the city start including the first 5 km',()=>expect(rates.cityStart).toBe(7));
 it('retains the additional city kilometre rate',()=>expect(rates.cityKm).toBe(1.4));
 it('retains the van start including the first 5 km',()=>expect(rates.vanStart).toBe(14));
 it('retains the additional van kilometre rate',()=>expect(rates.vanKm).toBe(2.5));
 it('retains the waiting hourly rate',()=>expect(rates.waiting).toBe(15));
 it('retains the rental daily starting rate',()=>expect(rates.rental).toBe(79.5));
 it('retains the original phone contact',()=>expect(contact.tel).toBe('tel:+38551515515'));
});
