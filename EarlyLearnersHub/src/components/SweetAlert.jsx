import Swal from 'sweetalert2';

const SweetAlert = {
  showError: (message) => {
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: message,
    });
  },



  showSuccess: (message) => {
    Swal.fire({
      icon: 'success',
      title: 'Success',
      text: message,
      confirmButtonColor: "#3bc907ea",
      confirmButtonText: "Ok"
    });
  },

  showWarning: (message) => {
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: message,
    });
  },

  showInfo: (message) => {
    Swal.fire({
      text: message,
    });
  },
};

export default SweetAlert;