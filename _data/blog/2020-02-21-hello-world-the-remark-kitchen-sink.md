---
template: BlogPost
path: /manipulacion-matrices-sympy
date: 2021-09-26T12:12:25.364Z
title: 'Manipulación de matrices con sympy'
thumbnail: /assets/system-equations.jpg
---
# 

## Code

Syntax highlighting

```python
from __future__ import division
>>> from sympy import *
>>> x, y, z, t = symbols('x y z t')
>>> k, m, n = symbols('k m n', integer=True)
>>> f, g, h = symbols('f g h', cls=Function)

>>> from sympy.interactive.printing import init_printing
>>> init_printing(use_unicode=False, wrap_line=False)
>>> from sympy.matrices import Matrix, eye, zeros, ones, diag, GramSchmidt
>>> M = Matrix([[1,0,0], [0,0,0]]); M
>>> Matrix([M, (0, 0, -1)])
[1  0  0 ]
[        ]
[0  0  0 ]
[        ]
[0  0  -1]
>>> Matrix([[1, 2, 3]])
[1  2  3]
>>> Matrix([1, 2, 3])
[1]
[ ]
[2]
[ ]
[3]
```

[link with title](https://www.sympy.org/en/index.html "Sympy")

