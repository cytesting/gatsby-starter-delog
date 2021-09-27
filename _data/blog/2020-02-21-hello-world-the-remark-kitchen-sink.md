---
template: BlogPost
path: /manipulacion-matrices-sympy
date: 2021-09-26T12:12:25.364Z
title: 'Manipulación de matrices con sympy'
thumbnail: /assets/system-equations.jpg
---
Sympy es un paquete de python de matemática simbólica también conocido como sistema algebraico computarizado. Este paquete ha encontrado aplicación en áreas como la química, optimización matemática, estadística, dinámica y geometría.

En este ejemplo se aplica la reducción escalonada por renglones en una matriz:

```python
>>> from sympy import *
>>> C = Matrix([[1, 2, 1], [3, 4, 0], [1, 0, -2]])
>>> C.rref()
```

Para ejecutar operaciones elementales con renglones la sintaxis es un poco complicada si la comparamos con Matlab/Octave. Por ejemplo, en el siguiente código le sumamos -3 veces la fila 1 a la fila 2:

```python
>>> C = C.elementary_row_op(op='n->n+km', row=1, k=-3, row1=1, row2=0)
```

Aquí se muestran varias operaciones como hallar el determinante, la inversa y la solución de un sistema de ecuaciones:

```python
>>> C.det()
>>> C.inv()
>>> A = Matrix([ [2, 3, 5], [3, 6, 2], [8, 3, 6] ])
>>> x = Matrix(3,1,[3,7,5])
>>> b = A*x
>>> soln = A.LUsolve(b)
>>> soln
```

Más información de Sympy: [Sympy](https://www.sympy.org/en/index.html "Sympy")