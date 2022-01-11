---
template: BlogPost
path: /libros-algebra
date: 2021-09-27T07:08:53.137Z
title: Libros de álgebra Lineal
thumbnail: /assets/axler3-cover.png
metaDescription: libros
---

Estos son algunos recursos para estudiar álgebra lineal.

## Libros disponibles en español:

* *"Álgebra Lineal"* Stanley Grossman.
* *"Álgebra Lineal"* David Lay.
* *"Fundamentos De Álgebra Lineal"* Ron Larson.
* *"Introducción al Álgebra Lineal"* Howard Anton.
* *"Algebra Lineal Desde un Enfoque Desarrollador"* Vivian Y Martinez Acosta.
* *"Algebra Lineal"* Maria Jose Arroyopaniagua.

## Libros disponibles en idioma inglés:

* *"Linear Algebra Done Right"* Sheldon Axler.
* *"Introduction to Linear Algebra"* Gilbert Strang.
* *"Advanced Linear Algebra"* Steven Roman.

## Otros recursos para aprender álgebra lineal

* Khan Academy: [https://www.khanacademy.org/math/linear-algebra](https://www.khanacademy.org/math/linear-algebra)
* Edx: [https://www.edx.org/course/fundamentos-de-algebra-lineal](https://www.edx.org/course/fundamentos-de-algebra-lineal)
* Coursera: [https://www.coursera.org/learn/linear-algebra-machine-learning](https://www.coursera.org/learn/linear-algebra-machine-learning)


### Ejemplo de ejercicio resuelto del libro de Grossman, página 589

Si A es semejante a B, demuestre:

\begin{equation}
detA = detB
\end{equation}

Por la definición de matrices semejantes podemos escribir:

\begin{equation}
B = C^{-1}AC
\end{equation}

donde C es una matriz invertible. Hallamos el determinante a cada lado:

\begin{equation}
detB = det(C^{-1}AC)
\end{equation}

Aplicamos las propiedades de las matrices:

\begin{equation}
detB = (detC^{-1}) (detA) (detC)
\end{equation}

Agrupamos:

\begin{equation}
    detB = (detC detC^{-1}) (detA) \label{eq1}
\end{equation}

Pero sabemos que:

\begin{equation}
CC^{-1} = I
\end{equation}

Aplicamos determinante de ambos lados:

\begin{equation}
det(CC^{-1}) = det(I) = 1
\end{equation}

Obtenemos:

\begin{equation}
(detC detC^{-1}) = 1
\end{equation}

Remplazamos este valor en la ecuación (1):

\begin{equation}
detB = (detC^{-1} detC) (detA) 
\end{equation}

\begin{equation}
detB = 1 (detA) 
\end{equation}

Obtenemos:

\begin{equation}
detB = detA 
\end{equation}

Que es lo mismo que:

\begin{equation}
detA = detB 
\end{equation}