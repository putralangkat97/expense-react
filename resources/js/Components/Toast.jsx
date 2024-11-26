import { useEffect, useState } from 'react';

const Toast = ({
  message = 'Toast message',
  type = 'success',
  show = false,
}) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    show ? setVisible(true) : setVisible(false);
  }, [show]);

  let typeToast = type;
  switch (type) {
    case 'info':
      typeToast = 'alert-info';
      break;
    case 'error':
      typeToast = 'alert-error';
      break;
    default:
      typeToast = 'alert-success';
      break;
  }

  return (
    <>
      {visible && (
        <div className="toast toast-center toast-top z-50">
          <div className={`alert ${typeToast} shadow-md`}>
            <span>{message}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Toast;
