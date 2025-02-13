Summary [![](https://raw.githubusercontent.com/chocolateboy/stats/master/badge.png)](https://www.npmjs.org/package/stats)
=======
Computes statistical measures (`sum`, `mean`, `standard deviation`, `min`, `max` etc.) of an `array` of finite numbers (i.e. no `NaN`s, `Infinity`s etc.).

Usage
=====
To install the module, use npm:

```sh
npm install stats
```

Then:

```js
var stats = require("stats");
```

Functions
=========
* `sum(array)` - returns the sum of the array's values.
* `sumSquare(array)` - returns the sum of the array's squared values.
* `mean(array)` - returns the mean of the values.
* `stddev(array, mean)` - returns the population standard deviation of the values.
* `variance(array, mean)` - returns the population variance of the values.
* `pstdev(array, mean)` - see `stddev()`.
* `pvariance(array, mean)` - see `variance()`.
* `pooled(array, stats)` - reduces an array of arrays by pooling their summed statistics to calculate the total `count`, `sum`, `min`, `max`, `variance`, `stdev` etc. This calculates the population measures by default (i.e. for the combined array) and has an optional second argument for specifying that the sample measures are required (`true`) or passing in the statistics for the array, which will be reused if they include sums of squares etc., otherwise they will be overwritten.
* `max(array)` - returns the highest of the array's values.
* `min(array)` - returns the lowest of the array's values.
* `stats(array, sample)` - returns a summary of the array's statistics (count, sum, min, max, mean, sums of squares etc.). If the optional second argument is present and `true` the sample-based measures are included in the returned object. The optional second argument can also be an object containing a subset of the statistics (sum, sums of squares etc.) in which case the object is completed. This is a convenience method, useful e.g. for pre-calculating the sums (if you're only interested in the sum) or the population measures (if you're only interested in the sample measures). Example:

```json
{
    "count": 3,
    "sum": 3,
    "sumSq": 13,
    "mean": 1,
    "stddev": 2,
    "variance": 4,
    "pstdev": 2,
    "pvariance": 4,
    "min": -1,
    "max": 3
}
```

* `sample` - see `sum()`, `sumsq()`, `mean()`, `stddev()`, `variance()`, `pstdev()`, `pvariance()`. These functions operate the same way as their non-sample equivalents, except that they measure the sample statistics, i.e. those based on the degrees of freedom. Example:

```js
stats.sample.variance([-1, 1, 3], 1)
```

* `sumq(array, power[, mean])` - calculates the power sums (the higher order power of a list: the equivalent of the sum of squares, sum of cubes, quads etc.). The optional third argument can be used to specify the mean value of the array (if known). This avoids needing to recalculate the mean if you have already retrieved it.

Example:

```js
stats.sumq([-1, -1, 2, 2], 4)
```

This is useful in conjunction with e.g. skewness, kurtosis and other measures which have a [generalized* definition](#see-also).

* `moments(array[, mean])` - calculates the sample moments of an array: i.e. the sums and sums of squares, cubes, quads etc. The optional second argument can be used to specify the mean value of the array (if known). This avoids needing to recalculate the mean if you have already retrieved it.

Example:

```json
{
  sum: 2,
  power: {
    1: 2,
    2: 0,
    3: 48,
    4: 576,
    5: 0,
    6: 13824
	}
}
```

* `gk(array, k[, mean])` - an alias for `sumq()`.



Benchmarks
==========
First run:

```sh
npm install benchmark
```

Then:

```sh
node test/bench.js
```

which will yield output similar to the following:

```sh
              array-size:   10                                  100                                10000                              100000
          lodash/sum(x,n):  8.88e+05 ±  0.90% (                   1)    2.92e+04 ±  0.71% (                  18)       275 ±  1.77% (                1955)         26 ±  2.62% (               22130)
            lodash/min(x):  9.71e+05 ±  1.46% (                   1)    3.51e+04 ±  0.83% (                  15)       406 ±  2.80% (                1577)         41 ±  3.32% (               23663)
            lodash/max(x):  1.18e+06 ±  1.44% (                   1)    3.51e+04 ±  0.87% (                  20)       402 ±  2.78% (                1982)         40 ±  3.18% (               29647)
         lodash/min+max(x):  5.55e+05 ±  0.57% (                   2)    1.73e+04 ±  0.68% (                  32)       188 ±  2.02% (                3264)       18.7 ±  2.50% (               29555)
             lodash/mean(x):  6.46e+05 ±  0.23% (                   1)    2.03e+04 ±  0.89% (                  32)       184 ±  1.81% (                3515)       18.0 ±  2.36% (               35807)
      lodash/sample/x,n-1:  6.35e+05 ±  0.20% (                   1)    1.99e+04 ±  1.23% (                  32)       181 ±  1.94% (                3503)       17.7 ±  3.13% (               35383)
            stats/sum(x,n):  1.72e+06 ±  0.75% (                   1)    4.31e+04 ±  0.92% (                  26)       473 ±  1.75% (                3641)         54 ±  2.34% (               32085)
              stats/min(x):  2.02e+06 ±  0.83% (                   1)    5.02e+04 ±  0.88% (                  26)       577 ±  1.96% (                3670)         59 ±  3.29% (               36020)
              stats/max(x):  2.50e+06 ±  0.66% (                   1)    6.47e+04 ±  0.65% (                  25)       622 ±  1.66% (                4025)         66 ±  2.94% (               37815)
           stats/min+max(x):  1.21e+06 ±  0.81% (                   2)    3.67e+04 ±  1.10% (                  34)       372 ±  1.81% (                6962)         38 ±  2.93% (               95235)
               stats/mean(x):  9.08e+05 ±  0.89% (                   2)    2.78e+04 ±  1.38% (                  32)       285 ±  2.09% (                7568)         30 ±  3.48% (              110941)
        stats/sample/x,n-1:  8.84e+05 ±  0.97% (                   2)    2.69e+04 ±  1.09% (                  33)       280 ±  2.72% (                7751)         30 ±  3.05% (              112896)

                            legend: [horizontal] time = array size (xs, [horizontal] units: s/ms/ops) [vertical] unit = # operations
```

Test
====
To test:

```sh
npm test
```

The test suite uses [mocha] and [chai].


See Also
========
* [Generalized covariance*](http://mathcentral.uregina.ca/QQ/database/QQ.09.02/mckee1.html)
* [Generalized kurtosis*](http://en.wikipedia.org/wiki/Kurtosis#Alternative_measures_of_kurtosis)
* [Generalized skewness*](http://en.wikipedia.org/wiki/Skewness#Sample_skewness)
* [tests/bench/stats-optimal.js](https://github.com/chocolateboy/stats/blob/master/test/bench/stats-optimal.js)
* [tests/bench/lodash-optimal.js](https://github.com/chocolateboy/stats/blob/master/test/bench/lodash-optimal.js)

&ast; indicates nomenclature used for this module


License
=======
BSD


Author
======
[chocolateboy](https://github.com/chocolateboy)
(alt text)](https://github.com/chocolateboy/stats)