const Logo = ({ width, height }) => {
  return (
    <svg
      width={width ? width : '1000'}
      height={height ? height : '147'}
      viewBox='0 0 1000 147'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      //   xmlns:xlink='http://www.w3.org/1999/xlink'
    >
      <rect width='1000' height='146.181' fill='url(#pattern0)' fillOpacity='0.7' />
      <defs>
        <pattern id='pattern0' patternContentUnits='objectBoundingBox' width='1' height='1'>
          <use xlinkHref='#image0_1_8' transform='scale(0.000505817 0.00346021)' />
        </pattern>
        <image
          id='image0_1_8'
          width='1977'
          height='289'
          xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB7kAAAEhCAYAAAAK1BRFAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMi1jMDAwIDc5LjU2NmViYzViNCwgMjAyMi8wNS8wOS0wODoyNTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjMxMDY3N0VDMjYwOTExRURCNDFGRkY4NUJEMTdDMjg0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjMxMDY3N0VEMjYwOTExRURCNDFGRkY4NUJEMTdDMjg0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzEwNjc3RUEyNjA5MTFFREI0MUZGRjg1QkQxN0MyODQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MzEwNjc3RUIyNjA5MTFFREI0MUZGRjg1QkQxN0MyODQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xa1ZaAAA1XUlEQVR42uzd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'
        />
      </defs>
    </svg>
  );
};

export default Logo;
