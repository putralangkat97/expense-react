import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function SelectInput(
  { className = '', isFocused = false, children, ...props },
  ref,
) {
  const localRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => localRef.current?.focus(),
  }));

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <select
      {...props}
      className={'select select-bordered select-md ' + className}
      ref={localRef}
    >
      {children}
    </select>
  );
});
