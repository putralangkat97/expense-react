const Toast = ({ message = 'Toast message', type = 'success' }) => {
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
    <div className="toast toast-center toast-top z-50">
      <div className={`alert ${typeToast}`}>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
