class ConfigHelper {
  formatDate(date) {
    const [day, month, year] = date.split('/');
    return `${year}-${month}-${day}`;
  }

  formatCurrency(number) {
    return parseInt(number).toLocaleString('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });
  }
}

export default ConfigHelper;
