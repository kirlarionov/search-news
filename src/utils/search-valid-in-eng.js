const englishAlphabet = "abcdefghijklmnopqrstuvwxyz"
const numbers = "01234567890"
const symbols = "!@#$%^&*()_?<>+-=,.`~'|/{} "

export const validInEnglish = (setSearchQuery) => {
   const isValid = setSearchQuery
      .toLowerCase()
      .split("")
      .every((item) => (englishAlphabet + numbers + symbols).includes(item))

   return isValid
}
