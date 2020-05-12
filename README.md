# js-paging

Paging badges generator

<img src="https://aralroca.com/images/blog-images/39.gif" alt="Example of paging badges" class="center" />


Learn more about it: https://aralroca.com/blog/pagination-badges


## Getting started

`yarn add js-paging`


## Usage

Demo: https://codesandbox.io/s/js-paging-j4hvd?from-embed

```js
import pageBadges from "js-paging";

// ...

return (
  {pageBadges({ currentPage, pages }).map((num, index) =>
    num ? (
      <button
        key={`page-${num}`}
        type="button"
        onClick={num === currentPage ? undefined : () => onChangePage(num)}
        className={`badge ${num === currentPage ? "current" : ""}`}
      >
        {num}
      </button>
    ) : (
      <span key={`separator-${index}`} className="separator">
        ...
      </span>
    )
  )}
)
```
