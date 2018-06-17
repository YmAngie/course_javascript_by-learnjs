В примере ниже подключены два скрипта `small.js` и `big.js`.

Если предположить, что `small.js` загружается гораздо быстрее, чем `big.js` – какой выполнится первым?

```javascript
<script src="big.js"></script>
<script src="small.js"></script>
// big.js, обычная последовательность
```

```javascript
А вот так?
<script async src="big.js"></script>
<script async src="small.js"></script>
// small.js, async не сохраняет относительную последовательность
```

```javascript
А так?
<script defer src="big.js"></script>
<script defer src="small.js"></script>
// big.js, defer сохраняет относительную последовательность
```
