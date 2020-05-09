const filters = {
  inCurrency: function (value, currency) {
    // console.log('Filter: ', value)
    const result = (value / 100) + ' ' + currency
    return result
  }
}

export default filters
