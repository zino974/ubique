### find

Find indices of nonzero elements


#### Syntax

ubique.find(x)


#### Description

Find indices of nonzero elements  



#### Arguments

|Params|Type|Description
|---------|----|-----------
|`x` | array/matrix | values


#### Examples

```js
ubique.find([0.3,-0.4,0.5,0.9].map(function(a){return a > 0}));
// [ 0, 2, 3 ]

ubique.find([[true,true],[false,true]]);
// [ 0, 1, 3 ]
```

