---
template: BlogPost
path: /usando-latex-mathjax
date: 2021-12-27T12:12:25.364Z
title: 'Usando Latex y Mathjax para ecuaciones en la Web'
thumbnail: /assets/mathJax.png
---

Mathjax es un módulo de JavaScript para representar ecuaciones y símbolos matemáticos en páginas Web. Con Mathjax se puede visualizar notación matemática con Latex, MathML y AsciiMath. Sólo es necesario incluir este script en el código HTML:

```html
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
```

LateX es un sistema de formato de texto usado especialmente para documentación científica y técnica. Las publicaciones académicas generalmente usan LateX.

Ejemplos de notación matemática con MathJax:

En código LateX:

```
$$\begin{pmatrix}a & b\\\ c & d\end{pmatrix}$$
```
Así se visualiza:
$$\begin{pmatrix}a & b\\\ c & d\end{pmatrix}$$ 

LateX:
```
\begin{equation}
E = mc^2
\end{equation}
```

Resultado:
\begin{equation}
E = mc^2
\end{equation}

### Otros ejemplos:

$$\sum_{i=0}^n i^2 = \frac{(n^2+n)(2n+1)}{6}$$

$$
  \begin{pmatrix}
    a & b\\
    c & d\\
  \hline
    1 & 0\\
    0 & 1
  \end{pmatrix}
$$

f(n) =
\begin{cases}
n/2,  & \text{si $n$ es par} \\
3n+1, & \text{si $n$ es impar}
\end{cases}