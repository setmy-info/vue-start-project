import jsdi from 'jsdi'

const $placeholders = jsdi.get().$placeholders

export default function () {
  /* if (arguments) {
    var resultString = arguments[0]
    var i
    for (i = 1; i < arguments.length; i++) {
      resultString = resultString.replace('{' + (i - 1) + '}', arguments[i])
    }
  }
  return resultString */
  return $placeholders.replace.apply($placeholders, arguments)
}
