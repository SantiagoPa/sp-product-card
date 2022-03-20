# SA-Product-Card

paquete de pruebas de despliegue en npm

### by Santiago Padilla

## Ejemplos

```
import { ProductCard, 
         ProductImage, 
         ProductTitle, 
         ProductButtons } from 'sp-product-card';

```


```
    <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, count, isMaxCountReached }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
    </ProductCard>
```