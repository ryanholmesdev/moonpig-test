import {renderHook, act} from '@testing-library/react-hooks';
import { productsTestData } from '../../tests/fixtures/productsFixtures';
import useProducts from './useProducts';

describe('useProducts - hook', () => {

  test('should return all products by default', () => {
   const {result} = renderHook(() => useProducts(productsTestData));

   expect(result.current.filteredProducts.length).toBe(productsTestData.length);
  });

  test('should only return products filtered by name', () => {
    const {result} = renderHook(() => useProducts(productsTestData));
    
    result.current.setFilter(productsTestData[0].Title);
    expect(result.current.filteredProducts.length).toBe(1);
   });

   test('should set filter value, when filter changed', () => {
    const {result} = renderHook(() => useProducts(productsTestData));
    
    result.current.setFilter(productsTestData[0].Title);
    expect(result.current.filter).toBe(productsTestData[0].Title);
   });
});