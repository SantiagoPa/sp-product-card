import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components/';
import { product2 } from '../data/products';

describe('Porduct Title', () => {
    
  test('debe de mostrar el componente correctamente con el url de la imagen personalizada', () => {
    const wrapper = renderer.create(<ProductImage img="www.imagen.com" />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe de mostrar el componente con la url del producto', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        { () => <ProductImage img={product2.img} /> }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
